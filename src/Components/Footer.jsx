import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-teal-500 text-white py-6 mt-10 font-bold">
        <div className="container mx-auto text-center space-y-4">
          <div>
            <p className="text-lg font-semibold">Contact Us</p>
            <p>Email:adnan@gmailcom</p>
            <p>Phone:</p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">Instagram</a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} WinterHelp. All rights reserved.</p>
        </div>
      </footer>
    );
  }


export default Footer;