"use client";

import { X } from "lucide-react";
import ProductCartItem from "./ProductCartItem";

type Props = {
  open: boolean;
  onClose: () => void;
};

const ShoppingCart = ({ open, onClose }: Props) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* Cart Panel */}
      <div className="absolute right-0 top-0 h-full w-[384px] bg-white shadow-xl flex flex-col text-[#1D2535]">
        {/* Header */}
        <div className="flex items-center justify-between py-3 px-4 border-b">
          <h3 className="text-sm">4 Items</h3>
          <h2 className="uppercase font-medium">Cart</h2>
          <button onClick={onClose} className="cursor-pointer">
            <X />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 bg-[#D1D5DB] p-3 space-y-3 overflow-y-auto">
          <ProductCartItem hasOptions />
          <ProductCartItem />
          <ProductCartItem />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
