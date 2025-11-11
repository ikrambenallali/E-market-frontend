import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const token = localStorage.getItem("token");
  const baseURL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://127.1.0.1:3000/profiles/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(response.data.data.user);
      } catch (error) {
        console.error(error);
        setErrorMsg("Impossible de charger votre profil");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await axios.put(
        `${baseURL}/profiles/me`,
        {
          fullname: user.fullname,
          email: user.email,
          password: user.password || undefined,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setSuccessMsg(" Profil mis à jour avec succès !");
    } catch (error) {
      console.error(error);
      setErrorMsg("Erreur lors de la mise à jour du profil");
    } finally {
      setSaving(false);
    }
  };

  if (loading)
    return (
      <p className="text-center mt-20 text-xl text-[#D58E8E]">
        Chargement...
      </p>
    );

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#FBF4FA] flex flex-col items-center p-10">
      
      <h1 className="text-4xl font-bold text-[#561E29] mb-10">
        Mon Profil
      </h1>

      <div className="bg-[#EDCAC8] p-10 rounded-3xl shadow-xl w-full max-w-xl">
        
        {successMsg && (
          <p className="text-green-700 font-semibold mb-4">{successMsg}</p>
        )}
        {errorMsg && (
          <p className="text-red-600 font-semibold mb-4">{errorMsg}</p>
        )}

        <form onSubmit={handleUpdate}>
          
          <div className="mb-6">
            <label className="block text-[#561E29] font-semibold mb-2">
              Nom complet
            </label>
            <input
              type="text"
              value={user.fullname}
              onChange={(e) =>
                setUser({ ...user, fullname: e.target.value })
              }
              className="w-full p-3 rounded-xl border border-[#D58E8E] bg-white focus:outline-[#561E29]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-[#561E29] font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value={user.email}
              onChange={(e) =>
                setUser({ ...user, email: e.target.value })
              }
              className="w-full p-3 rounded-xl border border-[#D58E8E] bg-white focus:outline-[#561E29]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-[#561E29] font-semibold mb-2">
              Nouveau mot de passe (optionnel)
            </label>
            <input
              type="password"
              placeholder="********"
              onChange={(e) =>
                setUser({ ...user, password: e.target.value })
              }
              className="w-full p-3 rounded-xl border border-[#D58E8E] bg-white focus:outline-[#561E29]"
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="w-full bg-[#D58E8E] text-white py-3 rounded-full font-semibold hover:bg-[#C97C7C] transition"
          >
            {saving ? "Enregistrement..." : "Enregistrer les modifications"}
          </button>

        </form>
      </div>
    </div>
  );
}
