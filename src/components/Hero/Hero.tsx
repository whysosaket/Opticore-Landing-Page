import Image from "../../assets/e1.png";
import Background from "../../assets/bg.png";
import Button from "../shared/Button";
import Socials from "./Socials";

const Hero = () => {
  return (
    <>
    <div className='min-h-screen max-h-screen w-full flex pt-28 px-20 backdrop-blur-3xl'>
        <div className='w-1/2 my-auto pl-12'>
            <div className="flex flex-col gap-0 leading-none z-50 -mt-20 ">
            <h1 className="font-crr text-[2rem]">WE ARE</h1>
            <h1 className="font-crr text-[6.2rem] z-50">OPTICORE</h1>
            <p className="font-thin my-4 pr-28 text-lg">In the dynamic landscape of business, navigating complexities and maximizing opporunities requires expertise, vision, and strategic acumen.</p>
            <Button text="SIGN UP" />
            </div>

            <div className="absolute bottom-10">
                <Socials />    
            </div>
        </div>
        <div className='w-1/2'>
            <img src={Image} className="w-full" />
        </div>
    </div>
    <div className="absolute -right-[20rem] -top-[20rem] flex -z-10">
        <img src={Background} className="w-[90rem] opacity-70 blur-3xl" />
    </div>
    <div className="absolute -left-[80rem] bottom-0 flex -z-10">
        <img src={Background} className="w-[90rem] opacity-70 blur-3xl" />
      </div>
    </>
  )
}

export default Hero