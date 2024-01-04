import React from 'react';
import '../Assets/Aboutus.css';
import { useNavigate } from 'react-router-dom';

const Aboutus = () => {
    const navigate = useNavigate();
  const handleSendClick = () => {
        navigate("/")  
    };

  return (
    <div className="container">
      <h1>Connect with us</h1>
      <p>
        We would love to respond to your queries and help you succeed.
        <br />
      </p>
      <div className="contact-box">
        <div className="contact-left">
          <h3>Send your request</h3>
          <form>
            <div className="input-row">
              <div className="input-group">
                <label>Name</label>
                <input type="text" placeholder="Name" />
              </div>
              <div className="input-group">
                <label>Phone</label>
                <input type="number" placeholder="+91 1234567890" />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="something@gmail.com" />
              </div>
              <div className="input-group">
                <label>Subject</label>
                <input type="text" placeholder="Text" />
              </div>
            </div>
            <label>Message</label>
            <textarea rows="5" placeholder="Your message"></textarea>
            <button onClick={handleSendClick}>SEND</button>
          </form>
        </div>
        <div className="contact-right">
          <h3>Reach Us</h3>
          <table>
            <tr>
              <td>Email</td>
              <td>contactus@example.com</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>+91 9466926423</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                Street: 22 Main Road City: Bengaluru 070 0838 1384 DD3 6HF
                India
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
