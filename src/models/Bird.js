import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BirdSchema = new Schema({
    isSold: {
        type: Boolean,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    eyeColor: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    }
})

const Bird = mongoose.model("Bird", BirdSchema);
export default Bird;

