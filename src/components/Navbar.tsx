'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-[#4B6BFB]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <span className="ml-2 text-xl font-semibold">Adv. Ajay Kumar Singh</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-900 hover:text-[#4B6BFB] px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link href="/#services" className="text-gray-900 hover:text-[#4B6BFB] px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link href="/#expertise" className="text-gray-900 hover:text-[#4B6BFB] px-3 py-2 rounded-md text-sm font-medium">Expertise</Link>
              <Link href="/#about" className="text-gray-900 hover:text-[#4B6BFB] px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link href="/#blog" className="text-gray-900 hover:text-[#4B6BFB] px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
              <Link href="/contact" className="text-gray-900 hover:text-[#4B6BFB] px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              <Link
                href="/consultation"
                className="bg-[#4B6BFB] text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium transition duration-150"
              >
                Book Consultation
              </Link>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#4B6BFB] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4B6BFB]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-900 hover:text-[#4B6BFB] block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/#services" className="text-gray-900 hover:text-[#4B6BFB] block px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link href="/#expertise" className="text-gray-900 hover:text-[#4B6BFB] block px-3 py-2 rounded-md text-base font-medium">Expertise</Link>
            <Link href="/#about" className="text-gray-900 hover:text-[#4B6BFB] block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="/#blog" className="text-gray-900 hover:text-[#4B6BFB] block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
            <Link href="/contact" className="text-gray-900 hover:text-[#4B6BFB] block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            <Link
              href="/consultation"
              className="bg-[#4B6BFB] text-white hover:bg-blue-600 block px-4 py-2 rounded-md text-base font-medium transition duration-150"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
