import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    // <>
    //   <div className="bg-white mt-40">
    //     <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-10 lg:px-8">
    //       <div className="relative isolate overflow-hidden bg-teal-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
    //         <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
    //           <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
    //             Share your productivity.
    //             <br />
    //             Start using our app today.
    //           </h2>
    //           <p className="mt-6 text-lg leading-8 text-white">
    //             Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
    //             Malesuada adipiscing sagittis vel nulla.
    //           </p>
    //           <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
    //             <Link
    //               to={"/sender"}
    //               className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    //             >
    //               Get Share
    //             </Link>
    //             <Link
    //               to={"/reciever"}
    //               className="text-sm font-semibold leading-6 text-white"
    //             >
    //               Reciever
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <>
      {/* component */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      {/*-
	You may need jQuery
	
	-*/}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n      /*\n\t\tYou may need this for responsive background\n\t\theader {\n\t\t\tbackground: url('bg-425.jpg');\n\t\t}\n\n\t\t@media only screen and (min-width:640px) {\n\t\t\theader {\n\t\t\t\tbackground: url('bg-640.jpg');\n\t\t\t}\n\t\t}\n\n\t\t@media only screen and (min-width:768px) {\n\t\t\theader {\n\t\t\t\tbackground: url('bg-768.jpg');\n\t\t\t}\n\t\t}\n\n\t\t@media only screen and (min-width:1024px) {\n\t\t\theader {\n\t\t\t\tbackground: url('bg-1024.jpg');\n\t\t\t}\n\t\t}\n\n\t\t@media only screen and (min-width:1025px) {\n\t\t\theader {\n\t\t\t\tbackground: url('bg-max.jpg');\n\t\t\t}\n\t\t} */\n      /* Default background by https://www.pexels.com/@knownasovan */\n      header {\n        background:url('https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/2020-01/dreamstime_4.0_automation.jpg?itok=i8Z1o20Q');}\n\t",
        }}
      />
      <nav
        id="nav"
        className="fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-transparent"
      >
        {/* Burger Nav Button on Mobile */}
        <div id="nav-open" className="p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1={3} y1={12} x2={21} y2={12} />
            <line x1={3} y1={6} x2={21} y2={6} />
            <line x1={3} y1={18} x2={21} y2={18} />
          </svg>
        </div>
      </nav>
      {/* Opened Nav in Mobile, you can use javascript/jQuery */}
      <div
        id="nav-opened"
        className="fixed left-0 right-0 hidden bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10"
      >
        <div className="p-2 divide-y divide-gray-600 flex flex-col">
          <a href="#about" className="p-2 font-semibold hover:text-indigo-700">
            About
          </a>
          <a href="#whyus" className="p-2 font-semibold hover:text-indigo-700">
            Why Us ?
          </a>
          <a
            href="#showcase"
            className="p-2 font-semibold hover:text-indigo-700"
          >
            Our Products
          </a>
        </div>
      </div>
      <header
        id="up"
        className="bg-center bg-fixed bg-no-repeat  bg-cover h-screen relative"
      >
        {/* Overlay Background + Center Control */}
        <div
          className="h-screen bg-opacity-50 bg-black flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div className="mx-2 text-center">
            <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
              <span className="text-white">Share</span> Your File
            </h1>
            <h2 className="text-gray-200 font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
            Ac euismod vel<span className="text-white">sit maecenas id</span> pellentesque{" "}
              <span className="text-white">eu sed consectetur</span> 
            </h2>
            <div className="inline-flex">
              <Link to="/sender">
              <button className="p-2 my-5 mx-2 bg-teal-700 hover:bg-teal-800 font-bold text-white rounded border-2 border-transparent hover:border-indigo-800 shadow-md transition duration-500 md:text-xl">
                Get Share
              </button>
              </Link>
              <Link to="/reciever">
                <button className="p-2 my-5 mx-2 bg-transparent border-2 bg-teal-700 bg-opacity-75 hover:bg-opacity-100 border-teal-700 rounded hover:border-black font-bold text-white shadow-md transition duration-500 md:text-lg">
                  Reciever
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HomePage;
