import ShopNowButton from "./micro-components/ShopNowButton";

const MacBookBanner = () => {
  return (
    <section className="flex flex-col md:flex-row px-4  md:px-8  justify-between items-center gap-4 md:gap-0 bg-[#FFE7D6]">
      <div className="flex flex-col gap-3 items-start">
        <span className="uppercase text-white bg-secondary-500 rounded-sm text-[12px] p-2">
          save up to $200
        </span>
        <h2 className="text-gray-900 text-5xl text-semibold mb-3">
          Macbook Pro
        </h2>
        <p className="text-2xl text-gray-900">
          Apple M1 Max Chip. 32GB Unified
          <br /> Memory, 1TB SSD Storage
        </p>
        <ShopNowButton />
      </div>
      <div className="relative ">
        <div className="absolute border-4 border-white w-28 h-28 grid place-items-center rounded-full bg-[#FFCEAD] top-6 left-0">
          $1999
        </div>
        <img src="/macbookBanner.png" alt="" />
      </div>
    </section>
  );
};

export default MacBookBanner;
