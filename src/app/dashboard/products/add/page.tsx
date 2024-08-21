import { addProduct } from "@/app/lib/actions";
function AddProductPage() {
  return (   
    <div className="add-product bg-slate-800 p-5 rounded-lg ">
    <form action={addProduct} className="flex flex-wrap justify-between text-slate-200">
      <input className="outline-none p-3 rounded-sm border-slate-600 border-solid border-2 w-full sm:w-5/12  bg-transparent" type="text" placeholder="Title" name="title" required/>
      <select className="outline-none p-3 rounded-sm border-slate-600 border-solid border-2 w-full sm:w-5/12  bg-transparent" name="cat" id="cat">
        <option className="text-slate-800" value="gneral">Choose a Category</option>          
        <option className="text-slate-800" value="kitchen">Kitchen</option>          
        <option className="text-slate-800" value="phone">Phone</option>
        <option className="text-slate-800" value="computer">Computer</option>
        <option className="text-slate-800" value="computer">Oder</option>
      </select>
      <input className="outline-none p-3 mt-4 rounded-sm border-slate-600 border-solid border-2  w-full sm:w-5/12 bg-transparent " type="number" name="price" placeholder="Price"/>
      <input className="outline-none p-3 mt-4 rounded-sm border-slate-600 border-solid border-2  w-full sm:w-5/12 bg-transparent" type="number" name="stock" placeholder="Stock"/>
      <input className="outline-none p-3 mt-4 rounded-sm border-slate-600 border-solid border-2  w-full sm:w-5/12 bg-transparent" type="text" name="color" placeholder="Color"/>
      <input className="outline-none p-3 mt-4 rounded-sm border-slate-600 border-solid border-2  w-full sm:w-5/12 bg-transparent" type="text" name="size" placeholder="Size"/>
      <textarea className="outline-none p-3 mt-4 rounded-sm border-slate-600 border-solid border-2 w-full bg-transparent"name="description" id="description" rows={16} placeholder="Description"></textarea>
      <button className="outline-none border-none text-white w-full p-3 mt-4 bg-green-800 rounded-sm cursor-pointer" type="submit">Submit</button>
    </form>
  </div>
  )
}

export default AddProductPage