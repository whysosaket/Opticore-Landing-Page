import { IoIosCall } from "react-icons/io";

const WorkButton = (props: {text: string}) => {
  return (
    <div className="flex gap-4 align-middle cursor-pointer">
        <div className="bg-white/40 hover:bg-white/30 my-auto h-12 w-32 rounded-[5rem] flex justify-center align-middle">
            <div className="bg-black/30 hover:bg-black/40 my-auto h-10 w-[7.4rem] rounded-3xl flex align-middle justify-center">
                <h1 className="text-xs font-semibold text-center my-auto">{props.text}</h1>
            </div>
        </div>
        <div className="w-10 h-10 my-auto bg-white/40 hover:bg-white/30 flex justify-center align-middle rounded-full">
            <IoIosCall className="my-auto" size={20} />
        </div>
    </div>
  )
}

export default WorkButton