import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../App";

function Sender() {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [buffer, setBuffer] = useState([]);
  const [metadata, setMetadata] = useState({});
  const { socket } = useContext(SocketContext);

  function generateRoomId() {
    return `${Math.trunc(Math.random() * 999)}-${Math.trunc(
      Math.random() * 999
    )}-${Math.trunc(Math.random() * 999)}`;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const file = event.target.querySelector('input[type="file"]').files[0];
    console.log(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      setBuffer(new Uint8Array(reader.result));
      console.log(buffer, "test");
      shareFile({
        filename: file.name,
        total_buffer_size: new Uint8Array(reader.result).byteLength,
        buffer_size: 1024,
      });
    };
    reader.readAsArrayBuffer(file);
  }

  function shareFile(metadata) {
    socket.emit("sender-file-meta", {
      roomId,
      metadata,
    });
    setMetadata(metadata);
  }

  useEffect(() => {
    setRoomId(generateRoomId());
  }, []);

  useEffect(() => {
    if (roomId) socket.emit("sender-join", { roomId });
  }, [roomId]);

  useEffect(() => {
    socket.on("init", (data) => {});
    console.log(buffer, "<<< buffer");

    if (buffer.length != 0) {
      socket.on("server-start", () => {
        console.log("server-start");
        console.log(buffer, "<<< buffer");
        let chunk = buffer.slice(0, metadata.buffer_size);
        setBuffer(buffer.slice(metadata.buffer_size, buffer.length));
        console.log(chunk, "<<<< chunk");
        if (chunk.length != 0) {
          socket.emit("sender-file-raw", {
            roomId,
            buffer: chunk,
          });
        }
      });
    }

    return () => {
      socket.off("init", (data) => {});
      socket.off('server-start', () => {
        console.log("server-start");
        console.log(buffer, "<<< buffer");
        let chunk = buffer.slice(0, metadata.buffer_size);
        setBuffer(buffer.slice(metadata.buffer_size, buffer.length));
        console.log(chunk, "<<<< chunk");
        if (chunk.length != 0) {
          socket.emit("sender-file-raw", {
            roomId,
            buffer: chunk,
          });
        }
      })
    }
  }, [socket, buffer, metadata]);

  return (
    <>
      <div className="bg-white mt-40">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-10 lg:px-8">
          <div className="relative isolate overflow-hidden bg-teal-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Upload Your Data
                <br />
                Start using our app today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md lg:col-span-5 lg:pt-2 mt-32">
              <div className="flex gap-x-4">
                <div className="col-span-full text-white font-bold">
                  <h3>Your Code is Here:</h3>
                  <h4 className="text-white">{roomId}</h4>
                  <input
                    className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-black transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-black focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary mt-5"
                    type="file"
                    id="formFile"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white h-fit self-end mt-5">
                Send File
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sender;
