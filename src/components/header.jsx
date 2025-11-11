import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate('/login');
  };

  return (
    <header className="p-4 bg-[#561E29] opacity-80 text-white flex justify-between items-center">
      <h1 className="text-3xl font-bold text-[#F8E4E6]">E-Market</h1>
      <nav>
        <ul className="flex space-x-4 mt-2">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/shop" className="hover:underline">Shop</a></li>
          <li><a href="/cart" className="hover:underline">Cart</a></li>

          {/* Affiche Login seulement si l'utilisateur n'est pas connecté */}
          {!user && (
            <li>
              <a href="/login" className="hover:underline">Login</a>
            </li>
          )}

          {/* Affiche Logout seulement si l'utilisateur est connecté */}
          {user && (
            <li>
              <button
                onClick={handleLogout}
                className="hover:underline bg-transparent border-none cursor-pointer text-white"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
