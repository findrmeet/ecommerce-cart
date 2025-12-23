import { X } from "lucide-react";
import ProductCartItem from "./ProductCartItem";

const ShoppingCart = () => {
  return (
    <div className="w-[384px] text-[#1D2535] bg-[#FFFFFF]">
      <div className="flex justify-between py-3 px-4">
        <h3 className="font-normal text-sm">4 Items</h3>
        <h2 className="uppercase font-medium ">Cart</h2>
        <span>
          <X />
        </span>
      </div>
      <div>
        <ProductCartItem />
      </div>
    </div>
  );
};
export default ShoppingCart;
