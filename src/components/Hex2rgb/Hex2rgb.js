import './hex2rgb.css';
import { useState } from 'react';
import convert from './convert/convert';

const regHEX = /#[0-9a-f]{6}/;

export default function Hex2rgb() {
  let
    [inputHex, setInputHex] = useState('#34495e'),
    [result, setResult] = useState(convert(inputHex)),
    [bgColor, setBgColor] = useState(convert(inputHex));

  const handleChange = (event) => {
    const { value } = event.target;

    if (value.length > 7) return;

    setInputHex(value);
    setResult('');

    if (value.length < 7) return;

    if (regHEX.test(value.toLowerCase())) {
      const rgb = convert(value);
      setResult(rgb);
      setBgColor(rgb);
    } else {
      setResult('Ошибка!');
      setBgColor('#ff0000');
    }
  };

  const hex2rgbBgColor = { backgroundColor: bgColor };

  return (
    <div className={'hex2rgb'}>
      <div className={`hex2rgb__body hex2rgb__body`} style={hex2rgbBgColor}>
        <div className={'hex2rgb__content'}>
          <div className={'hex2rgb__input-wrap'}>
            <input className={'hex2rgb__input'} name="name" value={inputHex} onChange={handleChange} />
          </div>
          <div className={'hex2rgb__result-wrap'}>
            <div className={'hex2rgb__result'}>{result}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
