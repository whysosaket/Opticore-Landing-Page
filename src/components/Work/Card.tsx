import WorkButton from "../shared/WorkButton"
import { BsShop } from "react-icons/bs";

const Card = () => {
  return (
    <div className="bg-white/10 flex flex-col gap-3 px-4 py-8 border border-white/30 rounded-2xl">
        <div>
            <BsShop size={30} />
        </div>
        <h1 className="font-semibold tracking-widest">Consumer Markets</h1>
        <h1 className="font-thin text-[14px] text-gray-200">
        The consumer market refers to individuals or households that buy goods and services for personal consumption. Businesses target this market to meet consumer needs, influencing production, pricing, and marketing strategies across industries.
        </h1>
        <div className="flex w-full mt-4 align-middle justify-center">
            <WorkButton text="DISCOVER" />
        </div>
    </div>
  )
}

export default Card