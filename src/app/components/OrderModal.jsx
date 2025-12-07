import Image from "next/image";
import React, { useEffect } from "react";
import OrderConfirm from "../assets/icon-order-confirmed.svg";

export default function OrderModal({ setIsModalOpen, cartItem }) {
  const total = () =>
    cartItem.reduce((sum, item) => sum + item.price * item.quantity, 0);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-end sm:items-center">
      <div className="max-w-[850px] mx-auto w-full  bg-white px-7 py-8 rounded-md animate-slide-up sm:animate-fade-in">
        <Image src={OrderConfirm} alt="" className="mb-5" />
        <div className="text-3xl font-bold mb-3">Order Confirmed</div>
        <div className="text-Rose-400 mb-5">We hope you enjoy your food!</div>
        <div
          className={`p-6 rounded-md bg-Rose-100 mb-8 ${
            cartItem.length > 4 ? "overflow-y-scroll max-h-100" : ""
          } `}
        >
          {cartItem.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b border-b-gray-200 mb-5">
              <div className="flex gap-4 mb-5">
                <Image
                  src={item.thumbnail}
                  alt=""
                  width={55}
                  height={"auto"}
                  className="rounded-md"
                />
                <div className="space-y-3">
                  <div className="text-Rose-900 font-semibold">
                    {item.title}
                  </div>
                  <div className="flex gap-4">
                    <div className="text-Red font-semibold">
                      {item.quantity}x
                    </div>
                    <div className="text-Rose-500">
                      @ ${item.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-Rose-900 font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-5">
            <div>Order Total</div>
            <div className="text-Rose-900 font-bold text-2xl">
              ${total().toFixed(2)}
            </div>
          </div>
        </div>

        <button
          className="flex justify-center w-full bg-Red py-4 text-sm text-white rounded-3xl transition-all duration-300 hover:bg-amber-900 cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
