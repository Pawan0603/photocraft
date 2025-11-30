'use client';
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/photoshop")) {
    return null;
  }

  return (
    <footer className="border-t border-border bg-card/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">PhotoCraft</h3>
            <p className="text-sm text-muted-foreground">AI-powered photo editing made simple.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#features" className="hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Examples
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex items-center justify-between text-sm text-muted-foreground">
          <p>&copy; 2025 PhotoCraft. All rights reserved.</p>
          <div className="flex gap-4">
            <Link target="_blank" href="https://x.com/pawanmthakre" className="hover:text-primary transition-colors">
              Twitter (X)
            </Link>
            <Link target="_blank" href="https://www.instagram.com/pawanthakre_/" className="hover:text-primary transition-colors">
              Instagram
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/pawan-thakre-12b99a2b8/" className="hover:text-primary transition-colors">
              LinkedIn
            </Link>
            <Link target="_blank" href="https://github.com/Pawan0603/photocraft" className="hover:text-primary transition-colors">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer