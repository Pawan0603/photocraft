'use client';
import React, { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const SLIDERS = [
  { key: 'blur',          label: 'Blur Level',          min: 0, max: 2000 },
  { key: 'blurFaces',     label: 'Blur Faces Level',    min: 0, max: 2000 },
  { key: 'pixelate',      label: 'Pixelate Level',      min: 0, max: 200  },
  { key: 'pixelateFaces', label: 'Pixelate Faces Level', min: 0, max: 200 },
];

const Blur = ({ handleBlur, blur, blurFaces, pixelate, pixelateFaces }) => {
  const [localValues, setLocalValues] = useState({ blur, blurFaces, pixelate, pixelateFaces });

  // Parent se reset/undo aaye toh sync karo
  useEffect(() => {
    setLocalValues({ blur, blurFaces, pixelate, pixelateFaces });
  }, [blur, blurFaces, pixelate, pixelateFaces]);

  const debouncedUpdate = useDebouncedCallback((key, value) => {
    handleBlur(key, Number(value));
  }, 400);

  const handleChange = (key, value) => {
    setLocalValues(prev => ({ ...prev, [key]: value })); // instant UI
    debouncedUpdate(key, value);                          // delayed Cloudinary
  };

  return (
    <div className='mx-4'>
      <h3 className='text-gray-700 dark:text-gray-300 mb-3'>Blur</h3>
      <div className='flex flex-col gap-4'>
        {SLIDERS.map(({ key, label, min, max }) => (
          <section key={key}>
            <label className='flex flex-row justify-between text-gray-700 dark:text-gray-300 mb-3'>
              <h4>{label}</h4>
              <input
                type='number'
                value={localValues[key]}
                readOnly
                className='outline-none border rounded-md w-12 h-fit px-1 appearance-none
                  [&::-webkit-inner-spin-button]:appearance-none
                  [&::-webkit-outer-spin-button]:appearance-none'
              />
            </label>
            <input
              type='range'
              min={min}
              max={max}
              step={1}
              value={localValues[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              className='w-full'
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default Blur;