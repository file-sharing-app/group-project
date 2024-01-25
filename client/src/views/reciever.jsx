import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../App";
import download from "downloadjs";
import Swal from "sweetalert2";

function Sender() {
  const navigate = useNavigate();
  const [file, setFile] = useState({});
  const [roomId, setRoomId] = useState("");
  const [status, setStatus] = useState(false)
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    if (roomId && !file.metadata) {
      socket.on("server-meta", (metadata) => {
        console.log("server-meta", metadata);
        setFile({ metadata, transmitted: 0, buffer: [] });
        if (!file.metadata) {
          socket.emit("receiver-start", { roomId });
        }
      });
    }

    return () => {
      socket.off("server-meta", (metadata) => {
        console.log("server-meta", metadata);
        setFile({ metadata, transmitted: 0, buffer: [] });
        if (!file.metadata) {
          socket.emit("receiver-start", { roomId });
        }
      });
    }
  }, [socket, roomId, file]);

  useEffect(() => {
    if (file.metadata) {
      
      socket.on("server-share", (buffer) => {
        console.log('masuk', buffer);
        if (!status) {
          
          pushBuffer(buffer);
          sumTransmitted(buffer);
          console.log("file.transmitted:", file.transmitted);
          console.log(
            "file.metadata.total_buffer_size:",
            file?.metadata?.total_buffer_size
            );
            console.log("file: ", file);
            if (file.transmitted) {
              if (file.transmitted >= file?.metadata?.total_buffer_size) {
                console.log("File fully transmitted. Initiating download...");
                download(new Blob(file.buffer), file.metadata.filename);
                setFile({});
                setStatus(true)
              }
            } else {
              console.log("Continue the transmission process...");
              // socket.emit("receiver-start", { roomId });
            }
            }
          });
        }

    return () => {
      socket.off("server-share", () => {
        console.log("file.transmitted:", file.transmitted);
        console.log(
          "file.metadata.total_buffer_size:",
          file?.metadata?.total_buffer_size
        );
        console.log("file: ", file);
        if (file.transmitted) {
          if (file.transmitted >= file?.metadata?.total_buffer_size) {
            console.log("File fully transmitted. Initiating download...");
            download(new Blob(file.buffer), file.metadata.filename);
            setFile({});
          }
        } else {
          console.log("Continue the transmission process...");
          socket.emit("receiver-start", { roomId });
        }
      });
    };
  }, [socket, file]);

  useEffect(() => {
    console.log(roomId, "<- roomId");
  }, [roomId]);

  // function pushBuffer(buffer) {
  //   setFile((prevFile) => ({
  //     ...prevFile,
  //     buffer: [...prevFile.buffer, buffer],
  //   }));
  // }
  function pushBuffer(buffer) {
    setFile((prevFile) => ({
      ...prevFile,
      buffer: prevFile.buffer ? [...prevFile.buffer, buffer] : [buffer],
    }));
  }

  function sumTransmitted(buffer) {
    setFile((prevFile) => ({
      ...prevFile,
      transmitted: prevFile.transmitted + buffer.byteLength,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
      const code = event.target[0].value;
      setRoomId(code);
      const result = socket.emit("receiver-join", {
        roomId: event.target[0].value,
      });
      if (result) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Please Wait Download Processing...`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
      return null;
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "OOPS!!!",
        text: error.response.data.message,
      });
    }
  }

  return (
    <>
      <div className="bg-white mt-40">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-10 lg:px-8">
          <div className="relative isolate overflow-hidden bg-teal-700 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Boost your productivity.
                <br />
                Start using our app today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla.
              </p>

              <form onSubmit={handleSubmit}>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  name="code"
                  placeholder="Input Your Code Here..."
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-white-800 shadow-sm hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white h-fit self-end mt-5"
                >
                  Submit
                </button>
              </form>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sender;
