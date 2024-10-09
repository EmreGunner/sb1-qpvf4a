import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NOOD</h3>
            <p className="text-sm">Empowering entrepreneurs and freelancers with targeted skills and expert guidance for digital business success.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/academy" className="hover:text-accent transition duration-300">Academy</Link></li>
              <li><Link to="/agency" className="hover:text-accent transition duration-300">Agency</Link></li>
              <li><Link to="/community" className="hover:text-accent transition duration-300">Community</Link></li>
              <li><Link to="/dashboard" className="hover:text-accent transition duration-300">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">Email: info@nood.com</p>
            <p className="text-sm">Phone: +1 (555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition duration-300" aria-label="Facebook"><Facebook /></a>
              <a href="#" className="hover:text-accent transition duration-300" aria-label="Twitter"><Twitter /></a>
              <a href="#" className="hover:text-accent transition duration-300" aria-label="Instagram"><Instagram /></a>
              <a href="#" className="hover:text-accent transition duration-300" aria-label="LinkedIn"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-accent border-opacity-20 text-center text-sm">
          <p>&copy; 2023 NOOD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer