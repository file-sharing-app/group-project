import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../App";

function Sender() {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('') //TODO: masukin room id dari input
  const {socket} = useContext(SocketContext)

  useEffect(() => {
    if (roomId) socket.emit('receiver-join', {roomId})
  }, [roomId])

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-10 lg:px-8">
          <div className="relative isolate overflow-hidden bg-sky-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Boost your productivity.
                <br />
                Start using our app today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla.
              </p>



              <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
                <div className="flex gap-x-4">
                  <div className="col-span-full">
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white-900/25 px-6 py-10">
                      <div className="text-center">
                        <div className="mt-4 flex text-sm leading-6 text-white-800">
                        <p>
                            ini data dalem border, buat nerima loading
                        </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>



            </div>
          </div>
        </div>
        </div>
    </>
  );
}

export default Sender;
