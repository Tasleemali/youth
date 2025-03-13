// import mongoose from "mongoose";
// export async function AuthDb() {
//  let isConnected = false
//  if(isConnected) return "db is already connected"

//    try {
//       let connected = await mongoose.connect(process.env.MONGO_URL)
//            console.log("db is connected")
//            if(connected.connection.readyState == 1) isConnected = true

//    } catch (error) {
//     console.log('db is not connected',error)
//    }

    
// }


// 
import mongoose from "mongoose";
export async function authDB() {
    let isConnected = false
    if(isConnected) return "db is already connected"
    try {
        let connectd = await mongoose.connect(process.env.MONGO_URL)
        console.log("db is connected")
        if(connectd.connection.readyState == 1) isConnected = true

    } catch (error) {
        console.log(error)
    }
    
}