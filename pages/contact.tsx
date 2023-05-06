import React from 'react';
import Hero from "../components/Hero"
import Contact from "@/components/Contact";

const contact = () => {
  return (
    <div>

      <Hero
        headings="Contact"
        message="Submit the form below for more bread in your life "
      />
      <Contact />
    </div>
  );
};

export default contact;
