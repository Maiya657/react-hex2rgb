import { useState } from 'react';
import hexToRgb from '../../helpers/hexToRgb';

export function HexToRgbConverter(props) {
  const { setBackgroundColor } = props;
  const [ rgbText, setRgb ] = useState('rgb()')

  const handleColor = (e) => {
    const hex = e.target.value
    
    if (/^#.{6}$/.test(hex)) {
      if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
        const rgbRaw = hexToRgb(hex);
        const rgb = `rgb(${rgbRaw.r}, ${rgbRaw.g}, ${rgbRaw.b})`
        setRgb(rgb);
        setBackgroundColor(rgb);
      } else {
        setRgb('Ошибка!');
        setBackgroundColor('rgb(196, 48, 48)');
      } 
    } else if (hex === '') {
      setBackgroundColor(undefined);
    }
  };
  
  return (
    <div className='form-container'>
      <form className='form'>
        <label htmlFor='hex'></label>
        <input type='text' id='hex' className='hex' onChange={handleColor} placeholder="#код цвета" />
      </form>
      <div className='rgb'>
        <div className='rgb-text'>{rgbText}</div>
      </div>
    </div>
  )
}

export default HexToRgbConverter