import WorkButton from "./shared/WorkButton"


const Form = () => {
  return (
    <div className="px-72 min-h-screen max-h-screen w-full flex flex-col z-[200]">
        <h1 className="text-[1.2rem] font-semibold text-center">GET IN TOUCH</h1>
        <div className="leading-none">
            <h1 className="text-[3.2rem] text-center">Customer Service and</h1>
            <h1 className="text-[3.2rem] text-center">Logistics Excellence</h1>
        </div>
        <div className="flex flex-col my-12 gap-4 z-[200]">
            <input type="text" placeholder="Name" className="bg-white/10 backdrop-blur-3xl h-14 rounded-3xl px-6 focus:outline-none" />
            <input type="text" placeholder="Email" className="bg-white/10 backdrop-blur-3xl h-14 rounded-3xl px-6 focus:outline-none" />
            <input type="text" placeholder="Phone No." className="bg-white/10 backdrop-blur-3xl h-14 rounded-3xl px-6 focus:outline-none" />
            <input type="text" placeholder="Subject" className="bg-white/10 backdrop-blur-3xl h-14 rounded-3xl px-6 focus:outline-none" />
            <input type="text" placeholder="Message" className="bg-white/10 backdrop-blur-3xl h-64 rounded-3xl px-6 focus:outline-none" />
        </div>
        <div className="flex justify-center">
            <WorkButton text="SUBMIT" />
        </div>
    </div>
  )
}

export default Form