import { useState } from 'react';
import hexToRgb from '../../helpers/hexToRgb';

export function HexToRgbConverter() {
  const [ rgbText, setRgb ] = useState('rgb()');
  const backgroundColorDefault = 'rgb(230, 225, 225)';
  const [color, setColor] = useState(backgroundColorDefault);
  const [colorField, setColorField] = useState('');

  const handleColor = (e) => {
    e.preventDefault();
    const hex = e.target.value;
    
    if (hex.length > 7) {
      return;
    }

    setColorField(hex);
 
    const setCorrectColor = (hex) => {
      const rgbRaw = hexToRgb(hex);
      const rgb = `rgb(${rgbRaw.r}, ${rgbRaw.g}, ${rgbRaw.b})`
      setRgb(rgb);
      setColor(rgb);
    }
    
    switch (true) {
      case (hex === ''): 
        setColor(backgroundColorDefault);
        break;
      case (/^#[0-9A-Fa-f]{6}$/.test(hex)): 
        setCorrectColor(hex);
        break;

      default: 
        setRgb('Ошибка!');
        setColor('rgb(196, 48, 48)');
        break;
    }
  };
  
  return (
    <div className="container" style={{backgroundColor: color}}>
      <div className='form-container'>
        <form className='form'>
          <label htmlFor='hex'></label>
          <input type='text' id='hex' className='hex' value={colorField} onChange={handleColor} placeholder="#код цвета" />
        </form>
        <div className='rgb'>
          <div className='rgb-text'>{rgbText}</div>
        </div>
      </div>
    </div>
  )
}

export default HexToRgbConverter