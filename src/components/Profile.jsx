import  {  useState } from "react";
import { useAuth } from "../contexts/authContext";

export default function Profile() {
  const { user, setUser, updateProfile } = useAuth();

  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // ✅ Si user n'est pas encore chargé
  if (!user)
    return (
      <p className="text-center mt-20 text-xl text-[#D58E8E]">
        Chargement du profil...
      </p>
    );

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await updateProfile({
        fullname: user.fullname,
        email: user.email,
        password: user.password || undefined,
      });

      setSuccessMsg("✅ Profil mis à jour avec succès !");
    } catch (error) {
      console.error(error);
      setErrorMsg("❌ Erreur lors de la mise à jour du profil");
    } finally {
      setSaving(false);
    }
  };

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
