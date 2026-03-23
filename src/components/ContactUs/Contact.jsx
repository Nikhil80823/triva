import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/contactus/msg-icon.png";
import mail_icon from "../../assets/contactus/mail-icon.png";
import phone_icon from "../../assets/contactus/phone-icon.png";
import location_icon from "../../assets/contactus/location-icon.png";
import white_arrow from "../../assets/contactus/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c54afa3c-204a-428e-b194-8782ace14b56");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();

      setTimeout(() => {
        setResult("");
      }, 4000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section id="Contact">
      <div className="header">
        <h3 className="eyebrow">CONTACT US</h3>
        <h2 className="heading">Get In Touch </h2>
      </div>
      <div className="contact">
      
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          univeristy community.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@nikhilbhadwal808@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +1 3333333333
          </li>
          <li>
            <img src={location_icon} alt="" />
            77 Massachusetts Ave, Cambridge <br /> MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter yourr name"
            required
          />
          <label> Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
    </section>
    
  );
};

export default Contact;
