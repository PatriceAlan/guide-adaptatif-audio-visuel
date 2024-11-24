// VisitScreen.jsx
import React from 'react';
import { ArrowLeft, User, Clock, Battery, Eye, Users, Volume2, Home, Map, Book, Settings } from 'lucide-react';

const VisitScreen = ({ setCurrentScreen }) => {
  return (
    <div className="h-full">
      {/* Header */}
      <div className="flex items-center mb-4">
        <ArrowLeft className="cursor-pointer" onClick={() => setCurrentScreen('accueil')} />
        <h2 className="text-xl font-bold ml-4">Démarrer la visite</h2>
      </div>

      {/* Info Bar */}
      <div className="flex justify-between items-center mb-4 bg-blue-600 text-white p-4">
        <div className="flex items-center gap-2">
          <User size={20} />
          <span className="text-sm">Expert</span>
        </div>
        <span className="font-medium">Salle Renaissance</span>
        <div className="flex items-center gap-2">
          <Clock size={20} />
          <Battery size={20} />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center mb-4">
          <span className="text-gray-600">Œuvre adaptée à votre profil</span>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">La Joconde</h3>
            <div className="flex items-center gap-2">
              <Eye size={20} className="text-blue-600" />
              <Users size={20} className="text-green-600" />
            </div>
          </div>

          <p className="text-sm text-gray-600">
            Léonard de Vinci (1503-1519)
            <br />
            <span className="text-blue-600">Mode: Explications détaillées</span>
          </p>

          <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
            <Volume2 size={24} />
            <div className="flex-1 h-2 bg-blue-200 rounded-full">
              <div className="w-1/3 h-full bg-blue-600 rounded-full"></div>
            </div>
            <span className="text-sm">2:30</span>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 p-2 bg-blue-100 rounded-lg text-blue-600 text-sm">
              Quiz interactif
            </button>
            <button className="flex-1 p-2 bg-green-100 rounded-lg text-green-600 text-sm">
              Œuvres similaires
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-around bg-white p-4 border-t">
        <Home onClick={() => setCurrentScreen('accueil')} className="cursor-pointer" />
        <Map className="cursor-pointer" />
        <Book className="cursor-pointer" />
        <Settings className="cursor-pointer" />
      </div>
    </div>
  );
};

export default VisitScreen;
