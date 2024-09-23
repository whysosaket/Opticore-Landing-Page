import Image from "../../assets/e2.png";
import Background from "../../assets/bg.png";
import Button from "../shared/Button";

export const About = () => {
  return (
    <>
      <div className='min-h-screen max-h-screen w-full flex backdrop-blur-3xl'>
      <div className='w-1/2 pt-12 pl-20'>
            <div className="relative flex flex-col right-52">
                <img src={Image} className="w-full scale-x-[-1.2] scale-y-[1.2] z-50" />
                <div className="relative bottom-[50rem] right-[20rem] w-[70rem] h-[30rem]">
                    <img src={Background} className="w-full opacity-70 blur-3xl " />
                </div>
            </div>
        </div>
        <div className='w-1/2 my-auto pl-12 min-h-screen'>
            <div className="mt-0 flex justify-end">
                <h1 className="font-ld text-[8rem]">01</h1>
            </div>
            <div className="flex flex-col gap-0 leading-none z-50 -ml-40 pr-20 ">
            <h1 className="text-[1rem]">WHO WE ARE</h1>
            <h1 className="text-[1.8rem] mt-4">
                Providing comprehensive business management consulting services tailored to the unique needs of our clients.
            </h1>
            <p className="font-thin my-4 pr-20 leading-loose">We offer comprehensive business management consulting services designed to meet the specific needs of each client. In today’s rapidly changing market, businesses face challenges that require innovative solutions. Our expertise, foresight, and strategic insight empower organizations to navigate complexities, capitalize on opportunities, and drive sustainable growth.</p>
            <Button text="READ MORE" />
            </div>
        </div>
        
    </div>
    </>
  );
};
