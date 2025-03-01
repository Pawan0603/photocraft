'use client';
import AspectRatio from '@/components/editfunctionSlider/AspectRatio';
import AspectRatioMobile from '@/components/editfunctionSlider/AspectRatioMobile';
import Background from '@/components/editfunctionSlider/Background';
import BackgroundMobile from '@/components/editfunctionSlider/BackgroundMobile';
import ColorCorrection from '@/components/editfunctionSlider/ColorCorrection';
import ColorCorrectionMobile from '@/components/editfunctionSlider/ColorCorrectionMobile';
import Outfit from '@/components/editfunctionSlider/Outfit';
import OutfitMobile from '@/components/editfunctionSlider/OutfitMobile';
import RemoveObject from '@/components/editfunctionSlider/RemoveObject';
import RemoveObjectMobile from '@/components/editfunctionSlider/RemoveObjectMobile';
import ReplaceObject from '@/components/editfunctionSlider/ReplaceObject';
import ReplaceObjectMobile from '@/components/editfunctionSlider/ReplaceObjectMobile';
import ImageCardLoading from '@/components/loader/ThreedotLoding';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { File, Pen, Shirt, Images, CircleDashed, Crop, X, Palette, Proportions, Download, Replace, WandSparkles } from 'lucide-react'
import { set } from 'mongoose';
import { CldImage } from 'next-cloudinary';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Page = ({ params }) => {
  const { toast } = useToast();

  const [image, setImage] = useState(null);

  const [imageUrl, setImageUrl] = useState(null);

  const [showEffectCard, setShowEffectCard] = useState(false);
  const [effectCard, setEffectCard] = useState(null);
  const [effectLoading, setEffectLoading] = useState(false);

  const [bgremove, setBgremove] = useState(null);
  const [background, setBackground] = useState(null);
  const [outfit, setOutfit] = useState(null);
  const [colorCorrection, setColorCorrection] = useState({ brightness: 0, contrast: 0, grayscale: false, gamma: 0, hue: 0, saturation: 0, vibrance: 0, sepia: 0, tint: null, duotone: null });
  const [aspectRatio, setAspectRatio] = useState(null); // Aspect Ratio Managing
  const [fillBackground, setFillBackground] = useState(false); // Aspect Ratio Managing
  const [removeObject, setRemoveObject] = useState(null); // Remove Object Managing

  const EditFunctionObject = [
    { Name: "Bg", Icon: Images, EffectCard: "Background" },
    { Name: "Outfit", Icon: Shirt, EffectCard: "Cloth" },
    { Name: "Blur", Icon: CircleDashed, EffectCard: "BlurCard" },
    { Name: "Crop", Icon: Crop, EffectCard: "CropCard" },
    { Name: "Color", Icon: Palette, EffectCard: "ColorCorrection" },
    { Name: "Aspect Ratio", Icon: Proportions, EffectCard: "AspectRatio" },
    { Name: "Replace", Icon: Replace, EffectCard: "ReplaceObject" },
    { Name: "Remove", Icon: WandSparkles, EffectCard: "RemoveObject" },
  ]

  const getImageFromUrk = async () => {
    let id = (await params).slug;
    setImage(id);
  }

  useEffect(() => {
    getImageFromUrk();
  }, []);

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

  const handleAspectRatio = (FillBackground, AspectRatio) => {
    setEffectLoading(true);
    setFillBackground(FillBackground); // boolian
    setAspectRatio(AspectRatio); // number string eg. "1:2"
  }

  const handleRemoveObject = (object) => {
    setEffectLoading(true);
    if (removeObject === null) setRemoveObject([object]);
    else setRemoveObject((prevState) => [...prevState, object]);
  }

  const handleDeleteRemoveObject = (object) => {
    setEffectLoading(true);
    if (removeObject.length === 1) setRemoveObject(null);
    else setRemoveObject((prevState) => prevState.filter((item) => item !== object));
  }

  const DownloadImage = async () => {
    if (!imageUrl) {
      console.error("No image URL available for download.");
      return;
    }

    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "image.png"; // Ensure PNG format for transparency
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up blob URL
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  }

  return (
    <div className='flex justify-center items-center w-screen h-[calc(100vh-65.5px)] bg-gradient-to-br from-primary/10 via-background to-background overflow-hidden'>
      <div className="bg-white dark:bg-[#18181b] p-4 md:pl-1 rounded-lg shadow-lg w-full md:w-[95%] lg:w-[90%] xl:w-[85%] 2xl:w-[80%] h-full md:h-[95%] lg:h-[90%]  flex flex-col-reverse md:flex-row justify-between items-center overflow-hidden relative">
        <div className='hidden md:flex flex-col justify-center items-center h-full w-16 gap-4 '>
          {EditFunctionObject.map((tool, index) => (
            <button onClick={() => { setEffectCard(tool.EffectCard); setShowEffectCard(true); }} key={index} className='flex flex-col justify-center items-center group'>
              <span className='flex flex-col items-center justify-center rounded-sm p-1 group-hover:bg-white group-hover:shadow-lg dark:group-hover:bg-[#27272a] dark:group-hover:shadow-lg'>
                <tool.Icon size={24} />
              </span>
              <p className='text-sm'>{tool.Name}</p>
            </button>
          ))}
        </div>

        {showEffectCard && <div className='hidden md:flex flex-col h-full w-80 border-r relative' >
          <button onClick={() => { setShowEffectCard(false) }} className="w-fit p-1 absolute right-3 bg-transparent border hover:border-black hover:dark:border-white rounded-md dark:text-white"><X size={18} /></button>
          {effectCard === "Cloth" && <Outfit outfitChange={outfitChange} outfitRestore={outfitRestore} />}
          {effectCard === "Background" && <Background removeBackground={removeBackground} restoreBackground={restoreBackground} />}
          {effectCard === "ColorCorrection" && <ColorCorrection handleColorCorrection={handleColorCorrection} colorCorrection={colorCorrection} />}
          {effectCard === "AspectRatio" && <AspectRatio handleAspectRatio={handleAspectRatio} aspectRatio={aspectRatio} />}
          {effectCard === "ReplaceObject" && <ReplaceObject />}
          {effectCard === "RemoveObject" && <RemoveObject handleRemoveObject={handleRemoveObject} handleDeleteRemoveObject={handleDeleteRemoveObject} removeObject={removeObject}/>}
        </div>}

        {/* edit funtion for mobile screen */}

        {!showEffectCard && <div className='flex flex-row w-full gap-4 overflow-x-auto overflow-y-hidden no-scrollbar mt-3 md:hidden'>
          {EditFunctionObject.map((tool, index) => (
            <button onClick={() => { setEffectCard(tool.EffectCard); setShowEffectCard(true); }} key={index} className='flex flex-col justify-center items-center group'>
              <span className='flex flex-col items-center justify-center rounded-sm p-1 text-neutral-700 dark:text-neutral-200 group-hover:bg-white group-hover:shadow-lg dark:group-hover:bg-[#27272a] dark:group-hover:shadow-lg'>
                <tool.Icon size={24} />
              </span>
              <p className='text-sm'>{tool.Name}</p>
            </button>
          ))}
        </div>}

        {showEffectCard && <div className={`flex md:hidden flex-col h-auto w-full border-t relative `} >
          {effectCard === "Cloth" && <OutfitMobile outfitChange={outfitChange} outfitRestore={outfitRestore} setShowEffectCard={setShowEffectCard}/>}
          {effectCard === "Background" && <BackgroundMobile removeBackground={removeBackground} restoreBackground={restoreBackground} setShowEffectCard={setShowEffectCard}/>}
          {effectCard === "ColorCorrection" && <ColorCorrectionMobile handleColorCorrection={handleColorCorrection} colorCorrection={colorCorrection} setShowEffectCard={setShowEffectCard}/>}
          {effectCard === "AspectRatio" && <AspectRatioMobile handleAspectRatio={handleAspectRatio} aspectRatio={aspectRatio} setShowEffectCard={setShowEffectCard}/>}
          {effectCard === "ReplaceObject" && <ReplaceObjectMobile />}
          {effectCard === "RemoveObject" && <RemoveObjectMobile handleRemoveObject={handleRemoveObject} handleDeleteRemoveObject={handleDeleteRemoveObject} removeObject={removeObject} setShowEffectCard={setShowEffectCard}/>}
        </div>}

        <div className='flex flex-col justify-center items-center h-full w-full overflow-auto'>
          {image === null && <ImageCardLoading />}
          {image !== null && <CldImage
            width="500"
            height="500"
            src={image}
            sizes="100vw"
            alt="Description of my image"
            // blur="100"

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

            // =================== AspectRatio ===================
            fillBackground={fillBackground}
            aspectRatio={aspectRatio}

            // ==================== RemoveObject ==================
            remove={removeObject}




            onLoad={(e) => {
              setEffectLoading(false);
              setImageUrl(e.target.src);
            }}

            onError={(e) => {
              toast({
                variant: "destructive",
                description: "cloude server error",
              })
              console.log(e);
            }}

            className={`h-auto max-h-full w-auto max-w-full ${effectLoading === true ? "animate-pulse" : ""}`}
          />}
        </div>

        <Button variant="outline" onClick={DownloadImage} className='absolute top-4 right-4 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50'><Download /></Button>
      </div>
    </div>
  )
}

export default Page