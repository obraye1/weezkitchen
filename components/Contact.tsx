import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-4 h-screen">
      <h1 className="p-4 text-center font-bold text-2xl ">Let us Break Bread</h1>
      <form className="max-w-[600px] m-auto ">
        <div className="grid grid-cols-2 gap-2">
          <input className="p-3 border shadow-lg" type="text" placeholder="name" />
          <input className="p-3 border shadow-lg" type="email" placeholder="Email" />
        </div>
        <input className="p-3 border shadow-lg w-full my-2" type="text" placeholder="Subject" />
        <textarea
        className="w-full p-3 border shadow-lg  "
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Message"
        ></textarea>
        <button className="border shadow-lg p-3 w-full mt-2">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
