import { RiMenu4Fill } from "react-icons/ri";
const items = ["Home", "About", "Service", "Projects", "Clients"];

const Navbar = () => {
  return (
    <div className="relative">
      <div className="absolute flex z-50 justify-between px-6 align-middle w-11/12 md:w-5/6 h-16 rounded-[8rem] bg-white/10 top-4 left-1/2 transform -translate-x-1/2">
        <h1 className="my-auto font-crr text-2xl"><span className="text-p1">O</span>CORE</h1>
        <div className="my-auto hidden md:flex gap-3 font-semibold">
            {
                items.map((item, index)=>{
                    return (
                        <Item item={item} selected={item==="Home"} key={index} />
                    )
                })
            }
            <button className="bg-white/10 hover:bg-white/20 px-6 rounded-[8rem] -mr-6">Start A Project</button>
        </div>
        <div className="my-auto md:hidden">
              <RiMenu4Fill size={25} />
        </div>
      </div>
    </div>
  );
};

const Item = (props: {item: string, selected?: boolean})=>{
    return(
        <>
        <div className={`h-16 min-w-16 ${props.selected&&"border-b-4 border-b-p1"} ${!props.selected&&"hover:border-b-2 hover:border-b-p5"} flex justify-center align-middle`}>
              <h1 className="my-auto cursor-pointer">{props.item}</h1>
        </div>
        </>
    );
}

export default Navbar;
