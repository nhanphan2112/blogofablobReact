import { HOMEPICS } from "../shared/homepics";
import { MERCHCAROUSELS, MASKFANATICS, YAWNLOVERS } from "../shared/merchpics";
import { BLOBDADCAROUSELS, BLOBDAD } from "../shared/blobdadpics";

export const initialState = {
	homepics: HOMEPICS,
	merchcarousels: MERCHCAROUSELS,
	maskfanatics: MASKFANATICS,
	yawnlovers: YAWNLOVERS,
	blobdadcarousels: BLOBDADCAROUSELS,
	blobdad: BLOBDAD,
};

export const Reducer = (state = initialState, action) => {
	return state;
};
