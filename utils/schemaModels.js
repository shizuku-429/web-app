import mongoose from "mongoose"

const Schema = mongoose.Schema

const WhereAboutSchema = new Schema({
    name: String,        
    image: String,    
    where: String,
    email: String
})

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    }

})

export const WhereAboutModel = mongoose.models.Where || mongoose.model("Where", WhereAboutSchema)
export const UserModel = mongoose.models.User || mongoose.model("User", UserSchema)