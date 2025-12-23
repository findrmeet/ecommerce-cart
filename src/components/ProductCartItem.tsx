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

        {/* Product Info */}
        <div className="flex flex-1 flex-col gap-1">
          <div className="flex justify-between">
            <h3 className="text-xs  text-[#1D2535]">
              Premium Designer Edition Double PK Cotton Polo – Tycoon
            </h3>

            <button
              aria-label="Remove item"
              className="text-[#98A2B3] hover:text-[#667085]"
            >
              <Trash2 size={14} />
            </button>
          </div>

          <p className="text-sm font-medium text-[#667085]">TK 800</p>

          {/* Quantity Control */}
          <div className="mt-2 flex items-center gap-2">
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
      <div className="my-4 h-px w-full bg-[#EAECF0]" />

      {/* Options */}
      <div className="space-y-3 text-sm">
        {/* Size */}
        <div className="flex items-center justify-between">
          <span className="text-[#344054]">Size :</span>

          <button className="flex items-center gap-2 rounded-md border border-[#D0D5DD] px-3 py-1.5 text-[#344054]">
            <span>2XL</span>
            <ChevronDown size={14} />
          </button>
        </div>

        {/* Color */}
        <div className="flex items-center justify-between">
          <span className="text-[#344054]">Color :</span>

          <button className="flex items-center gap-2 rounded-md border border-[#D0D5DD] px-3 py-1.5 text-[#344054]">
            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#F79009]" />
              Yellow
            </span>
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 h-px w-full bg-[#EAECF0]" />

      {/* Total */}
      <div className="flex items-center justify-end">
        <span className="text-base font-semibold text-[#1D2939]">TK 4000</span>
      </div>
    </div>
  );
}
