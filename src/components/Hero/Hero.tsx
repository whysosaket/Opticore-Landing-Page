import Image from "../../assets/e1.png";
import Background from "../../assets/bg.png";
import Button from "../shared/Button";
import Socials from "./Socials";

const Hero = () => {
  return (
    <>
    <div className='min-h-screen max-h-screen w-full flex flex-col-reverse md:flex-row md:pt-28 px-4 md:px-20 md:backdrop-blur-3xl'>
        <div className='md:w-1/2 my-auto md:pl-12 z-50'>
            <div className="flex flex-col gap-0 leading-none z-50 -mt-20 ">
            <h1 className="font-crr text-[1.2rem] md:text-[2rem]">WE ARE</h1>
            <h1 className="font-crr text-[3rem] md:text-[6.2rem] z-50">OPTICORE</h1>
            <p className="font-thin my-4 md:pr-28 text-lg">In the dynamic landscape of business, navigating complexities and maximizing opporunities requires expertise, vision, and strategic acumen.</p>
            <Button text="SIGN UP" />
            </div>

            <div className="md:absolute hidden md:block bottom-10">
                <Socials />    
            </div>
        </div>
        <div className='md:w-1/2 pt-28 md:pt-0'>
            <img src={Image} className="w-full" />
        </div>
    </div>

    <div className="absolute hidden -right-[20rem] -top-[20rem] md:flex -z-10">
        <img src={Background} className="opacity-70 blur-3xl" />
    </div>
    <div className="relative">
    <div className="absolute -left-[80rem] bottom-0 flex -z-10">
        <img src={Background} className="opacity-70 blur-3xl" />
      </div>
      </div>
    </>
  )
}

export default Hero