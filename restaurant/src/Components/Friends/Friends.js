import React from "react";
import { useState, useEffect } from 'react';
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
// import { useState } from 'react';
import { Card } from "../Card/Card"
import "./Friends.css";
// import { Link } from 'react-router-dom'

export default function Friends() {
  const [friends, setFriends] = useState([])

  let fetchUrl = 'http://localhost:3001/api/friends'

  const showFriends = async (url) => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setFriends(data)
    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    const showFriends = async () => {
      try {
        const res = await fetch(fetchUrl)
        const data = await res.json()
        setFriends(data)
      } catch (err) {
        console.log(err)
      }

    }
    showFriends();
    console.log(friends)
  }, [])
  
  const [fullname, setFullname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/api/contactinfo",{
      method: "POST",
      body: JSON.stringify({
        fullname: fullname,
        email: email,
        phone: phonenumber,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };
  return (
    <React.Fragment>
      <NavBar />
      <div className="contact-container">
        <div className="friends-heading">
          <h1>My Friends <i class="fa-sharp fa-solid fa-user-plus"></i></h1>
          
        </div>
        <section className="friends-form">
          <h3>Contact Form</h3>
          <form className="form-wrapper" onSubmit={handleSubmit}>
            <div className="form-box">
              <label>Name*</label>
              <input
                type="text"
                className="label_name"
                placeholder="Julia Rodriguez"
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>

            <div className="form-box">
              <label>Number*</label>
              <input
                type="text"
                className="label_name"
                placeholder="888-888-8888"
                onChange={(e) => setPhonenumber(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
        <div className="contact-sub-content">
        <section className="friends-list">
          <h2>My Friends <i class="fa-sharp fa-solid fa-users"></i></h2>
          {
          friends.map((item, key) => {
            return (
              <Card
                fullname={item.fullname}
                 phonenumber={item.phonenumber}
              />
            )
          })
        }

        </section>
        <section className="favorites">
          <h2>Favorites <i class="fa-sharp fa-solid fa-star"></i></h2>
          
        </section>
        <section className="history">
          <h2>History <i class="fa-sharp fa-solid fa-clock-rotate-left"></i></h2>
        </section>
      </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
