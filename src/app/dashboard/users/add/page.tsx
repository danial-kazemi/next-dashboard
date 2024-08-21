import { addUser } from "@/app/lib/actions"


function AddUserPage() {  
    return (
      <div className="add-product bg-slate-800 p-5 rounded-lg ">
      <form action={addUser} className="flex flex-wrap justify-between text-slate-200">
        <input className="outline-none p-3 rounded-sm border-slate-600 border-solid border-2 w-full sm:w-5/12  bg-transparent" type="text" name="username" placeholder="Username" required/>        
        <input className="outline-none p-3  rounded-sm border-slate-600 border-solid border-2  w-full sm:w-5/12 bg-transparent " type="email" name="email" placeholder="Email" required/>
        <input className="outline-none p-3 mt-4 rounded-sm border-slate-600 border-solid border-2  w-full sm:w-5/12 bg-transparent" type="password" name="password" placeholder="Password"/>
        <input className="outline-none p-3 mt-4 rounded-sm border-slate-600 border-solid border-2  w-full sm:w-5/12 bg-transparent" type="phone" name="phone" placeholder="Phone"/>
        <select className="outline-none p-3 mt-4 rounded-sm border-slate-600 border-solid border-2 w-full sm:w-5/12  bg-transparent" name="isAdmin" id="isAdmin">
          <option className="text-slate-800" value="false">Is Admin?</option>          
          <option className="text-slate-800" value="false">No</option>          
          <option className="text-slate-800" value="true">Yes</option>          
        </select>
        <select className="outline-none p-3 mt-4 rounded-sm border-slate-600 border-solid border-2 w-full sm:w-5/12  bg-transparent" name="isActive" id="isActive">
          <option className="text-slate-800" value="false">Is Active?</option>          
          <option className="text-slate-800" value="true">Yes</option>          
          <option className="text-slate-800" value="false">No</option>          
        </select>
        <textarea className="outline-none p-3 mt-4 rounded-sm border-slate-600 border-solid border-2 w-full bg-transparent"name="address" id="Address" rows={16} placeholder="Address"></textarea>
        <button className="outline-none border-none text-slate-200 w-full p-3 mt-4 bg-green-800 rounded-sm cursor-pointer" type="submit">Submit</button>
      </form>
    </div>
    )
  }
  
  export default AddUserPage