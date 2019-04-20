export default `

    input BirdInput {
        _id: String!,
        name: String!,
        about: String,
        picture: String!,
        gender: String!,
        eyeColor: String!,
        age: String!,
        isSold: Boolean!
    }

    type Bird {
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
        bird(_id: String!): Bird
        birds: [Bird]
    }

    type Mutation {
        addBird(name: String!, about: String, picture: String!, gender: String!, eyeColor: String!, age: String!, isSold: Boolean!): Bird
        editBird(_id: String!, name: String, about: String, picture: String, gender: String!, eyeColor: String!, age: String!, isSold: Boolean!): Bird
        deleteBird(_id: String!): Bird
    }
`;
