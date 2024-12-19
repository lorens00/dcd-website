import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 tracking-wide">
      <div className="text-center">
        {/* Company Logo */}
        <div className="mb-6">
            <a href="/"><img
            src="/assets/logo.png" 
            alt="Company Logo"
            className="w-36 md:w-40 mx-auto text-white"
          /></a>
          
        </div>

        <h6 className="text-lg text-gray-300">Stay connected with us:</h6>

        <ul className="flex flex-wrap justify-center gap-x-8 gap-4 mt-8 mb-12">
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/facebookLogo.svg"
                className="w-12 h-12 md:w-16 md:h-16"
                alt="Facebook"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/instagramLogo.svg"
                className="w-12 h-12 md:w-16 md:h-16"
                alt="Instagram"
              />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/tiktokLogo.svg"
                className="w-12 h-12 md:w-16 md:h-16"
                alt="TikTok"
              />
            </a>
          </li>
        </ul>

        <p className="text-base text-gray-300">© All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
