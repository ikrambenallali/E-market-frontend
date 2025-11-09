import React, { useState } from 'react'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    console.log('Form submitted:', formData)
    alert('Connexion réussie !')
  }

  return (
    <div className='min-h-screen flex items-center justify-center p-4' 
       style={{ backgroundImage: "url('/src/assets/image2.png')", width: '100%', height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      
      {/* Carte glassmorphism */}
      <div className='h-140 w-1/3 rounded-3xl p-12 shadow-2xl ml-44 mt-20 scale-80' 
           style={{
             background: 'rgba(255, 255, 255, 0.15)',
             backdropFilter: 'blur(10px)',
             border: '1px solid rgba(255, 255, 255, 0.2)'
           }}>
        
        {/* Titre */}
        <h1 className='text-5xl font-bold text-center mb-12' 
            style={{ color: '#561E29' }}>
          Sign In
        </h1>

        {/* Champs de formulaire */}
        <div className='space-y-8'>
          
          {/* Email */}
          <div>
            <input
              type='email'
              name='email'
              placeholder='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full bg-transparent border-b-2 border-gray-600 py-3 px-2 text-gray-700 placeholder-gray-600 italic focus:outline-none focus:border-[#561E29] transition-colors'
              style={{ fontSize: '1.1rem' }}
            />
          </div>

          {/* Password */}
          <div>
            <input
              type='password'
              name='password'
              placeholder='password'
              value={formData.password}
              onChange={handleChange}
              className='w-full bg-transparent border-b-2 border-gray-600 py-3 px-2 text-gray-700 placeholder-gray-600 italic focus:outline-none focus:border-[#561E29] transition-colors'
              style={{ fontSize: '1.1rem' }}
            />
          </div>

          {/* Mot de passe oublié */}
          <div className='text-right'>
            <a href='#' className='text-gray-700 text-sm hover:text-[#561E29] transition-colors'>
              Mot de passe oublié ?
            </a>
          </div>

          {/* Bouton Submit */}
          <div className='flex justify-center pt-6'>
            <button
              onClick={handleSubmit}
              className='bg-[#561E29] text-white font-bold py-4 px-12 rounded-full text-xl hover:bg-[#6B2534] transition-all transform hover:scale-105 shadow-lg'
            >
              sign In
            </button>
          </div>
        </div>

        {/* Lien vers Sign Up */}
        <div className='text-center mt-8'>
          <p className='text-gray-700'>
            Vous n'avez pas de compte ?{' '}
            <a href='#' className='text-[#561E29] font-semibold hover:underline'>
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login