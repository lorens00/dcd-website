import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Header2 from '../components/Header2';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '', // Fixed field name to match state
    email: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

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

    const emailParams = {
      from_name: formData.fullName, // Full name from form
      from_email: formData.email,   // Sender's email
      message: formData.message     // Message content
    };

    emailjs.send(
      'service_06awvub',  // Your EmailJS Service ID
      'template_zt3t2ag', // Your EmailJS Template ID
      emailParams,        // The form data
      'bVrFlfAReK3bxGw0V' // Your EmailJS Public Key
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setError('');

        // Show TailwindCSS popup notification
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 5000); 

        // Reset form after successful submission
        setFormData({ fullName: '', email: '', message: '' });
      },
      (err) => {
        console.log('FAILED...', err);
        setError('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <>
      <div className="mb-24 pb-10 md:pb-24">
        <Header2 />
      </div>

      {/* TailwindCSS Custom Pop-up */}
      {showPopup && (
        <div className="fixed top-5 right-5 bg-green-500 text-white p-4 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11V7a1 1 0 10-2 0v2a1 1 0 001 1h.01a1 1 0 100-2H11zm0 4a1 1 0 10-2 0 1 1 0 002 0z" clipRule="evenodd" />
          </svg>
          <div>
            <strong>Message Sent!</strong><br />
            You can also email us at 
            <a href="mailto:dcdfoodsfranchising@gmail.com" className="underline ml-1">dcdfoodsfranchising@gmail.com</a>.
          </div>
        </div>
      )}

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
                <img src="/assets/icons/mail.svg" className="w-8 mr-4" alt="Mail Icon" />
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
                <a href="https://www.facebook.com/dcdmainoffice" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/facebookLogo.svg" alt="" />
                </a>
              </li>
              <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.instagram.com/delishcheesedough/" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/instagramLogo.svg" alt="" />
                </a>
              </li>
              <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.tiktok.com/@delishcheesedoughmain" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/tiktokLogo.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className='py-6'>
          <h2 className="text-gray-800 text-2xl font-bold mb-4">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
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

            {error && <p className="text-red-500">{error}</p>}

            <button type="submit" className="bg-red-800 text-white p-2 rounded-md mt-4 w-full">
              Submit
            </button>
          </form>
        </div>
        <div className="h-16 md:h-24"></div>
      </div>
    </>
  );
};

export default Contact;
