import Image from "../assets/e3.png";
import Background from "../assets/bg.png";

const Strategy = () => {
  return (
    <>
    <div className="min-h-screen -mb-[200rem] w-full flex flex-col backdrop-blur-3xl">
      <div className="overflow-x-hidden overflow-y-clip w-full z-50 -mt-[20rem]"> 
        <img
          src={Image}
          className="w-full rotate-[12deg] scale-[1.13]"
        />
      </div>
    </div>
    <div className="relative top-[100rem] right-[20rem] scale-x-[-1] flex -z-10">
        <img src={Background} className="w-[90rem] opacity-50 blur-3xl" />
    </div>
    <div className="relative top-[40rem] left-[20rem] scale-x-[-1] flex -z-10">
        <img src={Background} className="w-[90rem] opacity-50 blur-3xl" />
    </div>
    </>
  );
};

export default Strategy;
