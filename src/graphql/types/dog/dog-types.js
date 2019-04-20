export default `

    input DogInput {
        _id: String!,
        name: String!,
        about: String,
        picture: String!,
        gender: String!,
        eyeColor: String!,
        age: String!,
        isSold: Boolean!
    }

    type Dog {
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
        dog(_id: String!): Dog
        dogs: [Dog]
    }

    type Mutation {
        addDog(name: String!, about: String, picture: String!, gender: String!, eyeColor: String!, age: String!, isSold: Boolean!): Dog
        editDog(_id: String!, name: String, about: String, picture: String, gender: String!, eyeColor: String!, age: String!, isSold: Boolean!): Dog
        deleteDog(_id: String!): Dog
    }
`;
