import React from "react";
import { ArrowLeft } from "lucide-react";

const ProfileScreen = ({ setCurrentScreen }) => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="flex items-center mb-4">
        <ArrowLeft
          className="cursor-pointer"
          onClick={() => setCurrentScreen("accueil")}
        />
        <h2 className="text-xl font-bold ml-4">Configuration du profil</h2>
      </div>
      <div className="space-y-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <label className="block mb-2 font-medium">Âge</label>
          <select className="w-full p-2 border rounded">
            <option>Enfant</option>
            <option>Adolescent</option>
            <option>Adulte</option>
            <option>Senior</option>
          </select>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg">
          <label className="block mb-2 font-medium">Langue</label>
          <select className="w-full p-2 border rounded">
            <option>Français</option>
            <option>Anglais</option>
            <option>Espagnol</option>
            <option>Allemand</option>
          </select>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg">
          <label className="block mb-2 font-medium">Niveau d'expertise</label>
          <select className="w-full p-2 border rounded">
            <option>Débutant</option>
            <option>Intermédiaire</option>
            <option>Expert</option>
          </select>
        </div>

        {/* Other profile settings */}
        <div className="p-4 bg-gray-100 rounded-lg">
          <label className="block mb-2 font-medium">Vision</label>
          <select className="w-full p-2 border rounded">
            <option>Normale</option>
            <option>Faible</option>
            <option>Aveugle</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
