import React, { useState } from 'react';
import Header2 from '../components/Header2';

const Contact = () => {
  // State to manage form input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data
    console.log(formData);

    // Set the form submitted flag to true
    setSubmitted(true);
  };

  return (
    <>
      <div className="mb-24 pb-10 md:pb-24">
        <Header2 />
      </div>
      <div className="grid sm:grid-cols-2 items-start gap-16 p-8 mx-auto max-w-6xl bg-white mt-10 md:mt-20">
      <div className='bg-red-800 p-12 rounded'>
        <h1 className="font-allura text-stone-100 text-3xl lg:text-5xl font-semibold">Let's Talk!</h1>
        <p className="text-sm text-stone-50 mt-4">
        Dreaming of owning your own pizza business? Contact us today to explore our franchising opportunities!
        </p>

        <div className="mt-12">
            <h2 className="text-gray-300 text-base font-bold">Email</h2>
            <ul className="mt-4">
                <li className="flex items-center">
                <img src="/assets/mail.svg" className="w-8 mr-4" alt="Mail Icon" />
                <a href="mailto:dcdfoodsfranchising@gmail.com" className="text-stone-100 text-sm flex flex-col">
                    <strong>dcdfoodsfranchising@gmail.com</strong>
                </a>
                </li>
            </ul>
        </div>


        <div className="mt-12">
          <h2 className="text-gray-300 text-base font-bold">Socials</h2>

          <ul className="flex mt-4 space-x-4">
            <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
               <img src="/assets/facebookLogo.svg" alt="" />
              </a>
            </li>
            <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
               <img src="/assets/instagramLogo.svg" alt="" />
              </a>
            </li>
            <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
               <img src="/assets/tiktokLogo.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className='py-6'>
        <h2 className="text-gray-800 text-2xl font-bold mb-4">Send us a Message</h2>
        {submitted ? (
          <p className="text-green-500">Your message has been submitted successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <button type="submit" className="bg-red-800 text-white p-2 rounded-md mt-4 w-full">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
    </>
    
  );
};

export default Contact;
