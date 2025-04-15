import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "your_service_id",       // replace with your EmailJS service ID
        "your_template_id",      // replace with your EmailJS template ID
        form.current,
        "your_public_key"        // replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("Message sent successfully! ✅");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send. ❌ Try again later.");
        }
      );
  };

  return (
    <div id="Contact" className="min-h-screen bg-transparent text-white py-20 px-4 md:px-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Contact Me</h2>
        <p className="text-slate-400 text-center mb-12">
          Feel free to reach out via this form. I'll get back to you soon!
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#ffffff] text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#ffffff] text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded-lg bg-[#ffffff] text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 border border-blue-950 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition duration-300"
          >
            📤 Send Message
          </button>
        </form>

        {status && (
          <p className="text-center mt-4 text-sm text-green-400">{status}</p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
