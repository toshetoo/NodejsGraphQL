import {mergeTypes} from 'merge-graphql-schemas';
import Cat from './cat/cat-types';
import Dog from './dog/dog-types';

const types = [Cat, Dog];

export default mergeTypes(types, {all: true});
