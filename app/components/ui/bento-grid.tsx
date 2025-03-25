import { cn } from "@/lib/utils";
import { FaStar } from "react-icons/fa";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-2 grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  ratings,
  stars,
  price,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: React.ReactNode;
  ratings?: number;
  stars?: number;
  price?: number;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white flex-col space-y-4 border-300 border flex items-center justify-center",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <img src={img} alt="img" />
        <div className="flex gap-1 items-center">
          {[...Array(stars)].map(() => (
            <FaStar className="text-primary-500 text-[10px]" />
          ))}
          <span className="text-[12px] text-gray-500">({ratings})</span>
        </div>
        <div className="font-sans text-[14px] font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="text-secondary-500 text-sm">${price}</div>
      </div>
    </div>
  );
};
