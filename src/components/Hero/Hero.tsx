import Image from "../../assets/e1.png";
import Background from "../../assets/bg.png";

const Hero = () => {
  return (
    <>
    <div className='min-h-screen max-h-screen w-full flex pt-28'>
        <div className='w-1/2'>
        asda
        </div>
        <div className='w-1/2 pr-20'>
            <img src={Image} className="w-full" />
        </div>
    </div>
    <div className="absolute -right-[20rem] -top-[20rem] flex -z-10">
            <img src={Background} className="w-[90rem opacity-70" />
    </div>
    </>
  )
}

export default Hero