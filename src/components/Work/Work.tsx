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
    <div className="px-16 min-h-screen max-h-screen w-full flex flex-col ">
      <div className="w-1/2 leading-none font-semibold tracking-wider">
        <h1 className="text-[1rem]">WHAT WE DO</h1>
        <h1 className="text-[2.4rem] mt-4">
          Elevate Your Busimess With Opticores Tailored Solutions
        </h1>
      </div>
      <div className="mt-10 flex justify-between gap-8">
        <Card title={data[0].title} text={data[0].text} Icon={BsShop} />
        <Card title={data[1].title} text={data[1].text} Icon={FaPeopleGroup} />
        <Card title={data[2].title} text={data[2].text} Icon={GiTeamIdea} />
        <Card title={data[3].title} text={data[3].text} Icon={BsPeople} />
      </div>
      <div className="mt-20 flex justify-center">
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
