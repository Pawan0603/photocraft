"use client";

import { Camera, Wand2, Sparkles, Image as ImageIcon, ArrowRight, Layers, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        {/* <ThemeToggle /> */}
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-muted px-4 py-1.5 rounded-full text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Photo Editing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Photos with
              <span className="text-primary block mt-2">AI Magic</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Professional-grade photo editing made simple with artificial intelligence. 
              Perfect your photos in seconds, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Start Editing Now
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="secondary">
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      {/* Features Section */}
      <div className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground">Everything you need to create stunning photos</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <Wand2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Enhancement</h3>
              <p className="text-muted-foreground">
                One-click photo enhancement powered by advanced AI algorithms
              </p>
            </Card>

            <Card className="p-6">
              <Layers className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Background Removal</h3>
              <p className="text-muted-foreground">
                Instantly remove and replace backgrounds with AI precision
              </p>
            </Card>

            <Card className="p-6">
              <Camera className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pro Adjustments</h3>
              <p className="text-muted-foreground">
                Fine-tune your photos with professional-grade controls
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Example Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">See the Magic in Action</h2>
              <p className="text-muted-foreground mb-8">
                Watch as our AI transforms your photos in real-time. From basic enhancements 
                to complex edits, achieve professional results with just a few clicks.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Palette className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Smart Color Correction</h4>
                    <p className="text-sm text-muted-foreground">Perfect colors automatically</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <ImageIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Instant Enhancement</h4>
                    <p className="text-sm text-muted-foreground">One-click beautification</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d"
                  alt="Photo editing example"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-lg shadow-lg">
                <Wand2 className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted/50 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Photos?</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of photographers who trust our AI-powered tools to enhance their work.
          </p>
          <Button size="lg" className="gap-2">
            Start Editing For Free
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}