import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SnacksData } from "@/types";
import clsx from "clsx";
import { ModalDown } from "../../../public/icons";

interface ItemDetailModalProps {
  selectedItem: SnacksData | null;
  onClose: () => void;
}

export default function SnacksDetailModal({
  selectedItem,
  onClose,
}: ItemDetailModalProps) {
  // const backendPizzaData: BackendPizza = selectedItem; // Sening original datang
  // const formattedPizza:FrontendPizza = transformPizza(backendPizzaData);
  if (!selectedItem) return null;
  const [selectedVariant, setSelectedVariant] = useState(
    selectedItem.variants.find(
      (item) => item.id === 1 && item
    )
  );

  console.log("selectedVariant", selectedVariant);

  return (
    <div
      className={`flex flex-col lg:flex-row relative lg:overflow-y-hidden ${
        !selectedItem && "none"
      }`}
    >
      <div className="fixed left-[15px] right-[15px]">
        <button
          onClick={onClose}
          className="bg-white shadow-[0px_0px_12px_rgba(0,0,0,0.12)] rounded-[50%] w-[48px] h-[48px] flex justify-center items-center"
        >
          <ModalDown />
        </button>
      </div>
      <div className="flex overflow-y-hidden items-center justify-center lg:w-[65%]">
        <div className="flex justify-center items-center mb-4 md:h-full lg:mb-0">

          <img
            src={selectedVariant?.imageUrl}
            alt=""
            className="transition-all mt-[20px]  ml-[15px] duration-300 lg:w-auto lg:h-auto"
          />
        </div>
      </div>

      <div></div>

      <div className=" md:w-[70%] md:mx-auto lg:w-[60%] lg:pb-[15px] lg:h-[90%] relative overflow-y-auto">
        <h3 className="text-xl font-semibold mb-2">{selectedItem.name}</h3>
        <p className="text-[#5c6370]">
          {selectedVariant?.size} {selectedVariant?.weight && ','} {selectedVariant?.weight} {selectedVariant?.weight && 'g'} 
        </p>
        <p className="mb-1 lg:mt-[5px]">{selectedItem.description}</p>

        {/* Variant buttons */}
        <div
          className={clsx(
            "bg-[#f3f3f7] grid gap-2 mb-4 lg:mt-[20px] flex-wrap rounded-[9999px] p-1",
            {
              "grid-cols-1": selectedItem.variants.length === 1,
              "grid-cols-2": Number(selectedItem.variants.length) === 2,
              "grid-cols-3": selectedItem.variants.length >= 3, // yoki kerakli limit
            }
          )}
        >
          {selectedItem.variants.map(
            (item) =>
                <button
                  key={item.id}
                  className={`w-full bg-transparent  rounded-[999px] border-0 cursor-pointer h-[32px] text-black ${
                      selectedVariant?.id === item.id &&
                      "bg-white rounded-[999px] shadow-lg"
                    }`}
                  onClick={() => setSelectedVariant(item)}
                >
                  {item.size}
                </button>
          )}
        </div>
          <Button className="mt-6 mb-[30px] cursor-pointer w-full lg:w-[334px] lg:h-[48px] lg:fixed lg:bottom-[20px] lg:right-[60px] lg:mb-0 bg-[#d15700] text-[16px] rounded-[9999px] hover:bg-[#c14600] text-white ">
            Add to Cart for {selectedVariant?.price} so'm
          </Button>
      </div>
    </div>
  );
}

