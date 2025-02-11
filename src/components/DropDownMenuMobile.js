'use client';
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';
import { LogOut, User } from 'lucide-react';

function DropDownMenuMobile({ Logout }) {
    return (
        <div>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Profile</AccordionTrigger>
                    <AccordionContent>
                        <Link
                            href="/profile"
                            className="w-full flex gap-2 px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md"
                        >
                            <User size={20}/>
                            <span>Profile</span>
                        </Link>
                        <button
                            onClick={Logout}
                            className="w-full flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md"
                        >
                            <LogOut size={20}/>
                            <span>Log out</span>
                        </button>
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>
    )
}

export default DropDownMenuMobile