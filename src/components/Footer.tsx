import { FiArrowDownRight } from "react-icons/fi";
import Socials from "./Hero/Socials";
const data = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const Footer = () => {
  return (
    <div className="mt-12 md:mt-24 mb-4">
      <div className="px-4 md:px-12 flex justify-between">
        <div className="font-semibold md:text-lg">
          <FiArrowDownRight size={25} />
          <h1>About</h1>
          <h1>Opticore Solutions</h1>
        </div>
        <div className="flex align-middle">
          <h1 className="text-4xl font-semibold font-crr my-auto">
            <span className="text-p1">O</span>CORE
          </h1>
        </div>
        <div className="hidden md:flex align-middle">
          <div className="my-auto">
            <Socials />
          </div>
        </div>
      </div>
      <div className="py-12 animate-marquee2 whitespace-nowrap leading-none">
        {data.map((index) => {
          return (
            <span key={index} className="text-[5rem] md:text-[10rem] font-semibold">
              <span className="[text-shadow:_0_5px_0_rgb(0_0_0_/_40%)]">
                Where Strategies Transform{" "}
              </span>
            </span>
          );
        })}
      </div>
      <h1 className="text-center font-gowun">
        Saket Aryan 2024. All rights reserved.
      </h1>
    </div>
  );
};

export default Footer;
