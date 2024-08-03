
import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

function Rightbar() {
  return (
    <div className="rightbar hidden lg:flex flex-col fixed gap-3 ">      
    <div className="item flex flex-col gap-3 relative p-5 rounded-lg  bg-gradient-to-t from-slate-700">
      <div className="bg-wrapper absolute right-0 bottom-0 w-1/2 h-1/2 z-10">
        <Image className=" opacity-20 bg-contain" src={'/termius.png'}  alt="termius" fill />
      </div>
      <span>🔥 Available Now</span>
      <h3>How to use the new version of the admin dashboard?</h3>
      <span>Takes 4 minutes to learn</span>
      <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi esse perferendis consectetur</p>
      <span className="readmore flex">
        <button className="w-auto text-sm bg-blue-900 hover:bg-slate-800 p-2 rounded-lg ">
          <MdPlayCircleFilled className="mr-2 inline-block" size={20}/>
          Watch
        </button>
      </span>
    </div>

    <div className="item flex flex-col gap-3 relative p-5 rounded-lg bg-gradient-to-t from-slate-700">
      <div className="bg-wrapper absolute right-0 bottom-0 w-1/2 h-1/2 z-10">
        <Image src={'/rocket.webp'} alt="rocket" fill  className="opacity-20 bg-contain"/>
      </div>
      <span>🚀 Coming Soon!</span>
      <h3>New server are available, partial pre-rendering is comming up!</h3>
      <span>Boost your productivity</span>
      <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi esse perferendis consectetur</p>
      <span className="learn">
        <button className="w-auto text-sm bg-cyan-800 hover:bg-slate-800 p-2 rounded-lg">
          <MdReadMore className="mr-2 inline-block" size={20}/>
          Learn
        </button>
      </span>
    </div>
  </div>
  )
}

export default Rightbar;