import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Deserts__data } from "@/types";

interface ItemDetailModalProps {
  selectedItem: Deserts__data | null;
}

export default function ItemDetailModal({ selectedItem } : ItemDetailModalProps) {
  if(!selectedItem) return null
  const [selectedVariant, setSelectedVariant] = useState(
    selectedItem.variants[0]
  );

  return (
    <div className={cn("flex flex-col")}>
      {/* Image */}
      <div className="w-full flex justify-center mb-4">
        <img
          src={selectedVariant.url}
          alt={selectedItem.name}
          className="w-full h-auto rounded-md max-h-[300px] object-contain"
        />
      </div>

      <h3 className="text-xl font-semibold mb-2">{selectedItem.name}</h3>

      <p className="mb-1">
        {selectedVariant.size} , {selectedVariant.weight !== null && selectedVariant.weight !== undefined
          ? ` ${selectedVariant.weight} g`
          : null}
      </p>
      <p className="mb-3">
        {selectedItem.description}
        {selectedItem.dis_available_toppings?.length > 0 && (
          <span>
            ,
            {selectedItem.dis_available_toppings
              .map((i : any) => i.name)
              .join(", ")}
          </span>
        )}
      </p>

      {/* Variant buttons */}
      <div className="grid grid-cols-2 gap-2 mb-4 flex-wrap">
        {selectedItem.variants.map((variant : any, index : any) => (
          <Button
            key={index}
            className="w-full"
            variant={
              selectedVariant.size === variant.size ? "default" : "outline"
            }
            onClick={() => setSelectedVariant(variant)}
          >
            {variant.size}
          </Button>
        ))}
      </div>

      {/* Add to cart button */}
      <Button className="mt-6 w-full bg-[#d15700] hover:bg-[#c14600] text-white">
        Add to Cart for {selectedVariant.price} UZS
      </Button>
    </div>
  );
}
