import React from "react";
import { ArrowLeft } from "lucide-react";

const SettingsScreen = ({ setCurrentScreen }) => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="flex items-center mb-4">
        <ArrowLeft
          className="cursor-pointer"
          onClick={() => setCurrentScreen("accueil")}
        />
        <h2 className="text-xl font-bold ml-4">Paramètres</h2>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <h3 className="font-medium mb-2">Accessibilité</h3>
          <div className="space-y-2">
            <label className="flex items-center justify-between">
              <span>Mode d'affichage</span>
              <select className="p-1 border rounded">
                <option>Normal</option>
                <option>Contraste élevé</option>
                <option>Mode nuit</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;
