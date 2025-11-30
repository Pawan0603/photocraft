"use client"

import React, { useEffect } from "react"

import { useState } from "react"
import Link from "next/link"
import axios from "axios"
import { useUser } from "@/context/UserContext";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")
  const { user } = useUser();
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && user === null) {
      let Token = localStorage.getItem('token');
      if (!Token) return;
      setToken(Token);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (!user) return setSubmitStatus("unauthenticated");

      const res = await axios.post("/api/message", {
        content: formData,
        token: token,
      })

      console.log(res.data);

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setTimeout(() => setSubmitStatus(""), 3000)

    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus(""), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about PhotoCraft? We'd love to hear from you. Send us a message and we'll get back to you
              as soon as possible.
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">hello@photocraft.com</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-semibold mb-2">Support</h3>
              <p className="text-muted-foreground">support@photocraft.com</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <p className="text-muted-foreground">@photocraftai</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-lg p-8">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors"
                placeholder="How can we help?"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors resize-none"
                placeholder="Tell us what's on your mind..."
              />
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-300">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive">
                Something went wrong. Please try again.
              </div>
            )}
            {submitStatus === "unauthenticated" && (
              <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-300">
                Please <Link href="/auth/login" className="underline">log in</Link> to send a message.
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span
                    className="inline-block h-4 w-4 rounded-full border-2 border-current border-t-transparent"
                    style={{ animation: "spin 0.6s linear infinite" }}
                  />
                  Sending...
                </>
              ) : (
                <>Send Message</>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How long does it take to get a response?",
                a: "We typically respond to all inquiries within 24-48 hours during business days.",
              },
              {
                q: "Do you offer phone support?",
                a: "Currently, we support contact through email and our support portal. We're always improving!",
              },
              {
                q: "What's the best way to report a bug?",
                a: "Please email our support team at support@photocraft.com with detailed information about the issue.",
              },
              {
                q: "Can I request new features?",
                a: "We love hearing from our users. Share your feature requests with us anytime.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold mb-2 text-primary">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
