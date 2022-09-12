import React from "react";
import "./Home.css";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <React.Fragment>
      <NavBar />
      <section className="hero-image">
        <div className="hero-content">
          <Link to="/restaurants" className="button">
            See near by restaurants
          </Link>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}
