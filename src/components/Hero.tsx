import React from 'react';
import { TrendingUp, Target, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Optimize Your Freelance</span>
                <span className="block text-purple-600">Success with AI</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                Boost your freelancing income with AI-powered insights. Get data-driven recommendations for your gigs, pricing, and keywords.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10">
                    Get Started Free
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-purple-600 bg-purple-100 hover:bg-purple-200 md:py-4 md:text-lg md:px-10">
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="absolute -top-4 left-4 bg-purple-500 rounded-lg p-2">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Smart Analytics</h3>
                <p className="mt-2 text-gray-500">Get real-time insights into your gig performance and market trends.</p>
              </div>
              <div className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="absolute -top-4 left-4 bg-blue-500 rounded-lg p-2">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Keyword Optimization</h3>
                <p className="mt-2 text-gray-500">Discover high-performing keywords to boost your gig visibility.</p>
              </div>
              <div className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="absolute -top-4 left-4 bg-green-500 rounded-lg p-2">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">AI Recommendations</h3>
                <p className="mt-2 text-gray-500">Get personalized suggestions to improve your gig performance.</p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" r="400" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 400) rotate(90) scale(400)">
              <stop stopColor="#9333EA" />
              <stop offset="1" stopColor="#9333EA" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}