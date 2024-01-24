import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Sender() {
  const navigate = useNavigate();

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

              <form>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Input Your Code Here..."
                />
                <button className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-white-800 shadow-sm hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white h-fit self-end mt-5">
                  Submit
                </button>
              </form>
              
            </div>
            <div>
              <form className="w-full max-w-md lg:col-span-5 lg:pt-2 mt-32 justify-center">
                <div className="flex gap-x-4">
                  <div className="col-span-full">
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white-900/25 px-6 py-10">
                      <div className="text-center">
                        <div className="mt-4 flex text-sm leading-6 text-white-800">
                          <h3 variant="h6" color="blue-gray" className="-mb-3">
                            Loading...
                          </h3>
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
