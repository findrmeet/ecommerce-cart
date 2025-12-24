"use client";

import Image from "next/image";
import { Minus, Plus, ChevronDown, Trash2 } from "lucide-react";

export default function ProductCartItem() {
  return (
    <div className="bg-white p-4">
      {/* Top section */}
      <div className="flex gap-2">
        {/* Product Image */}
        <div className="relative h-18 w-18 overflow-hidden">
          <Image
            src="/product.png"
            alt="Premium Designer Edition Double PK Cotton Polo – Tycoon"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-row gap-1">
          <div className="flex justify-between flex-col">
            <h3 className="text-xs  text-[#1D2535]">
              Premium Designer Edition Double PK Cotton Polo – Tycoon
            </h3>
            <p className="text-xs text-[#64748B]">TK 800</p>
          </div>

          {/* Quantity Control */}
          <div className="mt-2 flex flex-col justify-between  items-end gap-2">
            <button
              aria-label="Remove item"
              className="text-[#98A2B3] hover:text-[#667085]"
            >
              <Trash2 size={14} />
            </button>
            <div className="flex h-8 items-center ">
              <button className="flex h-full w-8 items-center justify-center  border border-[#9CA3AF] cursor-pointer">
                <Minus size={14} />
              </button>

              <span className="flex w-8 items-center justify-center text-sm font-medium text-[#1D2939] border-y border-[#9CA3AF] h-full">
                5
              </span>

              <button className="flex h-full w-8 items-center justify-center text-[#03C855] border border-[#9CA3AF] cursor-pointer">
                <Plus size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-3 h-px w-full bg-[#D1D5DB]" />

      {/* Options */}
      <div className="space-y-3 text-sm">
        {/* Size */}
        <div className="flex items-center justify-between">
          <span className="text-[#344054]">Size :</span>

          <button className="flex items-center justify-between gap-2  bg-[#F3F4F6] py-1 px-2 text-[#8A99AF] w-35">
            <span>2XL</span>
            <ChevronDown size={14} />
          </button>
        </div>

        {/* Color */}
        <div className="flex items-center justify-between">
          <span className="text-[#344054]">Color :</span>

          <button className="flex items-center justify-between gap-2  bg-[#F3F4F6] py-1 px-2 text-[#8A99AF] w-35">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#F0950C]" />
              Yellow
            </span>
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="my-3 h-px w-full bg-[#D1D5DB]" />

      {/* Total */}
      <div className="flex items-center justify-end">
        <span className="text-sm text-[#1D2535]">TK 4000</span>
      </div>
    </div>
  );
}
