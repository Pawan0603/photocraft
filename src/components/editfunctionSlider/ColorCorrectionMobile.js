'use client';
import React, { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Button } from '../ui/button';
import { Check, X } from 'lucide-react';

const SLIDERS = [
  { key: 'brightness', label: 'Brightness', min: -100, max: 100 },
  { key: 'contrast',   label: 'Contrast',   min: -100, max: 100 },
  { key: 'gamma',      label: 'Gamma',      min: 0,    max: 100 },
  { key: 'hue',        label: 'Hue',        min: 0,    max: 360 },
  { key: 'saturation', label: 'Saturation', min: -100, max: 100 },
  { key: 'vibrance',   label: 'Vibrance',   min: -100, max: 100 },
  { key: 'sepia',      label: 'Sepia',      min: 0,    max: 100 },
];

const ColorCorrectionMobile = ({ handleColorCorrection, colorCorrection, setShowEffectCard }) => {
  const [localValues, setLocalValues] = useState(colorCorrection);

  useEffect(() => {
    setLocalValues(colorCorrection);
  }, [colorCorrection]);

  const debouncedUpdate = useDebouncedCallback((key, value) => {
    handleColorCorrection(key, Number(value));
  }, 400);

  const handleChange = (key, value) => {
    setLocalValues(prev => ({ ...prev, [key]: value }));
    debouncedUpdate(key, value);
  };

  const handleCancel = () => {
    debouncedUpdate.cancel();
    setLocalValues(colorCorrection); // values reset
    setShowEffectCard(false);
  };

  const handleConfirm = () => {
    debouncedUpdate.flush();
    setShowEffectCard(false);
  };

  return (
    <div className='mt-3'>
      <section className='mx-4 flex flex-col gap-y-2 h-40 overflow-auto'>
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
              value={localValues[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              className='w-full outline-none'
            />
          </div>
        ))}
      </section>

      <section className='flex flex-row justify-between items-center mt-4'>
        <Button variant="outline" onClick={handleCancel}><X /></Button>
        <div>Color</div>
        <Button variant="outline" onClick={handleConfirm}><Check /></Button>
      </section>
    </div>
  );
};

export default ColorCorrectionMobile;