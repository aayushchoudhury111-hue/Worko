import { Link } from "react-router-dom";
import {
  Zap,
  Shield,
  IndianRupee,
  Headphones
} from "lucide-react";
import { Wrench, Hammer, Plug, Clock, LucideThumbsUp } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans bg-gray-50">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-4 md:px-10 py-4 bg-[#1e3a5f] text-white">
        <h1 className="text-xl md:text-2xl font-bold cursor-pointer">
          Wor<span className="text-orange-500">Ko</span>
        </h1>

        <div className="hidden md:flex gap-6 items-center">
          <Link
            to="/"
            className="relative group tracking-wide hover:text-orange-400"
          >
            Home
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </Link>

          <a
            href="#services"
            className="relative group tracking-wide hover:text-orange-400"
          >
            Services
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>

          <a
            href="#about"
            className="relative group tracking-wide hover:text-orange-400"
          >
            About
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>

          <a
            href="#login"
            className="relative group tracking-wide hover:text-orange-400"
          >
            Login
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </a>

          <button className="bg-orange-500 px-4 py-2 rounded-xl cursor-pointer hover:bg-orange-600 transition-colors duration-300">
            Get the App
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#1e3a5f] text-white px-4 md:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Home Services <br />
            <span className="text-orange-400">On-Demand!</span>
          </h2>

          <p className="mt-6 text-lg text-gray-200">
            Electricians, Plumbers, Carpenters & More at Your Doorstep
          </p>

          <div className="bg-white p-6 rounded-xl mt-8 shadow-lg w-full max-w-md text-black">
            <select className="w-full border p-3 rounded-md mb-3">
              <option>What do you need help with?</option>
              <option>Electrical</option>
              <option>Plumbing</option>
              <option>Carpentry</option>
            </select>

            <input
              type="text"
              placeholder="Enter your location"
              className="w-full border p-3 rounded-md mb-3"
            />

            <button className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-colors duration-300 cursor-pointer">
              Find Professionals
            </button>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            src="../public/WorkoMainImg.jpeg"
            alt="workers"
            className="rounded-xl shadow-xl"
          />
        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="px-10 py-16">
        <div className="grid md:grid-cols-3 gap-8">

          {[
            { name: "Electrician", path: "/electrician", img: "../public/Electrician.png" },
            { name: "Plumber", path: "/plumber", img: "../public/PlumberImage.png" },
            { name: "Carpenter", path: "/carpenter", img: "../public/Carpenter.png" }
          ].map((service, i) => (

            <Link to={service.path} key={i}>
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">

                <img
                  src={service.img}
                  alt={service.name}
                  className="h-70 w-full object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-semibold">{service.name}</h3>

              </div>
            </Link>

          ))}

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-10 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">

          <Feature icon={<Shield />} text="Vetted Professionals" />
          <Feature icon={<Zap />} text="Fast & Easy Booking" />
          <Feature icon={<IndianRupee />} text="Upfront Pricing" />
          <Feature icon={<Headphones />} text="24/7 Support" />

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center py-6">
        © 2025 WorKo. All rights reserved.
      </footer>

    </div>
  );
}

function Feature({ icon, text }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center hover:shadow-lg transition">
      <div className="text-orange-500 mb-3 text-3xl bg-orange-100 p-3 rounded-full">
        {icon}
      </div>
      <p className="font-medium">{text}</p>
    </div>
  );
}