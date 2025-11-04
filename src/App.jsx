
import './App.css'
import Index from './components'
import Header from './components/header'
import { Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList'

function App() {

  return (
    <>
    
<Header />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/shop" element={<ProductList />} />

    </Routes>
    </>
  )
}

export default App
