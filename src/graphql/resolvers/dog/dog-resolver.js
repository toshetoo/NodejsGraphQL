import Dog from "../../../models/Dog";

export default {
    Query: {
        dog: (root, args) => {
            return new Promise((resolve, reject) => {
                Dog.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        dogs: () => {
            return new Promise((resolve, reject) => {
                Dog.find({}).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        }
    },
    Mutation: {
        addDog: (root, {name, description, image}) => {
            const newDog = new Dog({name, description, image});

            return new Promise((resolve, reject) => {
                newDog.save((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        editDog: (root, {_id, name, description, image}) => {
            return new Promise((resolve, reject) => {
                Dog.findOneAndUpdate({_id}, {$set: {name, description, image}})
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    })
            })
        },
        deleteDog: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                Dog.findOneAndRemove({_id}).exec((err, res)=>{
                    err ? reject(err) : resolve(res);
                })
            });
        }
    }
}
