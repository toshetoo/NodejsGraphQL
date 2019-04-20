import {mergeResolvers} from "merge-graphql-schemas";
import CatResolver from "./cat/cat-resolver";
import DogResolver from "./dog/dog-resolver";
import BirdResolver from "./birds/birds-resolver";

const resolvers = [CatResolver, DogResolver, BirdResolver];

export default mergeResolvers(resolvers);
