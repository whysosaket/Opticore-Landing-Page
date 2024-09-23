import Card from "./Card"

const Work = () => {
  return (
    <div className="px-16 min-h-screen max-h-screen w-full flex flex-col backdrop-blur-3xl">
        <div className="w-1/2 leading-none font-semibold tracking-wider">
            <h1 className="text-[1rem]">WHAT WE DO</h1>
            <h1 className="text-[2.4rem] mt-4">
                Elevate Your Busimess With Opticores Tailored Solutions
            </h1>
        </div>
        <div className="mt-10 flex justify-between gap-8">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default Work