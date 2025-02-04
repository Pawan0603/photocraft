'use client';
import React, { useState } from 'react'
import { ScrollArea } from '../ui/scroll-area';

export default function Outfit({ outfitChange, outfitRestore }) {
  const [activeSection, setActiveSection] = useState("Male");
  return (
    <div className='mx-4 h-full'>
      <h4 className='text-gray-700 dark:text-gray-300 mb-3'>Outfit</h4>
      <div className='flex flex-row justify-between w-full'>
        <button onClick={() => { setActiveSection("Male") }} className={`w-full p-1 rounded-sms ${activeSection === "Male" ? "bg-neutral-100 dark:bg-neutral-800" : ""}`}>Male</button>
        <button onClick={() => { setActiveSection("Female") }} className={`w-full p-1 rounded-sms ${activeSection === "Female" ? "bg-neutral-100 dark:bg-neutral-800" : ""}`}>Female</button>
      </div>
      {activeSection === "Male" && <Male outfitChange={outfitChange} outfitRestore={outfitRestore} />}
      {activeSection === "Female" && <Female  outfitChange={outfitChange} outfitRestore={outfitRestore} />}
    </div>
  )
}

function Male({ outfitChange, outfitRestore }) {
  const ClothType = [
    { Name: "T-shirt" },
    { Name: "Shirt" },
    { Name: "Jeans" },
    { Name: "Jacket" },
    { Name: "Sweater" },
    { Name: "Shorts" },
    { Name: "Suit" },
    { Name: "Blazer" },
    { Name: "Hoodie" },
    { Name: "Polo" },
    { Name: "Tank Top" }
  ]

  return (
    <ScrollArea className="flex flex-row justify-between w-full h-full mt-3">
      <div className="flex flex-row justify-between w-full flex-wrap h-full gap-3">
        {ClothType.map((cloth, index) => (
            <button key={index} onClick={() => { outfitChange(cloth.Name) }} className=" w-24 h-24 border rounded-md hover:shadow-md">
              {cloth.Name}
            </button>
        ))}
      </div>
    </ScrollArea>
  )
}

function Female({ outfitChange, outfitRestore }) {
  const ClothType = [
    { Name: "T-shirt" },
    { Name: "Dress" },
    { Name: "Skirt" },
    { Name: "Bikini" },
    { Name: "Jeans" },
    { Name: "Jacket" },
    { Name: "Sweater" },
    { Name: "Shorts" },
    { Name: "Suit" },
    { Name: "Blazer" },
    { Name: "Blouse" },
    { Name: "Hoodie" },
    { Name: "Tank Top" },
    { Name: "Cardigan" },
    { Name: "Leggings" },
    { Name: "Crop Top" },
    { Name: "Camisole" },
    { Name: "Gown" },
    { Name: "Palazzo" },
    { Name: "Kurti" },
    { Name: "Saree" },
    { Name: "Monokini" },
    { Name: "Tankini" },
    { Name: "Trikini" },
    { Name: "Bandeaukini" },
    { Name: "Microkini" },
    { Name: "Sling Bikini" },
    { Name: "String Bikini" },
    { Name: "High-Waisted Bikini" },
  ]
  return (
    <ScrollArea className="flex flex-row justify-between w-full h-full mt-3">
      <div className="flex flex-row justify-between w-full flex-wrap h-full gap-3">
        {ClothType.map((cloth, index) => (
          <button key={index} onClick={() => { outfitChange(cloth.Name) }} className=" w-24 h-24 border rounded-md hover:shadow-md">
            {cloth.Name}
          </button>
        ))}
      </div>
    </ScrollArea>
  )
}