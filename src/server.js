import express from "express";
import expressGraphQl from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import schema from "./graphql/";
import Dog from "./models/Dog";
import Cat from "./models/Cat";
import Bird from "./models/Bird";

const app = express();

const PORT = process.env.PORT || "3000";
const db = process.env.MONGODB_URL;

mongoose.connect(db).then(() => {
    console.log('connected to MongoDB');
    let obj = require('../src/db.json');
    const schemaMap = {
        dogs: Dog,
        cats: Cat,
        birds: Bird
    };

    Object.keys(obj).forEach(key => {
        for (let i = 0; i < obj[key].length; i++) {
            const inner = obj[key][i];
            console.log(`CREATE ${key} with name ${inner.name}`);
            schemaMap[key].create(inner);
        }
    });
}).catch(error => console.log(error));

app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressGraphQl({
        schema,
        graphiql: true
    })
);

app.listen(PORT, () => 
console.log(`Server running at ${PORT}`));
