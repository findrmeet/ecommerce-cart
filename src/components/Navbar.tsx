"use client";

import { ShoppingCart as CartIcon, Menu } from "lucide-react";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB]">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          {/* Left */}
          <div className="flex items-center gap-2">
            <Menu size={20} className="text-[#344054]" />
            <span className="text-lg font-semibold text-[#1D2535]">MyShop</span>
          </div>

          {/* Center */}
          <div className="hidden md:flex items-center gap-6 text-sm text-[#344054]">
            <button className="hover:text-black">Home</button>
            <button className="hover:text-black">Shop</button>
            <button className="hover:text-black">About</button>
            <button className="hover:text-black">Contact</button>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <button className="text-sm text-[#344054] hover:text-black">
              Login
            </button>

            <button
              className="relative flex items-center justify-center h-9 w-9 rounded-full hover:bg-[#F3F4F6]"
              onClick={() => setOpen(true)}
            >
              <CartIcon size={18} className="text-[#1D2535]" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#03C855] text-[11px] font-medium text-white">
                2
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Cart Panel */}
      <ShoppingCart open={open} onClose={() => setOpen(false)} />
    </>
  );
}
