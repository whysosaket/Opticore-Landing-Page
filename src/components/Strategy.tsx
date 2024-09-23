import Image from "../assets/e3.png";
import Background from "../assets/bg.png";

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,18,19,20];

const Strategy = () => {
  return (
    <>
      <div className="md:min-h-screen mt-[90rem] md:mt-0 -mb-[200rem] w-full flex flex-col">
        <div className="flex justify-center z-[100] relative">
          <div className="overflow-x-hidden absolute -top-60 md:top-40">
            <div className="py-12 animate-marquee whitespace-nowrap">
              {data.map((index) => {
                return (
                  <span key={index} className="text-[5rem] md:text-[10rem] font-semibold">
                    <span className="[text-shadow:_0_5px_0_rgb(0_0_0_/_40%)]">Where Strategies Transform{" "}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="overflow-x-hidden overflow-y-clip w-full z-50 -mt-[20rem]">
          <img
            src={Image}
            className="w-full rotate-[12deg] scale-[1.13]"
          />
        </div>
      </div>
      <div className="relative top-[170rem] md:top-[100rem] right-[20rem] scale-x-[-1] flex -z-10">
        <img src={Background} className="w-[90rem] md:opacity-50 blur-3xl" />
      </div>
      <div className="relative top-[150rem] md:top-[40rem] left-[20rem] scale-x-[-1] flex -z-10">
        <img src={Background} className="w-[90rem] md:opacity-50 blur-3xl" />
      </div>
    </>
  );
};

export default Strategy;
