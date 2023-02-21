import mongoose from "mongoose"

const Schema = mongoose.Schema

const WhereAboutSchema = new Schema({
    name: {
        type: String, 
        required: true
    },       
    image: {
        type: String
    },    
    where: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    }
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
    }

})

export const WhereAboutModel = mongoose.models.Where || mongoose.model("Where", WhereAboutSchema)
export const UserModel = mongoose.models.User || mongoose.model("User", UserSchema)