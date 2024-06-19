import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import TextInput from "../../elements/Inputs/TextInputs/TextInput";
import TextArea from "../../elements/Inputs/TextArea/TextArea";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errUserName, setErrUserName] = useState("");
  const [errPhoneNumber, setErrPhoneNumber] = useState("");
  const [errSubject, setErrSubject] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSend = (e: any) => {
    e.preventDefault();
    if (username === "") {
      setErrUserName("Username is required!");
    } else if (phoneNumber === "") {
      setErrPhoneNumber("Phone number is required!");
    } else if (email === "") {
      setErrEmail("Please give your Email!");
    } else if (!isValidEmail(email)) {
      setErrEmail("Give a valid Email!");
    } else if (subject === "") {
      setErrSubject("Please give your Subject!");
    } else if (message === "") {
      setErrMessage("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your message has been sent successfully!`
      );
      setErrMsg("");

      // Send email using EmailJS
      emailjs.send('your_service_id', 'your_template_id', {
        from_name: username,
        from_phone: phoneNumber,
        from_email: email,
        subject: subject,
        message: message
      }, 'your_user_id')
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
      }, (err) => {
        console.log('Failed to send email. Error: ', err);
      });

      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce" 
                style={{color:"#0E8388"}}>
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <TextInput id="Names" text="YOUR NAME" value={username} error={errUserName}
                    onChange={(e) => {
                      setErrUserName("")
                      setUsername(e.target.value)
                    }} />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <TextInput id="PHNUM" text="Phone Number"
                    value={phoneNumber} error={errPhoneNumber}
                    onChange={(e) => {
                      setErrPhoneNumber("")
                      setPhoneNumber(e.target.value)
                    }} />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <TextInput id="UAcount" text="Email"
                  value={email} error={errEmail}
                  onChange={(e) => {
                    setErrEmail("")
                    setEmail(e.target.value)
                  }} />
              </div>
              <div className="flex flex-col gap-4">
                <TextInput id="HOOODDSAD" text="Subject"
                  value={subject} error={errSubject}
                  onChange={(e) => {
                    setErrSubject("")
                    setSubject(e.target.value)
                  }} />
              </div>
              <div className="flex flex-col gap-4">
                <TextArea placeholder={"Message"}
                  onChange={(e) => {
                    setErrMessage("")
                    setMessage(e.target.value)
                  }}
                  value={message} error={errMessage} />
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
