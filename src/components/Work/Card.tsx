import WorkButton from "../shared/WorkButton";
import { IconType } from "react-icons";

interface CardProps {
  title: string;
  text: string;
  Icon: IconType;
}

const Card: React.FC<CardProps> = ({ title, text, Icon }) => {
  return (
    <div className="bg-white/10 flex w-[18rem] h-[24rem] flex-col gap-3 px-4 py-8 border border-white/30 rounded-2xl">
      <div>
        <Icon size={30} /> {/* Use the dynamic icon passed via props */}
      </div>
      <h1 className="font-semibold tracking-widest">{title}</h1>
      <div className="h-[10rem]">
        <h1 className="font-thin text-[14px] text-gray-200">
          {text}
        </h1>
      </div>
      <div className="flex w-full mt-4 align-middle justify-center">
        <WorkButton text="DISCOVER" />
      </div>
    </div>
  );
};

export default Card;
