import {mergeTypes} from 'merge-graphql-schemas';
import Cat from './cat/cat-types';
import Dog from './dog/dog-types';
import Bird from './bird/bird-types';

const types = [Cat, Dog, Bird];

export default mergeTypes(types, {all: true});
