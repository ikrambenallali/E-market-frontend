import React from 'react'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer className='bg-[#561E29] text-white'>
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
          {/* À propos */}
          <div>
            <h3 className='text-xl font-bold mb-4'>About</h3>
            <p className='text-gray-300 text-sm leading-relaxed'>
                E-Market is an e-commerce platform dedicated to providing an exceptional shopping experience. We offer a wide range of high-quality products to meet all your needs.
            </p>
          </div>

       

          {/* Contact */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Contact</h3>
            <ul className='space-y-3'>
              <li className='flex items-start gap-2'>
                <MapPin className='w-5 h-5 mt-0.5 flex-shrink-0' />
                <span className='text-gray-300 text-sm'>
                  123 Rue Exemple, Casablanca, Maroc
                </span>
              </li>
              <li className='flex items-center gap-2'>
                <Phone className='w-5 h-5 flex-shrink-0' />
                <span className='text-gray-300 text-sm'>
                  +212 5XX-XXXXXX
                </span>
              </li>
              <li className='flex items-center gap-2'>
                <Mail className='w-5 h-5 flex-shrink-0' />
                <span className='text-gray-300 text-sm'>
                  contact@exemple.com
                </span>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className='text-xl font-bold mb-4'>Follow Us</h3>
            <p className='text-gray-300 text-sm mb-4'>
              Stay connected with us on social media
            </p>
            <div className='flex gap-4'>
              <a 
                href='#' 
                className='bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors'
                aria-label='Facebook'
              >
                <Facebook className='w-5 h-5' />
              </a>
              <a 
                href='#' 
                className='bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors'
                aria-label='Twitter'
              >
                <Twitter className='w-5 h-5' />
              </a>
              <a 
                href='#' 
                className='bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors'
                aria-label='Instagram'
              >
                <Instagram className='w-5 h-5' />
              </a>
              <a 
                href='#' 
                className='bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors'
                aria-label='LinkedIn'
              >
                <Linkedin className='w-5 h-5' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer