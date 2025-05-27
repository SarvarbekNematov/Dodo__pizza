import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BackendPizza } from "@/types";
import clsx from "clsx";
import { ModalDown, Pizza__bg_img } from "../../../public/icons";

interface ItemDetailModalProps {
  selectedItem: BackendPizza;
  onClose: () => void;
}

export default function PizzaDetailModal({
  selectedItem,
  onClose,
}: ItemDetailModalProps) {
  // const backendPizzaData: BackendPizza = selectedItem; // Sening original datang
  // const formattedPizza:FrontendPizza = transformPizza(backendPizzaData);
  if (!selectedItem) return null;
  const [selectedVariant, setSelectedVariant] = useState(
    selectedItem.variants.find(
      (item) => item.sm === 30 && item.type === "traditional" && item
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
        <div className="  flex justify-center items-center lg:mt-[10%] mb-4 md:h-full lg:mb-0">
          <div className="absolute hidden lg:block">
            <Pizza__bg_img w={selectedVariant?.sm === 30 ? null : 317} />
          </div>
          <div className="absolute hidden lg:block  ">
            <Pizza__bg_img w={selectedVariant?.sm === 35 ? null : 382} />
          </div>
          <img
            src={selectedVariant?.imageUrl}
            alt=""
            className="transition-all mt-[20px]  ml-[15px] duration-300 lg:w-auto lg:h-auto"
            style={
              window.innerWidth >= 1024
                ? {
                    width:
                      selectedVariant?.sm === 25
                        ? "263px"
                        : selectedVariant?.sm === 30
                        ? "336px"
                        : selectedVariant?.sm === 35
                        ? "408px"
                        : "200px",
                    height:
                      selectedVariant?.sm === 25
                        ? "263px"
                        : selectedVariant?.sm === 30
                        ? "336px"
                        : selectedVariant?.sm === 35
                        ? "408px"
                        : "200px",
                  }
                : undefined
            }
          />
        </div>
      </div>

      <div></div>

      <div className=" md:w-[70%] md:mx-auto lg:w-[60%] lg:pb-[15px] lg:h-[90%] relative overflow-y-auto">
        <h3 className="text-xl font-semibold mb-2">{selectedItem.name}</h3>
        <p className="text-[#5c6370]">
          {selectedVariant?.sm} cm, {selectedVariant?.type} dough ,{" "}
          {selectedVariant?.weight} g
        </p>
        <p className="mb-1">{selectedItem.description}</p>

        {/* Variant buttons */}
        <div
          className={clsx(
            "bg-[#f3f3f7] grid grid-cols-3 gap-2 mb-4 flex-wrap rounded-[9999px] p-1"
          )}
        >
          {selectedItem.variants.map(
            (item) =>
              item.type === "traditional" && (
                <button
                  key={item.id}
                  className={`w-full bg-transparent  rounded-[999px] border-0 cursor-pointer h-[32px] text-black ${
                    selectedVariant?.sm === item.sm &&
                    "bg-white rounded-[999px] shadow-lg"
                  } ${selectedItem.variants.length === 1 && "bg-transparent"}`}
                  onClick={() => setSelectedVariant(item)}
                >
                  {item.sm} cm
                </button>
              )
          )}
        </div>
        <div className="bg-[#f3f3f7] grid grid-cols-2 gap-2 mb-4 flex-wrap rounded-[9999px] p-1">
          {[...selectedItem.variants]
            .sort((a, b) => {
              if (a.type === b.type) return 0;
              return a.type === "traditional" ? -1 : 1;
            })
            .map(
              (item) =>
                item.sm === selectedVariant?.sm && (
                  <button
                    key={item.id}
                    className={`w-full bg-transparent border-0 cursor-pointer h-[32px] text-black ${
                      selectedVariant?.id === item.id &&
                      "bg-white rounded-[999px] shadow-lg"
                    } ${
                      selectedItem.variants.length === 1 && "bg-transparent"
                    }`}
                    onClick={() => setSelectedVariant(item)}
                  >
                    {item.type}
                  </button>
                )
            )}

          {(() => {
            const sameSizeVariants = selectedItem.variants.filter(
              (item) => item.sm === selectedVariant?.sm
            );
            const hasThin = sameSizeVariants.some((v) => v.type === "thin");
            const hasTraditional = sameSizeVariants.some(
              (v) => v.type === "traditional"
            );

            // Agar thin yo'q bo‘lsa — lekin boshqa variantlar bor bo‘lsa, disabled ko‘rinadi
            const showDisabledThin = !hasThin && sameSizeVariants.length > 0;
            const showDisabledTraditional =
              !hasTraditional && sameSizeVariants.length > 0;

            return (
              <>
                {showDisabledThin && (
                  <button
                    className="w-full bg-transparent border-0 cursor-not-allowed h-[32px] text-[#abadba]"
                    disabled
                  >
                    thin
                  </button>
                )}
                {showDisabledTraditional && (
                  <button
                    className="w-full bg-transparent border-0 cursor-not-allowed h-[32px] text-[#abadba]"
                    disabled
                  >
                    traditional
                  </button>
                )}
              </>
            );
          })()}
        </div>
        <h3>Add toppings</h3>
        <ul className="w-full grid grid-cols-3 gap-[8px] mt-[12px]">
          {selectedItem.toppings.map((item) =>
            item.prices.map(
              (i , index) =>
                i.sm === selectedVariant?.sm && (
                  <li key={index} className="shadow-lg rounded-[12px] p-[8px]">
                    <div>
                      <img src={item.imageUrl} alt={item.name} />
                      <p className="text-center">{item.name}</p>
                    </div>
                    <h4 className="text-[16px] text-center">{i.price} so'm</h4>
                  </li>
                )
            )
          )}
        </ul>

          <Button className="mt-6 mb-[30px] cursor-pointer w-full lg:w-[334px] lg:h-[48px] lg:fixed lg:bottom-[20px] lg:right-[60px] lg:mb-0 bg-[#d15700] text-[16px] rounded-[9999px] hover:bg-[#c14600] text-white ">
            Add to Cart for {selectedVariant?.price} so'm
          </Button>
      </div>
    </div>
  );
}
