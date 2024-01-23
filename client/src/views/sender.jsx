import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Sender() {
  const navigate = useNavigate();

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
                  <h3>Your Code is Here:</h3>
                    <h4 className="text-white-800">000-000-000</h4>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white-900/25 px-6 py-10">
                      <div className="text-center">
                        <div className="mt-4 flex text-sm leading-6 text-white-800">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="text-xs leading-5 text-white-800">
                            or drag and drop
                          </p>
                        </div>
                        <p className="text-xs leading-5 text-white-800">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Submit
                  </button>
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
