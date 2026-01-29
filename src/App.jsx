import { useState } from 'react';
import './App.css';
import HexToRgbConverter from './Components/HexToRgbConverter/HexToRgbConverter';

function App() {
  const [color, setColor] = useState(undefined);

  return (
    <div className="container" style={{backgroundColor: color}}>
      <HexToRgbConverter setBackgroundColor={setColor} />
    </div>
  )
}

export default App