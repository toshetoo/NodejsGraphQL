export default `

    input CatInput {
        _id: String!,
        name: String!,
        about: String,
        picture: String!,
        gender: String!,
        eyeColor: String!,
        age: String!,
        isSold: Boolean!
    }

    type Cat {
        _id: String!,
        name: String!,
        about: String,
        picture: String!
        gender: String!,
        eyeColor: String!,
        age: String!,
        isSold: Boolean!
    }

    type Query {
        cat(_id: String!): Cat
        cats: [Cat]
    }

    type Mutation {
        addCat(name: String!, about: String, picture: String!, gender: String!, eyeColor: String!, age: String!, isSold: Boolean!): Cat
        editCat(_id: String!, name: String, about: String, picture: String, gender: String!, eyeColor: String!, age: String!, isSold: Boolean!): Cat
        deleteCat(_id: String!): Cat
    }
`;
