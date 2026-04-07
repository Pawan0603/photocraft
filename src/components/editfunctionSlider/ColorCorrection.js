'use client';
import React, { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

// Slider config bahar — har render par re-create nahi hoga
const SLIDERS = [
  { key: 'brightness', label: 'Brightness', min: -100, max: 100 },
  { key: 'contrast',   label: 'Contrast',   min: -100, max: 100 },
  { key: 'gamma',      label: 'Gamma',      min: 0,    max: 100 },
  { key: 'hue',        label: 'Hue',        min: 0,    max: 360 },
  { key: 'saturation', label: 'Saturation', min: -100, max: 100 },
  { key: 'vibrance',   label: 'Vibrance',   min: -100, max: 100 },
  { key: 'sepia',      label: 'Sepia',      min: 0,    max: 100 },
];

function ColorCorrection({ handleColorCorrection, colorCorrection }) {
  // Local state — slider instant move karta hai bina Cloudinary call ke
  const [localValues, setLocalValues] = useState(colorCorrection);

  // Jab parent reset/undo kare, local state bhi sync ho
  useEffect(() => {
    setLocalValues(colorCorrection);
  }, [colorCorrection]);

  // 400ms baad hi parent (Cloudinary) ko call karega
  const debouncedUpdate = useDebouncedCallback((key, value) => {
    handleColorCorrection(key, Number(value));
  }, 400);

  const handleChange = (key, value) => {
    setLocalValues(prev => ({ ...prev, [key]: value })); // instant UI
    debouncedUpdate(key, value);                          // delayed Cloudinary
  };

  return (
    <div className='mx-4 flex flex-col gap-y-2'>
      <h3 className='text-gray-700 dark:text-gray-300 mb-3'>Color Correction</h3>

      {SLIDERS.map(({ key, label, min, max }) => (
        <div key={key}>
          <label
            htmlFor={key}
            className='flex flex-row justify-between text-sm font-medium text-gray-700 dark:text-gray-300'
          >
            <span>{label}</span>
            <input
              type='number'
              value={localValues[key]}
              readOnly
              className='outline-none border rounded-md w-10 px-1 appearance-none
                [&::-webkit-inner-spin-button]:appearance-none
                [&::-webkit-outer-spin-button]:appearance-none'
            />
          </label>
          <input
            id={key}
            name={key}
            type='range'
            min={min}
            max={max}
            step={1}
            value={localValues[key]}          // value (controlled)
            onChange={(e) => handleChange(key, e.target.value)}
            className='w-full outline-none'
          />
        </div>
      ))}
    </div>
  );
}

export default ColorCorrection;