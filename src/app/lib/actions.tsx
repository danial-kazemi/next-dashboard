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

export const addProduct = async (formData) => {
    "use server"
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