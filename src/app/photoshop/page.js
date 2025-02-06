'use client';
import Background from '@/components/editfunctionSlider/Background';
import ColorCorrection from '@/components/editfunctionSlider/ColorCorrection';
import Outfit from '@/components/editfunctionSlider/Outfit';
import { Button } from '@/components/ui/button';
import { File, Pen, Shirt, Images, CircleDashed, Crop, X, Palette } from 'lucide-react'
import { CldImage } from 'next-cloudinary';
import Image from 'next/image'
import React, { useState } from 'react'

const Page = () => {
  const [image, setImage] = useState("rfrxgvkmuqwdrcsfjge4");

  const [showEffectCard, setShowEffectCard] = useState(false);
  const [effectCard, setEffectCard] = useState(null);
  const [effectLoading, setEffectLoading] = useState(false);

  const [bgremove, setBgremove] = useState(null);
  const [background, setBackground] = useState(null);
  const [outfit, setOutfit] = useState(null);
  const [colorCorrection, setColorCorrection] = useState({ brightness: 0, contrast: 0, grayscale: false, gamma: 0, hue: 0, saturation: 0, vibrance: 0, sepia: 0, tint: null, duotone: null });

  const removeBackground = (color) => {
    setEffectLoading(true);
    if (color) setBackground(color);
    else setBackground(null);
    setBgremove("main subject");
  }

  const restoreBackground = () => {
    setEffectLoading(true);
    setBackground(null);
    setBgremove(null);
  }

  const outfitChange = (cloth) => {
    setEffectLoading(true);
    setOutfit(['cloth', cloth]);
  }

  const outfitRestore = () => {
    setEffectLoading(true);
    setOutfit(null);
  }

  const handleColorCorrection = (event, value) => {
    setEffectLoading(true);
    if (event === "brightness") {
      setColorCorrection((prevState) => ({
        ...prevState,
        brightness: value,
      }));
    } else if (event === "contrast") {
      setColorCorrection((prevState) => ({
        ...prevState,
        contrast: value,
      }));
    } else if (event === "gamma") {
      setColorCorrection((prevState) => ({
        ...prevState,
        gamma: value,
      }));
    } else if (event === "hue") {
      setColorCorrection((prevState) => ({
        ...prevState,
        hue: value,
      }));
    } else if (event === "saturation") {
      setColorCorrection((prevState) => ({
        ...prevState,
        saturation: value,
      }));
    } else if (event === "vibrance") {
      setColorCorrection((prevState) => ({
        ...prevState,
        vibrance: value,
      }));
    } else if (event === "sepia") {
      setColorCorrection((prevState) => ({
        ...prevState,
        sepia: value,
      }));
    } 
  }

  return (
    <div className='flex justify-center items-center w-screen h-[calc(100vh-65.5px)] bg-gradient-to-br from-primary/10 via-background to-background overflow-hidden'>
      <div className="bg-white dark:bg-[#18181b] p-4 pl-1 rounded-lg shadow-lg w-full md:w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] h-full md:h-[95%] lg:h-[90%]  flex flex-row justify-between items-center overflow-hidden">
        <div className='flex flex-col justify-center items-center h-full w-16 gap-4 '>
          {[
            { Name: "Bg", Icon: Images, EffectCard: "Background" },
            { Name: "Outfit", Icon: Shirt, EffectCard: "Cloth" },
            { Name: "Blur", Icon: CircleDashed, EffectCard: "BlurCard" },
            { Name: "Crop", Icon: Crop, EffectCard: "CropCard" },
            { Name: "Color", Icon: Palette, EffectCard: "ColorCorrection" },
            { Name: "Outfit", Icon: Shirt, EffectCard: "Cloth" },
          ].map((tool, index) => (
            <button onClick={() => { setEffectCard(tool.EffectCard); setShowEffectCard(true); }} key={index} className='flex flex-col justify-center items-center group'>
              <span className='flex flex-col items-center justify-center rounded-sm p-1 group-hover:bg-white group-hover:shadow-lg dark:group-hover:bg-[#27272a] dark:group-hover:shadow-lg'>
                <tool.Icon size={24} />
              </span>
              <p className='text-sm'>{tool.Name}</p>
            </button>
          ))}
        </div>

        {showEffectCard && <div className='flex flex-col h-full w-80 border-r relative' >
          <button onClick={() => { setShowEffectCard(false) }} className="w-fit p-1 absolute right-3 bg-transparent border hover:border-black hover:dark:border-white rounded-md dark:text-white"><X size={18} /></button>
          {effectCard === "Cloth" && <Outfit outfitChange={outfitChange} outfitRestore={outfitRestore} />}
          {effectCard === "Background" && <Background removeBackground={removeBackground} restoreBackground={restoreBackground} />}
          {effectCard === "ColorCorrection" && <ColorCorrection handleColorCorrection={handleColorCorrection} colorCorrection={colorCorrection} />}
        </div>}

        <div className='flex flex-col justify-center items-center h-full w-full '>
          <CldImage
            width="500"
            height="500"
            src={image}
            sizes="100vw"
            alt="Description of my image"
            // blur="100"
            // fillBackground
            // remove={{
            //     prompt: 'remove trees',
            //     removeShadow: true
            //   }}
            // enhance
            // extract="main subject" // crop to main subject & remove background
            // background="blue"
            // zoompan="loop"
            // restore
            // blurFaces="1000"
            // replace={['cloth', 't-shirt']}

            // ============ background remove =================
            extract={bgremove}
            background={background}
            // replaceBackground="office"

            // ============ Outfit =================
            replace={outfit}

            // ============ Color corection ======================
            brightness={colorCorrection.brightness}  // -100 to 100
            contrast={colorCorrection.contrast}   // 0 to 100
            // grayscale={true}
            // blackwhite={20}
            gamma={colorCorrection.gamma}    // 0 to 100
            hue={colorCorrection.hue}       // 0 to 360
            saturation={colorCorrection.saturation} // -100 to 100
            vibrance={colorCorrection.vibrance}   // -100 to 100
            sepia={colorCorrection.sepia}      // 0 to 100
            // tint={colorCorrection.tint}    // [color, amount] e.g., ['red', 50]
            duotone={colorCorrection.duotone} // [highlightColor, shadowColor] e.g., ['#ff0000', '#0000ff']


            onLoad={(e) => {
              setEffectLoading(false);
            }}

            className={`h-auto max-h-full w-auto max-w-full ${effectLoading === true ? "animate-pulse" : ""}`}
          />
        </div>
      </div>
    </div>
  )
}

export default Page