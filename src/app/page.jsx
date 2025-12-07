"use client";
import { useState } from "react";
import Image from "next/image";
// Components
import ProductCard from "./components/ProductCard";
import OrderModal from "./components/OrderModal";
// Images
import WaffleDesktop from "../app/assets/image-waffle-desktop.jpg";
import WaffleTablet from "../app/assets/image-waffle-tablet.jpg";
import WaffleMobile from "../app/assets/image-waffle-mobile.jpg";
import WaffleThumbnail from "../app/assets/image-waffle-thumbnail.jpg";
import CremeDesktop from "../app/assets/image-creme-brulee-desktop.jpg";
import CremeTablet from "../app/assets/image-creme-brulee-tablet.jpg";
import CremeMobile from "../app/assets/image-creme-brulee-mobile.jpg";
import CremeThumbnail from "../app/assets/image-creme-brulee-thumbnail.jpg";
import MacaronDesktop from "../app/assets/image-macaron-desktop.jpg";
import MacaronTablet from "../app/assets/image-macaron-tablet.jpg";
import MacaronMobile from "../app/assets/image-macaron-mobile.jpg";
import MacaronThumbnail from "../app/assets/image-macaron-thumbnail.jpg";
import TiramisuDesktop from "../app/assets/image-tiramisu-desktop.jpg";
import TiramisuTablet from "../app/assets/image-tiramisu-tablet.jpg";
import TiramisuMobile from "../app/assets/image-tiramisu-mobile.jpg";
import TiramisuThumbnail from "../app/assets/image-tiramisu-thumbnail.jpg";
import BaklavaDesktop from "../app/assets/image-baklava-desktop.jpg";
import BaklavaTablet from "../app/assets/image-baklava-tablet.jpg";
import BaklavaMobile from "../app/assets/image-baklava-mobile.jpg";
import BaklavaThumbnail from "../app/assets/image-baklava-thumbnail.jpg";
import MeringueDesktop from "../app/assets/image-meringue-desktop.jpg";
import MeringueTablet from "../app/assets/image-meringue-tablet.jpg";
import MeringueMobile from "../app/assets/image-meringue-mobile.jpg";
import MeringueThumbnail from "../app/assets/image-meringue-thumbnail.jpg";
import CakeDesktop from "../app/assets/image-cake-desktop.jpg";
import CakeTablet from "../app/assets/image-cake-tablet.jpg";
import CakeMobile from "../app/assets/image-cake-mobile.jpg";
import CakeThumbnail from "../app/assets/image-cake-thumbnail.jpg";
import BrownieDesktop from "../app/assets/image-brownie-desktop.jpg";
import BrownieTablet from "../app/assets/image-brownie-tablet.jpg";
import BrownieMobile from "../app/assets/image-brownie-mobile.jpg";
import BrownieThumbnail from "../app/assets/image-brownie-thumbnail.jpg";
import PannaCottaDesktop from "../app/assets/image-panna-cotta-desktop.jpg";
import PannaCottaTablet from "../app/assets/image-panna-cotta-tablet.jpg";
import PannaCottaMobile from "../app/assets/image-panna-cotta-mobile.jpg";
import PannaCottaThumbail from "../app/assets/image-panna-cotta-thumbnail.jpg";
import EmptyCart from "../app/assets/illustration-empty-cart.svg";
import CarbonIcon from "../app/assets/icon-carbon-neutral.svg";
// Redux
import { useSelector } from "react-redux";
import CartItem from "./components/CartItem";

