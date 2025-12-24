"use client";

import { useState } from "react";
import { X } from "lucide-react";

const SIZES = ["S", "M", "L", "XL", "2XL", "3XL"];

export default function PriceDetailsModal() {
  const [selected, setSelected] = useState("2XL");

  return (
    <div className="w-150 bg-white text-[#1D2535]">
      {/* Header */}
      <div className="relative px-6 py-4 text-center text-xl border-b border-[#D1D5DB]">
        Price Details
        <button className="absolute right-4 top-4 text-[#94A3B8] hover:text-black cursor-pointer">
          <X size={24} />
        </button>
      </div>

      {/* Content */}
      <div className="px-6 text-center pt-8 pb-6">
        <p className="mb-5 font-semibold text-lg">Choose Size</p>

        <div className="flex justify-center gap-3 mb-10">
          {SIZES.map((size) => {
            const active = selected === size;

            return (
              <button
                key={size}
                onClick={() => setSelected(size)}
                className={`h-10.5 w-15.5 text-[14px] font-semibold transition cursor-pointer
                  ${
                    active
                      ? "bg-[#00C853] text-white"
                      : "border border-[#CBD5E1] text-[#1E293B] hover:border-gray-400"
                  }`}
              >
                {size}
              </button>
            );
          })}
        </div>

        <div className="mt-6">
          <p className="mb-2 font-semibold text-lg">Unit Price :</p>
          <p className="text-4xl font-bold text-[#03C855]">৳580</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between px-6 py-4 border-t border-[#D1D5DB]">
        <button className="py-2 px-4 border border-red-500 text-red-500 font-semibold hover:bg-red-50 transition cursor-pointer">
          CANCEL
        </button>

        <button className="py-2 px-4 bg-[#00C853] text-white font-semibold hover:brightness-95 transition cursor-pointer">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
