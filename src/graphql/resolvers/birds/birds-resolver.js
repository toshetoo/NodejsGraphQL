import Bird from "../../../models/Bird";

export default {
    Query: {
        bird: (root, args) => {
            return new Promise((resolve, reject) => {
                Bird.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        birds: () => {
            return new Promise((resolve, reject) => {
                Bird.find({}).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        }
    },
    Mutation: {
        addBird: (root, {name, description, image}) => {
            const newBird = new Bird({name, description, image});

            return new Promise((resolve, reject) => {
                newBird.save((err, res) => {
                    err ? reject(err) : resolve(res);
                })
            })
        },
        editBird: (root, {_id, name, description, image}) => {
            return new Promise((resolve, reject) => {
                Bird.findOneAndUpdate({_id}, {$set: {name, description, image}})
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    })
            })
        },
        deleteBird: (root, {_id}) => {
            return new Promise((resolve, reject) => {
                Bird.findOneAndRemove({_id}).exec((err, res)=>{
                    err ? reject(err) : resolve(res);
                })
            });
        }
    }
}
