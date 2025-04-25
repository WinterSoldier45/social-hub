import React from 'react';
import SocialHub from './components/SocialHub';
import { profileData } from './data/profileData';
import './index.css';

function App() {
  return <SocialHub profile={profileData} />;
}

export default App;