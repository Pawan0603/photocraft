'use client';
import React, { useEffect, useState } from 'react'
import { ScrollArea } from '../ui/scroll-area';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { ArrowBigRight, MoveUpLeft, RotateCcw, Search, Shirt, Sparkles } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Outfit({ outfitChange, outfitRestore, outfit }) {
  // const [activeSection, setActiveSection] = useState("Male");
  const [prompt, setPrompt] = useState("");
  const [BtnDisable, setBtnDisable] = useState(true);

  const clothingArray = [
    { name: "T-shirt", for: ["men", "women"] },
    { name: "Shirt", for: ["men"] },
    { name: "Polo", for: ["men"] },
    { name: "Jeans", for: ["men", "women"] },
    { name: "Jacket", for: ["men", "women"] },
    { name: "Sweater", for: ["men", "women"] },
    { name: "Hoodie", for: ["men", "women"] },
    { name: "Shorts", for: ["men", "women"] },
    { name: "Suit", for: ["men"] },
    { name: "Blazer", for: ["men", "women"] },

    { name: "Dress", for: ["women"] },
    { name: "Skirt", for: ["women"] },
    { name: "Blouse", for: ["women"] },
    { name: "Tank Top", for: ["women"] },
    { name: "Cardigan", for: ["women"] },
    { name: "Leggings", for: ["women"] },
    { name: "Crop Top", for: ["women"] },
    { name: "Camisole", for: ["women"] },
    { name: "Gown", for: ["women"] },
    { name: "Palazzo", for: ["women"] },
    { name: "Kurti", for: ["women"] },
    { name: "Saree", for: ["women"] },

    { name: "Bikini", for: ["women"] },
    { name: "Monokini", for: ["women"] },
    { name: "Tankini", for: ["women"] },
    { name: "Trikini", for: ["women"] },
    { name: "Bandeaukini", for: ["women"] },
    { name: "Microkini", for: ["women"] },
    { name: "Sling Bikini", for: ["women"] },
    { name: "String Bikini", for: ["women"] },
    { name: "High-Waisted Bikini", for: ["women"] }
  ];


  useEffect(() => {
    setPrompt(outfit?.prompt || "");
    // This effect runs when the component mounts and sets the initial prompt value
  }, []);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
    if (e.target.value.trim() === "" || e.target.value.length < 3 || e.target.value.trim() === outfit?.prompt?.trim()) {
      setBtnDisable(true);
    } else {
      setBtnDisable(false);
    }
  }

  const handleChangeCloth = () => {
    if (prompt.trim() === "" || prompt.length < 3 || prompt.trim() === outfit?.prompt?.trim()) {
      return;
    }
    outfitChange(prompt);
    setBtnDisable(true);
  }

  return (
    <div className='mx-4 h-full'>
      <h4 className='text-gray-700 dark:text-gray-300 mb-3'>Outfit</h4>
      <section>
        <span className='flex justify-between'>
          <h4 className='text-gray-700 dark:text-gray-300 mb-3 text-sm'>Change cloth</h4>
          <Tooltip>
            <TooltipTrigger asChild>
              <button onClick={outfitRestore}><RotateCcw size={18} strokeWidth={1} /></button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Restore outfit</p>
            </TooltipContent>
          </Tooltip>
        </span>
        <div className='flex flex-col gap-2'>
          <Textarea placeholder="Describe the outfit you want to see on the person." value={prompt} onChange={handlePromptChange} />
          <Button variant="outline" size="sm" className="self-end" onClick={handleChangeCloth} disabled={BtnDisable}>
            <Sparkles /> Do magic
          </Button>
        </div>
      </section>
      <section className='h-full'>
        <h4 className='text-gray-700 dark:text-neutral-300 my-3 text-sm'>Suggested Outfits 👕👗</h4>
        <ScrollArea className="flex flex-row justify-between w-full h-[calc(100%-215px)] mt-3">
          <div className="flex flex-wrap gap-2 mt-2">
            {clothingArray.map((cloth, index) => (
              <button key={index} onClick={() => { outfitChange(cloth.name) }} className="w-full px-3 py-1 flex items-center border border-neutral-400 dark:border-neutral-700 rounded-md text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
                <Search size={18} />
                <span className='ml-2 flex justify-between w-full'>
                  {cloth.name}
                  <Sparkles size={18} strokeWidth={1}/>
                </span>
              </button>
            ))}
          </div>
        </ScrollArea>
      </section>
    </div>
  )
}