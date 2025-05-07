import Pizzas from "@/components/pizzas";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex justify-center m-[15px]">
          <div className="flex justify-between border-1 border-[#e0e0e0] px-[15px] py-[12px] font-medium rounded-[12px] gap-[20px] items-center text-[15px] cursor-pointer ">
            <div>
              <h4 className="font-bold">Pork free</h4>
              <p className="text-[#73798c]">We cook with chicken and beef</p>
            </div>
            <div>
              <img
                src="https://cdn.dodostatic.net/pizza-site/dist/assets/c4ac8b3c16ab46413668..svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <Pizzas/>
      </div>
    </>
  );
}
