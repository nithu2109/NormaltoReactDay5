import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Theory from './Components/Theory';
import FeatureSection from './Components/FeatureSection';
import CardSection from './Components/CardSection';
import FooterSection from './Components/FooterSection';

function App() {
  return (
    <div>
      <NavBar/>
      <FeatureSection />
      <Theory />
      
      <CardSection />
      <FooterSection />
    </div>
  );
}

export default App;
