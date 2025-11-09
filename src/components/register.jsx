import React, { useState } from 'react'
import api from '../api/axiosClient.js' 

function SignUp() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await api.post('/auth/signup', formData)

      console.log(response.data)
      alert('Inscription réussie !')
    } catch (error) {
      console.error(error.response?.data)

      alert(error.response?.data?.message || "Erreur lors de l'inscription")
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center p-4'
      style={{
        backgroundImage: "url('/src/assets/image2.png')",
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      
      {/* Carte */}
      <div className='h-140 w-1/3 rounded-3xl p-12 shadow-2xl ml-44 mt-20 scale-80'
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
        
        <h1 className='text-5xl font-bold text-center mb-12' style={{ color: '#561E29' }}>Sign Up</h1>

        <form className='space-y-8' onSubmit={handleSubmit}>
          
          <input
            type='text'
            name='fullname'   // ✅ correspond au backend
            placeholder='Full Name'
            value={formData.fullname}
            onChange={handleChange}
            className='w-full bg-transparent border-b-2 border-gray-600 py-3 px-2 text-gray-700 placeholder-gray-600 italic focus:outline-none focus:border-[#561E29]'
          />

          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className='w-full bg-transparent border-b-2 border-gray-600 py-3 px-2 text-gray-700 placeholder-gray-600 italic focus:outline-none focus:border-[#561E29]'
          />

          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            className='w-full bg-transparent border-b-2 border-gray-600 py-3 px-2 text-gray-700 placeholder-gray-600 italic focus:outline-none focus:border-[#561E29]'
          />

          <div className='flex justify-center pt-6'>
            <button
              type='submit'
              className='bg-[#561E29] text-white font-bold py-4 px-12 rounded-full text-xl hover:bg-[#6B2534] hover:scale-105 shadow-lg transition-all'
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className='text-center mt-8'>
          <p className='text-gray-700'>
            Vous avez déjà un compte ?{' '}
            <a href='#' className='text-[#561E29] font-semibold hover:underline'>
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
