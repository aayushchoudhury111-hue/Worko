import React, { useState } from "react";
import { CheckCircle, Zap, Clock, Star, Droplet } from "lucide-react";

export default function Plumber() {
  const [selected, setSelected] = useState(null);

  const issues = [
    "Leakage & Dripping",
    "Pipe Burst",
    "Drain Blockage",
    "Water Heater Issue",
    "Toilet Repair",
    "Other Issue",
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-[#1f3b64] to-[#2b4f85] text-white px-10 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Wor<span className="text-orange-400">Ko</span>
        </h1>

        <div className="hidden md:flex gap-8 items-center text-sm">
          <a className="hover:text-orange-400 cursor-pointer">Home</a>
          <a className="cursor-pointer">Services</a>
          <a className="cursor-pointer">About Us</a>
          <a className="cursor-pointer">Login</a>

          <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-xl">
            Get the App
          </button>
        </div>
      </nav>

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-[#1f3b64] to-[#2b4f85] text-white px-10 py-16 grid md:grid-cols-2 gap-10 items-center">

        <div>

          <h2 className="text-4xl font-extrabold flex items-center gap-3">
            <Droplet className="text-blue-400" /> Plumber
          </h2>

          <p className="mt-4 text-xl font-semibold">
            Tell us your plumbing problem
          </p>

          <p className="mt-2 text-gray-200">
            Describe the issue so we can match you with the best plumber nearby.
          </p>

          <div className="flex gap-6 mt-6 text-sm">

            <div className="flex items-center gap-2">
              <Zap size={16} /> Quick Job Booking
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle size={16} /> Verified Experts
            </div>

            <div className="flex items-center gap-2">
              <Clock size={16} /> On-Time Service
            </div>

          </div>
        </div>

        {/* Image Block */}

        <div className="flex justify-center">
          <div className="w-[350px] h-[350px] bg-white/20 rounded-2xl flex items-center justify-center text-gray-200">
            Plumber Image Block
          </div>
        </div>

      </section>

      {/* Main Section */}

      <section className="px-10 py-16 grid md:grid-cols-3 gap-10">

        {/* Left Content */}

        <div className="md:col-span-2 space-y-6">

          <h3 className="text-2xl font-bold text-gray-800">
            What seems to be the problem?
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            {issues.map((issue, index) => (

              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`rounded-xl border px-4 py-3 transition ${
                  selected === index
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {issue}

              </button>

            ))}

          </div>

          {/* Description */}

          <textarea
            placeholder="Describe your plumbing issue..."
            className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            rows={4}
          />

          {/* Upload */}

          <div className="border-2 border-dashed border-gray-300 p-10 rounded-2xl text-center text-gray-500 bg-white">
            Drag & drop or browse to upload photo
          </div>

          {/* Location */}

          <div className="flex gap-4">

            <input
              type="text"
              defaultValue="G-209, District Center, Janakpuri, New Delhi"
              className="flex-1 p-3 rounded-xl border border-gray-300"
            />

            <button className="border px-4 rounded-xl hover:bg-gray-100">
              Detect Location
            </button>

          </div>

          {/* Book Button */}

          <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-6 text-lg rounded-2xl">
            Book a Plumber
          </button>

        </div>

        {/* Right Sidebar */}

        <div className="space-y-6">

          {/* Rating Card */}

          <div className="bg-white rounded-2xl shadow-md p-6 space-y-3">

            <div className="flex items-center gap-2 text-xl font-bold">
              4.7 <Star className="text-yellow-400" />
            </div>

            <p className="text-sm text-gray-500">
              1,200+ Ratings
            </p>

            <ul className="space-y-2 text-sm">

              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-orange-500" />
                Experienced & Verified
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-orange-500" />
                Arrival Within 60 Minutes
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-orange-500" />
                Cash, Card & UPI Accepted
              </li>

            </ul>

          </div>

          {/* Technician Image */}

          <div className="w-full h-[200px] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
            Plumber Team Image Block
          </div>

          {/* Map */}

          <div className="w-full h-[200px] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
            Map Location Image Block
          </div>

        </div>

      </section>

    </div>
  );
}  