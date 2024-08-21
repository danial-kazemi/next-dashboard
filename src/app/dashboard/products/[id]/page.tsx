import Image from "next/image"
function SingleProductPage() {
  return (
    <div className="product flex flex-col md:flex-row gap-3">
        <div className="info-wrapper w-full md:w-1/3 text-slate-200 h-max">
            <div className="image-wrapper w-fit bg-slate-800 p-5 rounded-lg">
                <Image className="w-full rounded-lg" src="/iphone.jpg" alt="iphone" width="0" height="0" sizes="100vw" objectFit="cover"/>
                <p className="mt-2 text-center md:text-left">Iphone 15</p>
            </div>
            
        </div>
        <div className="form-wrapper w-full md:w-2/3 text-slate-200 bg-slate-800 p-5 rounded-lg">
            <label htmlFor="title">Title</label>
            <input className="outline-none p-3 my-4 rounded-sm border-slate-600 border-solid border-2 w-full   bg-transparent" type="text" name="title" id="title" placeholder="Title..."/>
            <label htmlFor="price">Price</label>
            <input className="outline-none p-3 my-4 rounded-sm border-slate-600 border-solid border-2 w-full   bg-transparent" type="number" name="price" id="price" placeholder="Price"/>
            <label htmlFor="stock">Stock</label>
            <input className="outline-none p-3 my-4 rounded-sm border-slate-600 border-solid border-2 w-full   bg-transparent" type="number" name="stock" id="stock" placeholder="stock" />
            <label htmlFor="color">Color</label>
            <input className="outline-none p-3 my-4 rounded-sm border-slate-600 border-solid border-2 w-full   bg-transparent" type="text" name="color" id="color" placeholder="color" />
            <label htmlFor="size">Size</label>
            <input className="outline-none p-3 my-4 rounded-sm border-slate-600 border-solid border-2 w-full   bg-transparent" type="text" name="size" id="size" placeholder="size" />
            <label htmlFor="cat">Category</label>
            <select className="outline-none p-3 my-4 rounded-sm border-slate-600 border-solid border-2 w-full  bg-transparent" name="category" id="cat">
                <option className="text-slate-800" value="phone">Phone</option>
                <option className="text-slate-800" value="laptop">Laptop</option>
            </select>
            <label htmlFor="description">Description</label>
            <textarea id="description" className="outline-none p-3 my-4 rounded-sm border-slate-600 border-solid border-2 w-full   bg-transparent" rows={5}></textarea>
            
            <button className="outline-none border-none text-slate-200 w-full p-3 mt-4 bg-green-800 rounded-sm cursor-pointer" type="submit">Update</button>
            
        </div>
    </div>
  )
}

export default SingleProductPage