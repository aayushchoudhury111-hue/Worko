import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <section className="services">
      <h2>What do you need?</h2>

      <div className="service-grid">
        
        <Link to="/electrician" className="service-card">
          ⚡
          <span>Electrician</span>
        </Link>

        <div className="service-card">
          🚰
          <span>Plumber</span>
        </div>

        <div className="service-card">
          🪚
          <span>Carpenter</span>
        </div>

        <div className="service-card">
          ❄️
          <span>AC Repair</span>
        </div>

        <div className="service-card">
          🔧
          <span>Appliance</span>
        </div>

        <div className="service-card">
          🪑
          <span>Furniture</span>
        </div>

      </div>
    </section>
  );
}

export default Services;