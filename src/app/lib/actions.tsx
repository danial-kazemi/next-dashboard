    "use server"
import { revalidatePath } from "next/cache";
import { User, Product} from "./models";
import { connectToDb } from "./utils";
import { redirect } from "next/navigation";
import { genSaltSync, hashSync } from "bcrypt-ts";

export const addUser = async (formData) => {

  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    connectToDb();
    const salt = genSaltSync(10);
    const hashedPassword = hashSync(password, salt);
    console.log(hashedPassword);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Faild to create user!");
  }
  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
};

export const updateUser = async (formData) => {


  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    connectToDb();
    const updateFields = {
      username, email, password, phone, address, isAdmin, isActive
    }
    Object.keys(updateFields).forEach(key => (updateFields[key] ==="" || undefined) && delete updateFields[key]);
    await User.findByIdAndUpdate(id, updateFields);
   
  } catch (err) {
    console.log(err);
    throw new Error("Faild to update user!");
  }
  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
};

export const addProduct = async (formData) => {
    
  const { title, description, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    connectToDb();
    const newProduct = new Product({
        title, description, price, stock, color, size
    });
    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Faild to create user!");
  }
  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
};

export const updateProduct = async (formData) => {


  const { id, title, description, price, stock, color, size } =
    Object.fromEntries(formData);
  try {
    connectToDb();
    const updateFields = {
      title, description, price, stock, color, size
    }
    Object.keys(updateFields).forEach(key => (updateFields[key] ==="" || undefined) && delete updateFields[key]);
    await Product.findByIdAndUpdate(id, updateFields);
   
  } catch (err) {
    console.log(err);
    throw new Error("Faild to update Product!");
  }
  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
};


export const deleteUser = async (formData) => {
  
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await User.findByIdAndDelete(id);  
  } catch (err) {
    console.log(err);
    throw new Error("Faild to delete user!");
  }
  revalidatePath('/dashboard/users');
  
  };

export const deleteProduct = async (formData) => {
  
const { id } = Object.fromEntries(formData);
try {
  connectToDb();
  await Product.findByIdAndDelete(id);  
} catch (err) {
  console.log(err);
  throw new Error("Faild to delete product!");
}
revalidatePath('/dashboard/products');

};