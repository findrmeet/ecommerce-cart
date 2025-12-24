"use client";

import Image from "next/image";
import { Minus, Plus, ChevronDown, Trash2 } from "lucide-react";
import { useState } from "react";

export default function ProductCartItem() {
  const [quantity, setQuantity] = useState(5);
  const [size, setSize] = useState("2XL");
  const [color, setColor] = useState("yellow");

  const price = 800;
  const total = quantity * price;

  return (
    <div className="bg-white p-4">
      {/* Top section */}
      <div className="flex gap-2">
        <div className="relative h-18 w-18 overflow-hidden">
          <Image
            src="/product.png"
            alt="Product"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-row gap-1">
          <div className="flex justify-between flex-col">
            <h3 className="text-xs text-[#1D2535]">
              Premium Designer Edition Double PK Cotton Polo – Tycoon
            </h3>
            <p className="text-xs text-[#64748B]">TK {price}</p>
          </div>

          {/* Quantity Control */}
          <div className="mt-2 flex flex-col justify-between items-end gap-2">
            <button className="text-[#98A2B3] hover:text-[#667085]">
              <Trash2 size={14} />
            </button>

            <div className="flex h-8 items-center">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex h-full w-8 items-center justify-center border border-[#9CA3AF]"
              >
                <Minus size={14} />
              </button>

              <span className="flex w-8 items-center justify-center text-sm font-medium text-[#1D2939] border-y border-[#9CA3AF] h-full">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="flex h-full w-8 items-center justify-center text-[#03C855] border border-[#9CA3AF]"
              >
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

          <div className="relative w-24">
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full appearance-none bg-[#F3F4F6] py-1 pl-3 pr-6 text-[#8A99AF]"
            >
              <option>XL</option>
              <option>2XL</option>
              <option>3XL</option>
            </select>

            {/* Chevron */}
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#8A99AF]"
            />
          </div>
        </div>

        {/* Color */}
        <div className="flex items-center justify-between">
          <span className="text-[#344054]">Color :</span>

          <div className="relative w-24">
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full appearance-none bg-[#F3F4F6] py-1 pl-8 pr-6 text-[#8A99AF]"
            >
              <option value="yellow">Yellow</option>
              <option value="black">Black</option>
              <option value="blue">Blue</option>
            </select>

            {/* Color Dot */}
            <span
              className={`absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full ${
                color === "yellow"
                  ? "bg-[#F0950C]"
                  : color === "black"
                  ? "bg-black"
                  : "bg-blue-500"
              }`}
            />

            {/* Chevron */}
            <ChevronDown
              size={14}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[#8A99AF]"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-3 h-px w-full bg-[#D1D5DB]" />

      {/* Total */}
      <div className="flex items-center justify-end">
        <span className="text-sm text-[#1D2535]">TK {total}</span>
      </div>
    </div>
  );
}
