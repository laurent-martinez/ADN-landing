import Navbar from '@/components/Navbar';
import React from 'react';

function Contact() {
  return (
    <div className="overflow-hidden w-screen h-screen">
      <Navbar />
      <div className="contact-container w-full h-full bg-[#123c6b] flex justify-center items-center">
        <h1 className="font-bold text-7xl text-[#FFFDD0]">Contact</h1>
      </div>
    </div>
  );
}

export default Contact;
