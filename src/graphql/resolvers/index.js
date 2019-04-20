import {mergeResolvers} from "merge-graphql-schemas";
import CatResolver from "./cat/cat-resolver";
import DogResolver from "./dog/dog-resolver";

const resolvers = [CatResolver, DogResolver];

export default mergeResolvers(resolvers);
