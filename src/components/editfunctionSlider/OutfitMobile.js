'use client';
import { Check, X } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from '../ui/button'

export default function OutfitMobile({ outfitChange, outfitRestore, setShowEffectCard }) {
    const [activeSection, setActiveSection] = useState("Male");

    const cancel = () => {
        outfitRestore();
        setShowEffectCard(false);
    }
    return (
        <div>
            <section className='w-full mt-3'>
                <div className='flex flex-row justify-between w-full mb-2'>
                    <button onClick={() => { setActiveSection("Male") }} className={`w-full p-1 rounded-sms ${activeSection === "Male" ? "bg-neutral-100 dark:bg-neutral-800" : ""}`}>Male</button>
                    <button onClick={() => { setActiveSection("Female") }} className={`w-full p-1 rounded-sms ${activeSection === "Female" ? "bg-neutral-100 dark:bg-neutral-800" : ""}`}>Female</button>
                </div>
                {activeSection === "Male" && <Male outfitChange={outfitChange} outfitRestore={outfitRestore} />}
                {activeSection === "Female" && <Female outfitChange={outfitChange} outfitRestore={outfitRestore} />}
            </section>

            <section className='flex flex-row justify-between items-center mt-4'>
                <Button variant="outline" onClick={cancel}><X /></Button>
                <div>Outfit</div>
                <Button variant="outline" onClick={() => { setShowEffectCard(false) }}><Check /></Button>
            </section>
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
        <div className="grid grid-flow-col overflow-auto gap-2 no-scrollbar ">
            {ClothType.map((cloth, index) => (
                <button key={index} onClick={() => { outfitChange(cloth.Name) }} className=" w-16 h-16 p-1 border rounded-md hover:shadow-md">
                    {cloth.Name}
                </button>
            ))}
        </div>
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
        <div className="grid grid-flow-col overflow-auto gap-2 no-scrollbar">
            {ClothType.map((cloth, index) => (
                <button key={index} onClick={() => { outfitChange(cloth.Name) }} className=" w-16 h-16 p-1 border rounded-md hover:shadow-md">
                    {cloth.Name}
                </button>
            ))}
        </div>
    )
}