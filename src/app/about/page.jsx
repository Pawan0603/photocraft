"use client";
import Link from "next/link"
import { Camera, Zap, Users, Sparkles, ArrowRight } from "lucide-react";
import { useUser } from "@/context/UserContext";

export default function AboutPage() {
  const { user } = useUser();

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      {/* <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-pink-400">About PhotoCraft</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 leading-tight">
            Democratizing Professional Photo Editing
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            We believe everyone deserves access to professional-grade photo editing tools. PhotoCraft harnesses the
            power of artificial intelligence to make stunning edits achievable in seconds, not hours.
          </p>
        </div>
      </section> */}

      {/* Mission Section */}
      <section
        id="vision"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To empower creators of all skill levels with intelligent, accessible photo editing tools that transform
                the way people edit and share visual content.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you're a professional photographer, social media creator, or someone just wanting to enhance a
                memory, PhotoCraft puts professional capabilities at your fingertips.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">AI-Powered Excellence</h3>
                    <p className="text-muted-foreground">Advanced algorithms deliver professional results instantly</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Built for Everyone</h3>
                    <p className="text-muted-foreground">Intuitive interface that requires zero technical expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Limitless Creativity</h3>
                    <p className="text-muted-foreground">Powerful tools to realize any creative vision</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur-3xl opacity-20" />
              <div className="relative bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-2xl p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-pink-500/20 border border-pink-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-pink-400 font-bold">1M+</span>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">Photos Enhanced</p>
                      <p className="text-sm text-muted-foreground">Every month</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-pink-500/20 border border-pink-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-pink-400 font-bold">50K+</span>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">Active Creators</p>
                      <p className="text-sm text-muted-foreground">Growing community</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-pink-500/20 border border-pink-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-pink-400 font-bold">0.5s</span>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">Average Edit Time</p>
                      <p className="text-sm text-muted-foreground">Lightning fast</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose PhotoCraft</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with cutting-edge AI technology and designed for simplicity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Professional edits in seconds, not hours. Our AI processes your photos with incredible speed.",
              },
              {
                icon: Sparkles,
                title: "Intelligent Enhancement",
                description: "Advanced algorithms understand your photos and make smart adjustments automatically.",
              },
              {
                icon: Camera,
                title: "Professional Results",
                description: "Achieve studio-quality results without needing years of photo editing experience.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="group p-6 rounded-xl border border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-transparent hover:border-pink-500/40 transition-all"
                >
                  <Icon className="w-10 h-10 text-pink-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Powered by Advanced AI</h2>
            <p className="text-lg text-muted-foreground">
              We leverage the latest machine learning models for intelligent photo editing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Smart Object Recognition",
                description: "AI identifies objects, people, and scenes to apply intelligent edits",
              },
              {
                title: "Adaptive Algorithms",
                description: "Machine learning continuously improves based on user feedback",
              },
              {
                title: "Real-time Processing",
                description: "See results instantly as you adjust settings and parameters",
              },
              {
                title: "Context Awareness",
                description: "AI understands image context to make appropriate recommendations",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-border bg-card/50 hover:bg-card transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Accessibility",
                description: "We believe everyone deserves professional tools, regardless of skill level or budget",
              },
              {
                title: "Innovation",
                description: "Constantly pushing boundaries with cutting-edge AI and technology",
              },
              {
                title: "Quality",
                description: "Uncompromising commitment to delivering professional-grade results",
              },
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 blur-3xl opacity-30" />
            <div className="relative bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Transform Your Photos?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of creators using PhotoCraft to achieve professional results
              </p>
              {user !== null ? <Link
                href="/photoCraft"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-lg transition-all"
              >
                Start Editing Now
                <ArrowRight className="w-5 h-5" />
              </Link> : <Link
                href="/auth/signup"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-lg transition-all"
              >
                Get Started for Free
                <ArrowRight className="w-5 h-5" />
              </Link>}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-6">PhotoCraft - Professional Photo Editing Made Simple</p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-pink-500 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
