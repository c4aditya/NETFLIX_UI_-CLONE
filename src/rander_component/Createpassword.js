import React from "react";
import Nev from "./Nev";
// import Footer from "./Footer";
import "./Createpassword.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Createpassword = () => {
  const [formData, setformdata] = useState({
    gmail: "",
    password: "",
  });

  function changehandler(event) {
    const { name, value } = event.target;
    setformdata({
      ...formData,
      [name]: value,
    });
  }
  const nevigator = useNavigate();
  function sumitHendler(event) {
    event.preventDefault();
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (gmailPattern.test(formData.gmail)) {
      toast.success("You are Login");
      setTimeout(() => {
        nevigator("/Home");
      }, 6000);
      // toast.success("You are Login")
      // nevigator('/Home')
    } else {
      toast.error("Plese Check the Gmail");
    }
  }

  return (
    <div className="crp">
      <Nev></Nev>
      <hr></hr>
      <div className="heading5">
        <h1>Create a password to start your membership</h1>
        <p>Just a few more steps and you're done! We hate paperwork, too.</p>
      </div>
      <div className="content">
        <form onSubmit={sumitHendler}>
          <input
            type="text8"
            placeholder="Enter your Gmail"
            name="gmail"
            value={formData.gmail}
            onChange={changehandler}
          ></input>
          <br></br>
          <input
            type="password"
            placeholder="Enter for confrem The password"
            name="password"
            value={formData.password}
            onChange={changehandler}
          ></input>
          <br></br>
          <button className="btn2" type="sumbit">
            Next
          </button>
          <ToastContainer />
        </form>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Createpassword;
