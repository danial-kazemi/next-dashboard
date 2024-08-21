import mongoose from "mongoose";
interface ConnectionState {
    readyState : string | number
}
type Connection = {
    isConnected : any
}
export const connectToDb = async () => {      
    const connection : Connection = {
        isConnected : [{readyState: ''}]
    }
    try {
        if (connection.isConnected[0].readyState) return;
        if(process.env.MONGO_ADDRESS) {
            const db = await mongoose.connect(process.env.MONGO_ADDRESS);
            connection.isConnected = db.connections[0].readyState;
        }
    } catch(error : any)
    {
        throw new Error(error)
    }
}

