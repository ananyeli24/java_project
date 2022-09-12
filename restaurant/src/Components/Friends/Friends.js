import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import './Friends.css'
// import { Link } from 'react-router-dom'

export default function Friends() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="contact-container">
      <div className="friends-heading">
        <h1>My Friends</h1>
        <i class="fa-sharp fa-solid fa-user-plus"></i>
      </div>
      <section className="friends-form">
        <h3>Contact Form</h3>
        <form className="form-wrapper">
          <div className="form-box">
            <label>Name*</label>
            <input
              type="text"
              className="label_name"
              placeholder="Julia Rodriguez"
            />
          </div>

          <div className="form-box">
            <label>Number*</label>
            <input
              type="text"
              className="label_name"
              placeholder="888-888-8888"
            />
          </div>

          <div className="form-box">
            <label for="mail">Email*</label>
            <input
              type="email"
              className="label_name"
              id="mail"
              placeholder="jualia@hello.com"
              required
            />
          </div>


          <input
            className="submit"
            type="Submit"
            name="new-submission"
            value="Submit"
          />
        </form>
      </section>
      </div>
      <Footer />
    </React.Fragment>
  );
}
