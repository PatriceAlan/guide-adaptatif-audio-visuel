import React from "react";
import { User, Map, Settings } from "lucide-react";

const HomeScreen = ({ setCurrentScreen }) => {
  return (
    <div className="h-full">
      <h2 className="text-xl font-bold mb-4">Guide Audio-Visuel Adaptatif</h2>
      <div className="space-y-4">
        <button
          onClick={() => setCurrentScreen("profil")}
          className="w-full p-4 bg-blue-100 rounded-lg flex items-center gap-3"
        >
          <User className="text-blue-600" />
          <span>Configuration du profil</span>
        </button>

        <button
          onClick={() => setCurrentScreen("visite")}
          className="w-full p-4 bg-green-100 rounded-lg flex items-center gap-3"
        >
          <Map className="text-green-600" />
          <span>Démarrer la visite</span>
        </button>

        <button
          onClick={() => setCurrentScreen("parametres")}
          className="w-full p-4 bg-purple-100 rounded-lg flex items-center gap-3"
        >
          <Settings className="text-purple-600" />
          <span>Paramètres</span>
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
