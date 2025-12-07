"use client";
import Image from "next/image";
import React, { useState } from "react";
import AddToCartIcon from "../assets/icon-add-to-cart.svg";
import IncrementIcon from "../assets/icon-increment-quantity.svg";
import DecrementIcon from "../assets/icon-decrement-quantity.svg";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  updateCartQuantity,
} from "../redux/counterSlice";
export default function ProductCard({ product, id }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.counter.items);
  const itemInCart = cartItem.find((item) => item.id === id);

  return (
    <div className="sm:w-[48%] md:w-[32%] mt-4">
      <figure className="mb-7 relative">
        <Image
          src={product.desktopImage}
          className={`w-full rounded-2xl hidden lg:block ${itemInCart ? 'border-2 border-Red' : ''}`}
          alt=""
        ></Image>
        <Image
          src={product.tabletImage}
          className={`w-full rounded-2xl hidden md:block lg:hidden ${itemInCart ? 'border-2 border-Red' : ''}`}
          alt=""
        ></Image>
        <Image
          src={product.mobileImage}
          className={`w-full rounded-2xl block md:hidden ${itemInCart ? 'border-2 border-Red' : ''}`}
          alt=""
        ></Image>

        {itemInCart ? (
          <div
            className="absolute -bottom-4 left-[28%] sm:left-[25%] md:left-[15%] xl:left-[25%]
      px-7 sm:px-5 tablet:px-7 py-2.5 rounded-3xl flex justify-center gap-2 
      w-40 transition-all duration-300 bg-Red"
          >
            <div className="flex justify-between w-full">
              {/* Decrement */}
              <button
                onClick={() =>
                  dispatch(
                    updateCartQuantity({
                      id,
                      quantity: Math.max(1, itemInCart.quantity - 1),
                    })
                  )
                }
              >
                <Image src={DecrementIcon} alt="" />
              </button>

              <div className="text-white">{itemInCart.quantity}</div>

              {/* Increment */}
              <button
                onClick={() =>
                  dispatch(
                    updateCartQuantity({
                      id,
                      quantity: itemInCart.quantity + 1,
                    })
                  )
                }
              >
                <Image src={IncrementIcon} alt="" />
              </button>
            </div>
          </div>
        ) : (
          // Add to Cart Button (only when this exact product is NOT in cart)
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id,
                  title: product.title,
                  subtitle: product.subtitle,
                  quantity: 1,
                  price: product.price,
                  thumbnail: product.thumbnail
                })
              )
            }
            className="absolute -bottom-4 left-[28%] md:left-[20%] tablet:left-[22%] xl:left-[25%]
      px-7 sm:px-5 tablet:px-7 py-2.5 rounded-3xl bg-Rose-50 border 
      border-Rose-400 flex gap-2 cursor-pointer transition-all duration-300 
      hover:border-Red hover:text-Red"
          >
            <Image src={AddToCartIcon} alt="" />
            <span className="font-semibold text-sm">Add to cart</span>
          </button>
        )}
      </figure>
      <div>
        <div className="text-sm text-Rose-300">{product.subtitle}</div>
        <div className="text-Rose-900 font-semibold">{product.title}</div>
        <div className="text-Red font-semibold">
          ${product.price.toFixed(2)}
        </div>
      </div>
    </div>
  );
}
