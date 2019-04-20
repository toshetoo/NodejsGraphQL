import Cat from "../../../models/Cat";

export default {
    Query: {
        cat: (root, args) => {
            return new Promise((resolve, reject) => {
                Cat.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        cats: () => {
            return new Promise((resolve, reject) => {
                Cat.find({}).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        }
    },
    Mutation: {
        addCat: (root, {name, description, image}) => {
            const newCat = new Cat({name, description, image});

            return new Promise((resolve, reject) => {
                newCat.save((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        editCat: (root, {_id, name, description, image}) => {
            return new Promise((resolve, reject) => {
                Cat.findOneAndUpdate({_id}, {$set: {name, description, image}})
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    })
            })
        },
        deleteCat: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                Cat.findOneAndRemove({_id}).exec((err, res)=>{
                    err ? reject(err) : resolve(res);
                })
            });
        }
    }
}
