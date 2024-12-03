import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>Thelonius</p>
      <a href="https://github.com/TheIonius" target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
        <img
          src="/src/assets/github-logo.png"
          alt="GitHub Logo"
          className="w-6 h-6 mx-auto transition-transform duration-300 transform hover:scale-110 hover:shadow-white rounded-full shadow-white"
        />
      </a>
    </footer>
  );
};

export default Footer;