import React from "react";
import Image from "next/image";
import RemoveItemIcon from "../assets/icon-remove-item.svg";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/counterSlice";
export default function CartItem({ item, itemTotal }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center border-b border-Rose-100">
      <div className="my-5">
        <div className="text-Rose-900 font-semibold">{item.title}</div>
        <div className="flex gap-4 items-center">
          <div className="text-Red font-semibold text-sm">{item.quantity}x</div>
          <div>
            <span className="text-Rose-400 text-sm">
              @ ${itemTotal.toFixed(2)}
            </span>{" "}
            <span className="text-Rose-500 font-semibold text-sm">
              ${item.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="cursor-pointer"
      >
        <Image
          src={RemoveItemIcon}
          alt=""
          className="w-5 p-1 border border-Rose-300 rounded-full my-5"
        />
      </button>
    </div>
  );
}
