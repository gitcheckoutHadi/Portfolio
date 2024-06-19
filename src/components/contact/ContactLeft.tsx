import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { contactDark } from "../../assets/index";
import { openNewWindow } from "../../utils/functions";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full object-cover rounded-lg mb-2 "
        src={contactDark}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Hadi Shouman</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Passionate junior developer eager to contribute and grow in the world of technology. Dedicated to learning and implementing innovative solutions.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: 
          <span style={{cursor:"pointer"}} onClick={() => window.location.href = 'tel:+96176837624'}
           className="text-lightText cursor-pointer">+961 76837624</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
  Email: <span onClick={() => window.location.href = 'mailto:hadishouman484@gmail.com'} className="text-lightText cursor-pointer">hadishouman484@gmail.com</span>
</p>

      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon"  onClick={() => openNewWindow("www.facebook.com/hadi.shouman.5")}>
            <FaFacebookF />
          </span>
          <span className="bannerIcon" onClick={() => openNewWindow("www.instagram.com/shouman1998hadi/")}>
            <FaInstagram />
          </span>
          <span className="bannerIcon" onClick={() =>
              openNewWindow("linkedin.com/in/hadi-shouman-241066236/")
            } >
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
