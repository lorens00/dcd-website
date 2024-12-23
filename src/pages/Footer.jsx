import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 px-8 tracking-wide mt-16">
      <div className="relative max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-10">

          {/* Logo Section */}
          <div className="flex items-center lg:col-span-1 max-w-md">
            <a href="/"><img src="/assets/logo.png" alt="DelishCheese Dough Logo" className="h-12 mr-4" /></a>
          </div>

          {/* About Us Section */}
          <div className="lg:col-span-2 max-w-md">
            <h4 className="text-lg font-semibold mb-6 text-gray-200">About Us</h4>
            <p className="text-gray-400 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida, mi eu pulvinar cursus, sem elit
              interdum mauris.
            </p>
          </div>

          {/* Contact Us (Franchising) Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-200">Franchising</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-base">Interested in franchising? Contact us at:</li>
              <li className="text-gray-400 text-base">franchise@delishcheese.com</li>
              <li className="text-gray-400 text-base">+1 234 567 890</li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-200">Follow Us</h4>
            <ul className="flex flex-wrap gap-4">
              <li>
                <a href=""><img src="/assets/facebookLogo.svg" alt="Facebook" /></a>
              </li>
              <li>
                <a href=""><img src="/assets/instagramLogo.svg" alt="Instagram" /></a>
              </li>
              <li>
                <a href=""><img src="/assets/tiktokLogo.svg" alt="TikTok" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Credits */}
      <div className="bg-gray-900 py-4 px-4 -mx-8 text-center mt-10">
        <p className="text-gray-400 text-base">© 2024 DelishCheese Dough. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
