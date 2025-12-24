"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Minus, Plus, ChevronDown, Trash2 } from "lucide-react";

type ProductCartItemProps = {
  hasOptions?: boolean;
};

export default function ProductCartItem({ hasOptions }: ProductCartItemProps) {
  const [sizeOpen, setSizeOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);

  const sizeRef = useRef<HTMLDivElement>(null);
  const colorRef = useRef<HTMLDivElement>(null);

  const [quantity, setQuantity] = useState(5);
  const [size, setSize] = useState("2XL");
  const [color, setColor] = useState("yellow");

  const price = 800;
  const total = quantity * price;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (sizeRef.current && !sizeRef.current.contains(e.target as Node)) {
        setSizeOpen(false);
      }
      if (colorRef.current && !colorRef.current.contains(e.target as Node)) {
        setColorOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="bg-white p-4">
      {/* Top section */}
      <div className="flex gap-2">
        <div className="relative h-18 w-18 overflow-hidden">
          <Image src="/product.png" alt="Product" fill className="object-cover" />
        </div>

        <div className="flex flex-1 flex-row gap-1">
          <div className="flex justify-between flex-col">
            <h3 className="text-xs text-[#1D2535]">
              Premium Designer Edition Double PK Cotton Polo – Tycoon
            </h3>
            <p className="text-xs text-[#64748B]">TK {price}</p>
          </div>

          <div className="mt-2 flex flex-col justify-between items-end gap-2">
            <button className="text-[#98A2B3] hover:text-[#EF4444] cursor-pointer">
              <Trash2 size={14} />
            </button>

            <div className="flex h-8 items-center">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex h-full w-8 items-center justify-center border border-[#9CA3AF] cursor-pointer"
              >
                <Minus size={14} />
              </button>

              <span className="flex w-8 items-center justify-center text-sm font-medium text-[#1D2939] border-y border-[#9CA3AF] h-full">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="flex h-full w-8 items-center justify-center text-[#03C855] border border-[#9CA3AF] cursor-pointer"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {hasOptions && (
        <>
          {/* Divider */}
          <div className="my-3 h-px w-full bg-[#D1D5DB]" />

          {/* Options */}
          <div className="space-y-3 text-sm">
            {/* Size */}
            <div className="flex items-center justify-between">
              <span className="text-[#344054]">Size :</span>

              <div ref={sizeRef} className="relative w-24">
                <button
                  onClick={() => setSizeOpen(!sizeOpen)}
                  className="flex w-full items-center justify-between bg-[#F3F4F6] px-3 py-1 text-[#8A99AF] cursor-pointer"
                >
                  <span>{size}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${sizeOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {sizeOpen && (
                  <div className="absolute top-full mt-1 w-full bg-white border border-[#9CA3AF] z-50">
                    {["XL", "2XL", "3XL"].map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setSize(item);
                          setSizeOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1 text-sm hover:bg-[#EFF4FB] hover:text-black cursor-pointer ${
                          size === item ? "bg-[#03C855] text-white" : ""
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Color */}
            <div className="flex items-center justify-between">
              <span className="text-[#344054]">Color :</span>

              <div ref={colorRef} className="relative w-24">
                <button
                  onClick={() => setColorOpen(!colorOpen)}
                  className="flex w-full items-center justify-between bg-[#F3F4F6] px-2 py-1 text-[#8A99AF] cursor-pointer "
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-3 w-3 rounded-full ${
                        color === "yellow"
                          ? "bg-[#F0950C]"
                          : color === "black"
                          ? "bg-black"
                          : "bg-blue-500"
                      }`}
                    />
                    <span className="capitalize">{color}</span>
                  </div>

                  <ChevronDown
                    size={14}
                    className={`transition-transform ${colorOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {colorOpen && (
                  <div className="absolute top-full mt-1 w-full bg-white border border-[#9CA3AF] z-50">
                    {["yellow", "black", "blue"].map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setColor(item);
                          setColorOpen(false);
                        }}
                        className={`flex items-center gap-2 w-full text-left px-2 py-1 text-sm hover:bg-[#EFF4FB] hover:text-black cursor-pointer ${
                          color === item ? "bg-[#03C855] text-white" : ""
                        }`}
                      >
                        <span
                          className={`h-3 w-3 rounded-full ${
                            item === "yellow"
                              ? "bg-[#F0950C]"
                              : item === "black"
                              ? "bg-black"
                              : "bg-blue-500"
                          }`}
                        />
                        <span className="capitalize">{item}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Divider */}
      <div className="my-3 h-px w-full bg-[#D1D5DB]" />

      {/* Total */}
      <div className="flex items-center justify-end">
        <span className="text-sm text-[#1D2535]">TK {total}</span>
      </div>
    </div>
  );
}
