
import './App.css'
import Index from './components'
import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList'
import Footer from './components/footer'
import Register from './components/register'
import Login from './components/login'
import ProductDetails from './components/ProductDetail'
import Profile from './components/Profile'

function App() {

  return (
    <>
    
<Header />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/shop" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>


    <Footer />
    </>
  )
}

export default App
