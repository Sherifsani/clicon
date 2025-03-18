import { FaX } from "react-icons/fa6";
import Link from "next/link"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


const ShoppingCart = () => {

  return (
    <div className="shopping-cart bg-white  absolute bottom-2 right-2 md:right-0 translate-y-full shadow-md rounded-md text-sm w-80 z-50">
      <h3 className="border-b p-3 text-gray-900">
        Shopping Cart <span className="text-gray-600">(03)</span>
      </h3>

      <div className="cart-items flex flex-col p-3 gap-2 border-b">
        <div className="cart-item flex px- gap-3 items-center">
          <div className="w-16 h-16 flex items-center justify-center border">
            <img src="/drone.png" alt="" className="object-cover" />
          </div>
          <div className="flex flex-col gap-1 text-[12px] max-w-[60%]">
            <div className="item-name ">
              Canon EOS 1500D DSLR Camera Body+ 18-55 mm{" "}
            </div>
            <div className="qty-price">
              <span>1 x </span>
              <span className="text-secondary-500">$1500</span>
            </div>
          </div>
          <div className="delete ml-auto w-4 h-4 flex items-center justify-center">
            <FaX className="text-gray-400" color="gray-400" />
          </div>
        </div>

        <div className="cart-item flex px- gap-3 items-center">
          <div className="w-16 h-16 flex items-center justify-center border">
            <img src="/phone4g.png" alt="" className="object-cover" />
          </div>
          <div className="flex flex-col gap-1 text-[12px] max-w-[60%]">
            <div className="item-name ">
              Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone
            </div>
            <div className="qty-price">
              <span>2 x </span>
              <span className="text-secondary-500">$765</span>
            </div>
          </div>
          <div className="delete ml-auto w-4 h-4 flex items-center justify-center">
            <FaX className="text-gray-400" color="gray-400" />
          </div>
        </div>
      </div>

      <div className="sub-total text-[12px] w-full px-3 flex justify-between">
        <span className="text-gray-600">Sub-Total: </span>
        <span>$2035.00 USD</span>
      </div>

      <div className="cta flex flex-col gap-1 p-3">
        <div className="checkout">
          <Link
            href="/shop"
            className="flex items-center justify-center gap-2 bg-primary-500 text-white px-6 py-2 rounded-sm"
          >
            <span className="text-[12px] font-semibold">CHECKOUT</span>{" "}
            <HiOutlineArrowNarrowRight />
          </Link>
        </div>
        <div className="view-cart">
          <Link
            href="/shop"
            className="flex items-center justify-center gap-2 border-[0.5px] border-primary-500 text-primary-500 bg-white px-6 py-2 rounded-sm"
          >
            <span className="text-[12px] font-semibold">VIEW CART</span>{" "}
            <HiOutlineArrowNarrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
