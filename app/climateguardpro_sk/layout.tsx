import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClimateGuard Pro - Budúcnosť klímy",
  description: "Definitívny klimatický systém 4-v-1. Vesmírna technológia pre váš domov.",
};

export default function ClimateGuardProSKLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;800&family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet" />

      {/* Tailwind CDN for custom config */}
      <script src="https://cdn.tailwindcss.com"></script>

      {/* Tailwind Custom Configuration */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  fontFamily: {
                    sans: ['Outfit', 'sans-serif'],
                    display: ['Syne', 'sans-serif'],
                  },
                  colors: {
                    void: {
                      950: '#030305',
                      900: '#0A0A0F',
                      800: '#151520',
                    },
                    platinum: {
                      50: '#F8FAFC',
                      100: '#F1F5F9',
                      200: '#E2E8F0',
                      900: '#0F172A',
                    },
                    neon: {
                      400: '#FF6B00',
                      500: '#FF4D00',
                      glow: '#FF4D00',
                    },
                    holo: {
                      100: '#E0E7FF',
                      500: '#6366F1',
                    }
                  },
                  backgroundImage: {
                    'grid-pattern-light': "linear-gradient(to right, #00000005 1px, transparent 1px), linear-gradient(to bottom, #00000005 1px, transparent 1px)",
                    'grid-pattern-dark': "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
                    'radial-fade': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
                  },
                  animation: {
                    'float': 'float 6s ease-in-out infinite',
                    'pulse-neon': 'pulseNeon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    'spin-slow': 'spin 12s linear infinite',
                    'slide-up': 'slideUp 0.8s ease-out forwards',
                    'marquee': 'marquee 12s linear infinite',
                    'shimmer': 'shimmer 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    'blob': 'blob 7s infinite',
                    'scanline': 'scanline 4s linear infinite',
                  },
                  keyframes: {
                    float: {
                      '0%, 100%': { transform: 'translateY(0)' },
                      '50%': { transform: 'translateY(-20px)' },
                    },
                    pulseNeon: {
                      '0%, 100%': { opacity: '1', boxShadow: '0 0 20px #FF4D00', transform: 'scale(1)' },
                      '50%': { opacity: '.9', boxShadow: '0 0 30px #FF4D00', transform: 'scale(1.02)' },
                    },
                    slideUp: {
                      '0%': { opacity: '0', transform: 'translateY(40px)' },
                      '100%': { opacity: '1', transform: 'translateY(0)' },
                    },
                    marquee: {
                      '0%': { transform: 'translateX(0)' },
                      '100%': { transform: 'translateX(-50%)' },
                    },
                    shimmer: {
                      '0%': { backgroundPosition: '-200% center' },
                      '100%': { backgroundPosition: '200% center' },
                    },
                    blob: {
                      '0%': { transform: 'translate(0px, 0px) scale(1)' },
                      '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                      '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                      '100%': { transform: 'translate(0px, 0px) scale(1)' },
                    },
                    scanline: {
                      '0%': { transform: 'translateY(-100%)' },
                      '100%': { transform: 'translateY(100%)' },
                    }
                  }
                }
              }
            }
          `,
        }}
      />

      {/* Custom Global Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .climateguardpro-sk { font-family: 'Outfit', sans-serif; -webkit-font-smoothing: antialiased; background-color: #030305; }
            .climateguardpro-sk h1, .climateguardpro-sk h2, .climateguardpro-sk h3, .climateguardpro-sk h4, .climateguardpro-sk .font-display { font-family: 'Syne', sans-serif; }

            .glass-tech {
              background: rgba(10, 10, 15, 0.6);
              backdrop-filter: blur(12px);
              -webkit-backdrop-filter: blur(12px);
              border: 1px solid rgba(255, 255, 255, 0.08);
            }

            .glass-platinum {
              background: rgba(255, 255, 255, 0.7);
              backdrop-filter: blur(20px);
              -webkit-backdrop-filter: blur(20px);
              border: 1px solid rgba(255, 255, 255, 0.5);
            }

            .text-glow {
              text-shadow: 0 0 20px rgba(255, 77, 0, 0.5);
            }
          `,
        }}
      />

      <div className="climateguardpro-sk bg-void-950 text-gray-800 overflow-x-hidden selection:bg-neon-500 selection:text-white">
        {children}
      </div>
    </>
  );
}