export default function Home() {
  const productList = [
    {
      title: "Waffle with Berries",
      subtitle: "Waffle",
      price: 6.5,
      desktopImage: WaffleDesktop,
      tabletImage: WaffleTablet,
      mobileImage: WaffleMobile,
      thumbnail: WaffleThumbnail,
    },
    {
      title: "Vanilla Bean Creme Brulee",
      subtitle: "Creme Brulee",
      price: 7.0,
      desktopImage: CremeDesktop,
      tabletImage: CremeTablet,
      mobileImage: CremeMobile,
      thumbnail: CremeThumbnail,
    },
    {
      title: "Macaron Mix of Fire",
      subtitle: "Macaron",
      price: 8.0,
      desktopImage: MacaronDesktop,
      tabletImage: MacaronTablet,
      mobileImage: MacaronMobile,
      thumbnail: MacaronThumbnail,
    },
    {
      title: "Classic Tiramisu",
      subtitle: "Tiramisu",
      price: 5.5,
      desktopImage: TiramisuDesktop,
      tabletImage: TiramisuTablet,
      mobileImage: TiramisuMobile,
      thumbnail: TiramisuThumbnail,
    },
    {
      title: "Pistachio Bakalava",
      subtitle: "Bakalava",
      price: 4.0,
      desktopImage: BaklavaDesktop,
      tabletImage: BaklavaTablet,
      mobileImage: BaklavaMobile,
      thumbnail: BaklavaThumbnail,
    },
    {
      title: "Lemon Meringue Pie",
      subtitle: "Pie",
      price: 5.0,
      desktopImage: MeringueDesktop,
      tabletImage: MeringueTablet,
      mobileImage: MeringueMobile,
      thumbnail: MeringueThumbnail,
    },
    {
      title: "Waffle with Berries",
      subtitle: "Cake",
      price: 4.5,
      desktopImage: CakeDesktop,
      tabletImage: CakeTablet,
      mobileImage: CakeMobile,
      thumbnail: CakeThumbnail,
    },
    {
      title: "Salted Caramel Brownie",
      subtitle: "Browniee",
      price: 5.5,
      desktopImage: BrownieDesktop,
      tabletImage: BrownieTablet,
      mobileImage: BrownieMobile,
      thumbnail: BrownieThumbnail,
    },
    {
      title: "Vanilla Panna Cotta",
      subtitle: "Panna Cotta",
      price: 6.5,
      desktopImage: PannaCottaDesktop,
      tabletImage: PannaCottaTablet,
      mobileImage: PannaCottaMobile,
      thumbnail: PannaCottaThumbail,
    },
  ];
  const cartItem = useSelector((state) => state.counter.items);

  const totalQuantity = cartItem.reduce((sum, item) => sum + item.quantity, 0);

  const total = () =>
    cartItem.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="py-14">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="flex flex-col lg:flex-row">
          <div className="px-4 sm:px-12 2xl:px-0 lg:w-[65%] tablet:w-[60%] mb-6">
            <div className="text-4xl font-semibold text-Rose-900 mb-4">
              Desserts
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between flex-wrap">
              {productList.map((product, id) => (
                <ProductCard product={product} key={id} id={id} />
              ))}
            </div>
          </div>
          <div className="px-4 sm:px-10 w-full lg:w-[35%]">
            <div className="bg-white p-5 rounded-xl">
              {cartItem.length === 0 && (
                <>
                  <div className="text-Red font-bold text-lg mb-8">
                    Your Cart (0)
                  </div>
                  <figure className="flex flex-col items-center gap-2">
                    <Image src={EmptyCart} alt="" />
                    <div className="text-Rose-400 font-semibold">
                      Your added items will appear here
                    </div>
                  </figure>
                </>
              )}
              {cartItem.length > 0 && (
                <>
                  <div className="text-Red font-bold text-xl ">
                    Your Cart {totalQuantity}
                  </div>
                  {cartItem.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      itemTotal={item.price * item.quantity}
                    />
                  ))}

                  <div className="flex justify-between my-5">
                    <div>Order Total</div>
                    <div className="text-Rose-900 font-bold text-xl">
                      ${total().toFixed(2)}
                    </div>
                  </div>

                  <div className="flex justify-center bg-Rose-50 py-4 rounded-md mb-5">
                    <div className="flex gap-2">
                      <Image src={CarbonIcon} alt="" />
                      <div className="text-Rose-500">
                        This is a{" "}
                        <span className="font-semibold text-Rose-900">
                          carbon-neurtal
                        </span>{" "}
                        delivery
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex justify-center w-full bg-Red py-4 text-sm text-white rounded-3xl hover:bg-amber-900 cursor-pointer"
                  >
                    Confirm Order
                  </button>
                  {isModalOpen && (
                    <OrderModal
                      cartItem={cartItem}
                      setIsModalOpen={setIsModalOpen}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
