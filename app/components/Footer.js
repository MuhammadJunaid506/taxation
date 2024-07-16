// components/Footer.js
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 w-full">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-6 lg:mb-0">
            <h1 className="text-3xl font-bold text-white">Taxation</h1>
            <p className="text-sm mt-2">Crafting Digital Solutions</p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="mb-6 lg:mb-0 lg:mr-12">
              <h2 className="text-xl font-semibold text-white mb-2">Services</h2>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:underline">NTN Registration</a></li>
                <li><a href="#about" className="hover:underline">Conmpany Formation</a></li>
                <li><a href="#services" className="hover:underline">Income Tax Filing</a></li>
                <li><a href="#contact" className="hover:underline">SaleS Tax Filing</a></li>
              </ul>
            </div>
            <div className="mb-6 lg:mb-0 lg:mr-12">
              <h2 className="text-xl font-semibold text-white mb-2">Quick Links</h2>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About Us</a></li>
                <li><a href="#services" className="hover:underline">Services</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div className="mb-6 lg:mb-0 lg:mr-12">
              <h2 className="text-xl font-semibold text-white mb-2">Contact Us</h2>
              <ul className="space-y-2">
                <li>Email: contact@marianatech.com</li>
                <li>Phone: +123 456 7890</li>
                <li>Address: 123 Tech Street, San Francisco, CA</li>
              </ul>
              <div>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2 mt-6">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-gray-300 hover:text-white">
                  <FaFacebookF size={20} />
                </a>
                <a href="https://twitter.com" className="text-gray-300 hover:text-white">
                  <FaTwitter size={20} />
                </a>
                <a href="https://instagram.com" className="text-gray-300 hover:text-white">
                  <FaInstagram size={20} />
                </a>
                <a href="https://linkedin.com" className="text-gray-300 hover:text-white">
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>
          
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-sm">© 2024 Mariana Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
