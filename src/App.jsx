import './App.css'
import React, { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import VisitScreen from "./screens/VisitScreen";
import SettingsScreen from "./screens/SettingsScreen";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("accueil");

  const renderScreen = () => {
    switch (currentScreen) {
      case "profil":
        return <ProfileScreen setCurrentScreen={setCurrentScreen} />;
      case "visite":
        return <VisitScreen setCurrentScreen={setCurrentScreen} />;
      case "parametres":
        return <SettingsScreen setCurrentScreen={setCurrentScreen} />;
      default:
        return <HomeScreen setCurrentScreen={setCurrentScreen} />;
    }
  };

  return <div className="w-full max-w-md mx-auto bg-white h-screen">{renderScreen()}</div>;
};

export default App;

