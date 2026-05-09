import React from 'react';
import './styles/global.css';

import Cover  from './components/sections/Cover';
import Part1  from './components/sections/Part1';
import Part2  from './components/sections/Part2';
import Part3  from './components/sections/Part3';
import Bonus  from './components/sections/Bonus';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <div>
      <Cover />
      <Part1 />
      <Part2 />
      <Part3 />
      <Bonus />
      <Footer />
    </div>
  );
}
