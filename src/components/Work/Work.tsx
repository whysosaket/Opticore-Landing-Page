import Card from "./Card";
import { data } from "./CardData";
import { BsShop, BsPeople } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiTeamIdea } from "react-icons/gi";
import WorkButton from "../shared/WorkButton";
import Background from "../../assets/bg.png"

const Work = () => {
  return (
    <>
    <div className="px-4 md:px-16 min-h-screen -mt-32 md:mt-0 max-h-screen w-full flex flex-col ">
      <div className="md:w-1/2 md:leading-none font-semibold tracking-wider">
        <h1 className="text-[1rem] text-center">WHAT WE DO</h1>
        <h1 className="text-[1.5rem] text-center md:text-[2.4rem] mt-4">
          Elevate Your Busimess With Opticores Tailored Solutions
        </h1>
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-center md:justify-between gap-8">
        <Card title={data[0].title} text={data[0].text} Icon={BsShop} />
        <Card title={data[1].title} text={data[1].text} Icon={FaPeopleGroup} />
        <Card title={data[2].title} text={data[2].text} Icon={GiTeamIdea} />
        <Card title={data[3].title} text={data[3].text} Icon={BsPeople} />
      </div>
      <div className="m-12 md:mt-20 flex justify-center z-50">
        <WorkButton text="VIEW PROJECTS" />
      </div>
      <div className="relative bottom-[60rem] right-[20rem] scale-x-[-1] flex -z-10">
        <img src={Background} className="w-[90rem] opacity-50 blur-3xl" />
    </div>
    </div>
    </>
  );
};

export default Work;
