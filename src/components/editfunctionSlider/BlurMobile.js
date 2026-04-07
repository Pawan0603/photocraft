'use client';
import React, { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Button } from '../ui/button';
import { Check, X } from 'lucide-react';

const SLIDERS = [
  { key: 'blur',          label: 'Blur Level',           min: 0, max: 2000 },
  { key: 'blurFaces',     label: 'Blur Faces Level',     min: 0, max: 2000 },
  { key: 'pixelate',      label: 'Pixelate Level',       min: 0, max: 200  },
  { key: 'pixelateFaces', label: 'Pixelate Faces Level', min: 0, max: 200  },
];

const BlurMobile = ({ handleBlur, blur, blurFaces, pixelate, pixelateFaces, setShowEffectCard }) => {
  const [localValues, setLocalValues] = useState({ blur, blurFaces, pixelate, pixelateFaces });

  useEffect(() => {
    setLocalValues({ blur, blurFaces, pixelate, pixelateFaces });
  }, [blur, blurFaces, pixelate, pixelateFaces]);

  const debouncedUpdate = useDebouncedCallback((key, value) => {
    handleBlur(key, Number(value));
  }, 400);

  const handleChange = (key, value) => {
    setLocalValues(prev => ({ ...prev, [key]: value }));
    debouncedUpdate(key, value);
  };

  const handleCancel = () => {
    debouncedUpdate.cancel();
    setLocalValues({ blur, blurFaces, pixelate, pixelateFaces });
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
        <div>Blur</div>
        <Button variant="outline" onClick={handleConfirm}><Check /></Button>
      </section>
    </div>
  );
};

export default BlurMobile;