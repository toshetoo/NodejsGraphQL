import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const DogSchema = new Schema({
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

const Dog = mongoose.model("Dog", DogSchema);
export default Dog;

