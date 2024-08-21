import Image from "next/image"
function SingleUserPage() {
  return (
    <div className="user flex flex-col md:flex-row md:gap-3">
        <div className="info-wrapper w-full lg:w-1/2 text-slate-200 h-max">
            <div className="image-wrapper w-fit bg-slate-800 p-5 rounded-lg">
                <Image className="w-full rounded-lg" src="/avatar3d.jpg" alt="avatar" width="0" height="0" sizes="100vw" objectFit="cover"/>
                <p className="mt-2 text-center md:text-left">Danial Kazemi</p>
            </div>            
        </div>
        <div className="form-wrapper w-full lg:w-1/2 text-slate-200 bg-slate-800 p-5 rounded-lg">
            <label htmlFor="username">Username</label>
            <input className="outline-none p-3 mt-4 rounded-sm border-slate-600 border-solid border-2 w-full   bg-transparent" type="text" name="username" id="username" placeholder="Danial Kazemi"/>
            <label htmlFor="email">Email</label>
            <input className="outline-none p-3 mt-4 rounded-sm border-slate-600 border-solid border-2 w-full   bg-transparent" type="email" name="email" id="email" placeholder="web.kazemi@gmail.com"/>
            <label htmlFor="password">Password</label>
            <input className="outline-none p-3 mt-4 rounded-sm border-slate-600 border-solid border-2 w-full   bg-transparent" type="password" name="password" id="password" placeholder="Password" />
            <label htmlFor="phone">Phone</label>
            <input className="outline-none p-3 mt-4 rounded-sm border-slate-600 border-solid border-2 w-full   bg-transparent" type="text" name="phone" id="phone" placeholder="+491760000" />
            <label htmlFor="address">Address</label>
            <textarea className="outline-none p-3 mt-4 rounded-sm border-slate-600 border-solid border-2 w-full   bg-transparent" name="address" id="address" placeholder="München ..." />
            <label htmlFor="isAdmin">Is Admin</label>
            <select className="outline-none p-3 mt-4 rounded-sm border-slate-600 border-solid border-2 w-full   bg-transparent" name="isAdmin" id="isAdmin">
                <option className="text-slate-800" value="false">Yes</option>
                <option className="text-slate-800" value="true">No</option>
            </select>
            <label htmlFor="isActive">Is Active</label>
            <select className="outline-none p-3 mt-4 rounded-sm border-slate-600 border-solid border-2 w-full   bg-transparent" name="isActive" id="isActive">
                <option className="text-slate-800" value="false">Yes</option>
                <option className="text-slate-800" value="true">No</option>
            </select>
            <button className="outline-none border-none text-slate-200 w-full p-3 mt-4 bg-green-800 rounded-sm cursor-pointer" type="submit">Update</button>            
        </div>
    </div>
  )
}

export default SingleUserPage;