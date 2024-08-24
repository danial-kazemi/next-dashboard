import { TiThLarge } from "react-icons/ti";
import { User, Product } from "./models";
import { connectToDb } from "./utils";

export const fetchUsers = async (query, page) => {
    const regex = new RegExp(query, "i") ;
    const ITEM_PER_PAGE = 2;
    try {        
        connectToDb();
        const count = await User.find({username:{$regex: regex}}).countDocuments();        
        const users = await User.find({username:{$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));        
        return {count, users};
    } catch (err) {
        throw new Error("Failed to fetch users!", err);        
    }
}
export const fetchUser = async (id) => {  
    
    try {        
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        throw new Error("Failed to fetch user!", err);        
    }
}

export const fetchProducts = async (query, page) => {
    const regex = new RegExp(query, "i") ;
    const ITEM_PER_PAGE = 2;  
    try {        
        connectToDb();
        const count = await Product.find({title:{$regex: regex}}).countDocuments();        
        const products = await Product.find({title:{$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));        
        return {count, products};
    } catch (err) {
        throw new Error("Failed to fetch products!", err);        
    }
} 

export const fetchProduct = async (id) => {    
    try {        
        connectToDb();
        const product = await Product.findById(id);
        return product;
    } catch (err) {
        throw new Error("Failed to fetch product!", err);        
    }
}