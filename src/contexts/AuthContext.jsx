import { createContext, useState, useEffect, useContext } from "react";
import api from "../api/axiosClient";
import { useNavigate } from "react-router-dom";


// creer context 
export const AuthContext = createContext();

// authPrvider c'est un composant qui enveloppe l’application et partage tout le système d’authentification via React Context
export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  //  Charger profil 
  const fetchProfile = async () => {
    try {
      const res = await api.get("/profiles/me");
      setUser(res.data.data);
      console.log("Profil chargé :", res.data.data);
      
            
    } catch (err) {
      console.error("Erreur chargement profil :", err);
      setUser(null);
    }
  };

  //  Register
  const register = async (fullname, email, password) => {
    const response = await api.post("/auth/signup", {
      fullname,
      email,
      password
    });

    const jwt = response.data.data.jwt;

    localStorage.setItem("token", jwt);
    setToken(jwt);

    await fetchProfile();
    navigate("/profile"); 
    return response.data;
  };

  //  Login
  const login = async (email, password) => {
    const response = await api.post("/auth/login", { email, password });
    const jwt = response.data.data.jwt;

    localStorage.setItem("token", jwt);
    setToken(jwt);
    console.log("Token après login :", jwt);
    console.log("fetchProfile après login :", fetchProfile());

    await fetchProfile();
    navigate("/profile");

    return response.data;
  };

  //  Update profile
  const updateProfile = async (data) => {
    const res = await api.put("/profiles/me", data);
    await fetchProfile();
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  // Charger profil 
  useEffect(() => {
    if (token) fetchProfile();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ token, user, login, register, updateProfile, logout, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
