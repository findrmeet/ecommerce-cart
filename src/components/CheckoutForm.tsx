"use client";

import { useForm } from "react-hook-form";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type FormValues = {
  name: string;
  mobile: string;
  city: string;
  area: string;
  address: string;
  email?: string;
  notes?: string;
  coupon?: string;
  shipping: "inside" | "outside";
  payment: "cod" | "bkash" | "card";
};

export default function CheckoutForm() {
  const { register, handleSubmit, watch, setValue } = useForm<FormValues>({
    defaultValues: {
      shipping: "inside",
      payment: "cod",
    },
  });

  const shipping = watch("shipping");

  const [cityOpen, setCityOpen] = useState(false);
  const [areaOpen, setAreaOpen] = useState(false);

  const cityRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  const cities = ["Dhaka", "Chittagong", "Sylhet", "Rajshahi"];
  const areas = ["Banani", "Gulshan", "Dhanmondi", "Mirpur"];

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  // ---------- Event Handlers (no inline functions) ----------

  const toggleCity = () => {
    setCityOpen((prev) => !prev);
  };

  const toggleArea = () => {
    setAreaOpen((prev) => !prev);
  };

  const selectCity = (city: string) => {
    setValue("city", city);
    setCityOpen(false);
  };

  const selectArea = (area: string) => {
    setValue("area", area);
    setAreaOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cityRef.current && !cityRef.current.contains(e.target as Node)) {
        setCityOpen(false);
      }
      if (areaRef.current && !areaRef.current.contains(e.target as Node)) {
        setAreaOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-300 mx-auto p-6">
      {/* LOGIN BANNER */}
      <div className="border border-[#2ecc71] bg-[#f4fff9] px-4 py-2 text-sm mb-8 flex gap-2">
        <p>Returning Customer?</p>
        <span className="text-[#2ecc71] font-semibold cursor-pointer">
          Click here to login
        </span>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT */}
        <div className="flex-1">
          <h2 className="font-semibold text-sm mb-4">BILLING & SHIPPING</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input {...register("name")} placeholder="Name" className="input" />
            <input
              {...register("mobile")}
              placeholder="Mobile"
              className="input"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {/* CITY DROPDOWN */}
            <div ref={cityRef} className="relative">
              <button
                type="button"
                onClick={toggleCity}
                className="input flex items-center justify-between cursor-pointer"
              >
                <span>{watch("city") || "Select City"}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    cityOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {cityOpen && (
                <div className="absolute top-full mt-1 w-full bg-white border border-[#9CA3AF] z-50">
                  {cities.map((city) => (
                    <button
                      key={city}
                      type="button"
                      className="w-full text-left px-4 py-1 cursor-pointer hover:bg-[#EFF4FB]"
                      onClick={() => selectCity(city)}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* AREA DROPDOWN */}
            <div ref={areaRef} className="relative">
              <button
                type="button"
                onClick={toggleArea}
                className="input flex items-center justify-between cursor-pointer"
              >
                <span>{watch("area") || "Select Area"}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    areaOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {areaOpen && (
                <div className="absolute top-full mt-1 w-full bg-white border border-[#9CA3AF] z-50">
                  {areas.map((area) => (
                    <button
                      key={area}
                      type="button"
                      className="w-full text-left px-4 py-1 cursor-pointer hover:bg-[#EFF4FB]"
                      onClick={() => selectArea(area)}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              {...register("address")}
              placeholder="Address"
              className="input"
            />
            <input
              {...register("email")}
              placeholder="Email (optional)"
              className="input"
            />
          </div>

          <textarea
            {...register("notes")}
            placeholder="Order Notes (optional)"
            className="input h-28 resize-none"
          />
        </div>

        {/* RIGHT */}
        <div className="flex-1">
          <p className="mb-4 text-sm text-[#03C855]">Have a coupon code?</p>

          <div className="flex gap-3 mb-5">
            <input
              {...register("coupon")}
              placeholder="Coupon code"
              className="input flex-1"
            />
            <button
              type="button"
              className="bg-[#0ACB52] text-white px-6 py-2.75 text-sm font-semibold cursor-pointer"
            >
              APPLY
            </button>
          </div>

          <h3 className="font-semibold text-sm mb-3">Choose Shipping Method</h3>

          <div className="space-y-3 text-sm mb-5">
            <label className="flex justify-between">
              <span className="flex items-center">
                <input
                  {...register("shipping")}
                  type="radio"
                  value="inside"
                  className="mr-2 custom-radio"
                />
                <span>Delivery Inside Dhaka</span>
              </span>
              <span>TK 60.00</span>
            </label>

            <label className="flex justify-between">
              <span className="flex items-center">
                <input
                  {...register("shipping")}
                  type="radio"
                  value="outside"
                  className="mr-2 custom-radio"
                />
                <span>Delivery Outside Dhaka</span>
              </span>
              <span>TK 100.00</span>
            </label>
          </div>

          <div className="text-sm space-y-2 border-t pt-4 mb-6 border-[#8A99AF]">
            <div className="flex justify-between">
              <span>Total MRP</span>
              <span>TK 5,648.00</span>
            </div>

            <div className="flex justify-between font-semibold">
              <span>Total Amount</span>
              <span className="text-[#0ACB52]">
                TK {shipping === "inside" ? "5,708.00" : "5,748.00"}
              </span>
            </div>
          </div>

          <h3 className="font-semibold text-sm mb-3">Choose Payment Method</h3>

          <div className="space-y-3 text-sm mb-6 flex flex-col">
            <label>
              <span className="flex items-center">
                <input
                  {...register("payment")}
                  type="radio"
                  value="cod"
                  className="mr-2 custom-radio"
                />
                <span>Cash on delivery</span>
              </span>
            </label>

            <label>
              <span className="flex items-center">
                <input
                  {...register("payment")}
                  type="radio"
                  value="bkash"
                  className="mr-2 custom-radio"
                />
                <span>Bkash</span>
              </span>
            </label>

            <label>
              <span className="flex items-center">
                <input
                  {...register("payment")}
                  type="radio"
                  value="card"
                  className="mr-2 custom-radio"
                />
                <span>Pay with Card/Mobile Wallet</span>
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0ACB52] text-white py-3 text-sm font-semibold cursor-pointer"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </form>
  );
}
