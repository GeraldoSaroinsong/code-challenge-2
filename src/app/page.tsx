import Button from "@/components/Button";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="xl:w-[60%] mx-auto flex flex-col font-sans">
      {/* Hero Section */}
      <section className="flex flex-row px-4 items-center">
        <div className="xl:py-16 xl:px-0 py-6 flex flex-col-reverse xl:flex-row xl:items-center relative">
          <div className="xl:flex xl:flex-col xl:items-start xl:text-left">
            <div className="xl:flex xl:flex-col xl:items-start xl:text-left divide-y-2 w-[90%] m-auto xl:m-0">
              <h1 className="font-bold text-3xl py-4 xl:text-6xl">
                Come Design With Us
              </h1>
              <p className="py-4 xl:text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi quam numquam eius natus id quis illo velit vel
                inventore adipisci necessitatibus, quos eaque tempore reiciendis
                eveniet dolorem aut modi optio!
              </p>
            </div>
            <Button title="Read More" />
          </div>
          <img
            src="https://images.unsplash.com/photo-1730388623585-ce2dec1e2355?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero img"
            className="my-2 xl:rounded-l-3xl xl:rounded-r-none xl:shadow-none shadow-md xl:w-[50%] w-full rounded-md xl:z-10"
          />
          <div className="none xl:absolute right-0 top-12 bg-gray-500 rounded-l-full h-[80%] w-[55%]"></div>
        </div>
      </section>
      {/* Socials Section */}
      <section className="px-4 flex flex-col py-10 gap-2">
        <h1 className="font-semibold text-2xl">Socials</h1>
        <ul className="flex flex-row rounded-md text-gray-700 bg-gray-300 shadow-md p-4 justify-evenly flex-wrap gap-4">
          <li className="flex gap-2 items-center p-4 text-lg rounded-full border border-gray-500 bg-white hover:bg-gray-500 hover:text-white hover:cursor-pointer transition duration-200">
            <FaFacebook />
            Facebook
          </li>
          <li className="flex gap-2 items-center p-4 text-lg rounded-full border border-gray-500 bg-white hover:bg-gray-500 hover:text-white hover:cursor-pointer transition duration-200">
            <FaInstagram />
            Instagram
          </li>
          <li className="flex gap-2 items-center p-4 text-lg rounded-full border border-gray-500 bg-white hover:bg-gray-500 hover:text-white hover:cursor-pointer transition duration-200">
            <FaPinterest />
            Pinterest
          </li>
          <li className="flex gap-2 items-center p-4 text-lg rounded-full border border-gray-500 bg-white hover:bg-gray-500 hover:text-white hover:cursor-pointer transition duration-200">
            <FaYoutube />
            Youtube
          </li>
        </ul>
      </section>
      {/* Services Section */}
      <section className="px-4 flex flex-col py-10 gap-4">
        <h1 className="font-semibold text-2xl">Services</h1>
        <div className="flex flex-row overflow-auto gap-8 w-full">
          <div className="flex flex-col shrink-0 w-2/3 xl:w-1/3">
            <img
              src="https://plus.unsplash.com/premium_photo-1661761502109-ed89819b0acd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="consultation"
              className="rounded-xl shadow-md"
            />
            <div className="flex justify-between pt-2 pb-4">
              <h2 className="text-lg">Consultation</h2>
              <h2 className="text-lg hover:underline hover:underline-offset-4">
                Read More
              </h2>
            </div>
          </div>
          <div className="flex flex-col shrink-0 w-2/3 xl:w-1/3">
            <img
              src="https://plus.unsplash.com/premium_photo-1661382011487-cd3d6b1d9dff?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="consultation"
              className="rounded-xl shadow-md"
            />
            <div className="flex justify-between pt-2 pb-4">
              <h2 className="text-lg">Design</h2>
              <h2 className="text-lg hover:underline hover:underline-offset-4">
                Read More
              </h2>
            </div>
          </div>
          <div className="flex flex-col shrink-0 w-2/3 xl:w-1/3">
            <img
              src="https://plus.unsplash.com/premium_photo-1663047145996-cdb1ef24a17a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="consultation"
              className="rounded-xl shadow-md"
            />
            <div className="flex justify-between pt-2 pb-4">
              <h2 className="text-lg">Revisions</h2>
              <h2 className="text-lg hover:underline hover:underline-offset-4">
                Read More
              </h2>
            </div>
          </div>
          <div className="flex flex-col shrink-0 w-2/3 xl:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="consultation"
              className="rounded-xl shadow-md"
            />
            <div className="flex justify-between pt-2 pb-4">
              <h2 className="text-lg">Purchase</h2>
              <h2 className="text-lg hover:underline hover:underline-offset-4">
                Read More
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
