"use client";

import { useEffect, useState } from "react";
import { Menu, X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import DropUserMenu from "./DropUserMenu";
import DropDownMenuMobile from "./DropDownMenuMobile";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const {toast} = useToast();
  const router = useRouter();

  const valideToken = async (TOKEN) => {
    try {
      let res = await axios.post('/api/validateToken', { token: TOKEN });
      setUser(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      toast({
        variant: "destructive",
        description: error.response.data.message,
      }) 
      if (error.response.data.message === "jwt expired") {
        if (typeof window === 'undefined') return;
        localStorage.removeItem('token');
      }
      setUser(null);
    }

  }

  useEffect(() => {
    if (typeof window !== 'undefined' && user === null) {
      let Token = localStorage.getItem('token');
      if (!Token) return;
      valideToken(Token);
    }
  }, []);

  const Logout = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('token');
      setUser(null);
    }
  }

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Camera className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">PhotoCraft</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="/examples" className="text-muted-foreground hover:text-foreground transition-colors">
              Examples
            </Link>
            <div className="ml-2">
              <ThemeToggle />
            </div>
            {user === null ? <Link href={"/auth/login"}><Button>Get Started</Button></Link> :
              <DropUserMenu Logout={Logout} />}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="space-y-1 pt-2 pb-3">
              <Link
                href="#features"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/examples"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Examples
              </Link>
              <div className="px-3 py-2">
                {user === null ? <Link href={'/auth/login'}><Button className="w-full">Get Started</Button></Link> :
                  <DropDownMenuMobile Logout={Logout} />}

              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}