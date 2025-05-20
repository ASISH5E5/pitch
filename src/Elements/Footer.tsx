import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

interface FooterProps {
  socialLinks?: {
    name: string;
    url: string;
    icon: React.ReactNode;
  }[];
  navigationLinks?: {
    name: string;
    url: string;
  }[];
  companyName?: string;
  copyrightYear?: number;
}

const Footer: React.FC<FooterProps> = ({
  socialLinks = [
    { name: 'Facebook', url: '#', icon: <FaFacebook /> },
    { name: 'Twitter', url: '#', icon: <FaTwitter /> },
    { name: 'Instagram', url: '#', icon: <FaInstagram /> },
    { name: 'LinkedIn', url: '#', icon: <FaLinkedin /> },
    { name: 'GitHub', url: '#', icon: <FaGithub /> }
  ],
  }) => {
  return (
    <footer className="w-full dark:bg-white">
      {/* Main footer section */}
      <div className="bg-gray-500 text-white font-bold py-6 px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Main navigation links */}
         

          <div className='text-center'>
            <h3 className='text-xl'>Asish Kumar Pydi</h3>
            <h5>Full Stack Web Developer</h5>

          </div>
          
          {/* Social media icons in white circles */}
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url}
                className="w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label={link.name}
              >
                <span className="text-lg">{link.icon}</span>
              </a>
            ))}
          </div>
          
       
        </div>
      </div>
      
      {/* Copyright banner */}
      <div className="bg-gray-700 text-white py-auto h-6 px-4">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; Made By Asish</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;