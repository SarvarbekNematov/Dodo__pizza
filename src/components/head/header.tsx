import { DodoCoinIcon, LogoIcon } from "../../../public/icons";
import Menu__mobile from "./menu__mobile";

import "./head.css";
import Login from "./login";

const Header = () => {

  return (
    <div className="">
      <div className="flex justify-between md:px-[10px]">
        <div className="flex gap-[40px]">
          <div className="w-[150px] h-[50px] md:w-[250px]">
            <LogoIcon />
          </div>
          <div className="hidden pizza">
            <h2>Pizza delivery </h2>
            <button>Ташкент</button>
          </div>
          <div className="hidden">
            <h3>1168</h3>
            <p>Call toll free</p>
          </div>
        </div>

        <div>
          <div className="hidden">
            <DodoCoinIcon />
            <p>Dodocoins</p>
          </div>
          <div className="hidden md:block">
            <Login extraclass={true}/>
          </div>
          <div className=" flex items-center md:hidden ">
            <Menu__mobile/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;