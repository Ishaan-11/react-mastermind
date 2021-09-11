import React from "react";
import './ColorPicker.css';

function ColorPicker(props) {
  return (
    <div className="ColorPicker">
      {props.colors.map((color, idx) =>
        <button
          key={color}
          className="button"
          style={{
            backgroundColor: props.selColorIdx === idx ? 'white' : color,
            borderColor: color
          }}
          onClick={() => props.handleColorSelection(idx)}
        />
      )}
    </div>
  );
}

export default ColorPicker;