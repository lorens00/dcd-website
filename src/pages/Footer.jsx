import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-5 px-8 tracking-wide mt-16">
      <div className="relative max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-24 pt-5 md:pt-8">

          {/* Logo Section */}
          <div className="flex lg:col-span-1 max-w-md md:pr-0 lg:pr-12 justify-center md:justify-normal">
            <a href="/"><img src="/assets/icons/logo.png" alt="DelishCheese Dough Logo" className="h-16" /></a>
          </div>

          {/* About Us Section */}
          <div className="lg:col-span-2 max-w-md">
            <h4 className="text-lg font-semibold mb-4 text-gray-200">About Us</h4>
            <p className="text-gray-400 text-base">
              Better ingredients, better vibes—A Better Pizza. At DelishCheese Dough, we’re all about making pizza the way it should be: fresh, flavorful, and unforgettable. Love our brand? Check out our exclusive merch and bring the pizza passion with you everywhere!
            </p>
          </div>

          {/* Contact Us (Franchising) Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Franchising</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-base">Interested in franchising? Contact us at:</li>
              <li className="text-gray-400 text-base">dcdfoodsfranchising@gmail.com</li>
              <li className="text-gray-400 text-base">(045) 301-7900</li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Follow Us</h4>
            <ul className="flex flex-wrap gap-3">
              <li>
                <a href="https://www.facebook.com/dcdmainoffice" target='_blank' rel="noopener noreferrer">
                  <img src="/assets/icons/facebookLogo.svg" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/delishcheesedough/" target='_blank' rel="noopener noreferrer">
                  <img src="/assets/icons/instagramLogo.svg" alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@delishcheesedoughmain" target='_blank' rel="noopener noreferrer">
                  <img src="/assets/icons/tiktokLogo.svg" alt="TikTok" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Extra Bottom Space */}
      <div className="h-12 md:h-20"></div>

      {/* Footer Credits */}
      <div className="bg-gray-900 py-4 px-4 -mx-8 text-center mt-10">
        <p className="text-gray-400 text-base">© 2024 DelishCheese Dough. All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
