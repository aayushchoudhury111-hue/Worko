import { Link } from "react-router-dom";
import {
  Zap,
  Shield,
  IndianRupee,
  Headphones
} from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans bg-gray-50">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-5 bg-[#1e3a5f] text-white">
        <h1 className="text-2xl font-bold">
          Wor<span className="text-orange-500">Ko</span>
        </h1>

        <div className="flex gap-8 items-center">
          <Link to="/">Home</Link>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Login</a>

          <button className="bg-orange-500 px-4 py-2 rounded-lg">
            Get the App
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#1e3a5f] text-white px-10 py-20 grid md:grid-cols-2 gap-10 items-center">

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

            <button className="w-full bg-red-500 text-white py-3 rounded-md">
              Find Professionals
            </button>
          </div>
        </div>

        <div>
          <img
            src="../public/WorkoMainImg.jpeg"
            alt="workers"
            className="rounded-xl shadow-xl"
          />
        </div>

      </section>

      {/* SERVICES */}
      <section className="px-10 py-16">
        <div className="grid md:grid-cols-3 gap-8">

          {[
            { name: "Electrician", path: "/electrician" },
            { name: "Plumber", path: "/plumber" },
            { name: "Carpenter", path: "/carpenter" }
          ].map((service, i) => (

            <Link to={service.path} key={i}>
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition cursor-pointer">

                <img
                  src="../public/Electrician.png"
                  alt={service.name}
                  className="h-40 w-full object-cover rounded-lg mb-4"
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
    <div className="bg-white p-6 rounded-xl shadow flex flex-col items-center">
      <div className="text-orange-500 mb-3">{icon}</div>
      <p className="font-medium">{text}</p>
    </div>
  );
}