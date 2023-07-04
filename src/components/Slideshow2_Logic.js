import Slideshow2_Data from "./Slideshow2_Data";

let groupBy = 3;

let moduloSort = [];

// sort items into threes
for(let i=0; i<Slideshow2_Data.length; i += groupBy){
    const group = Slideshow2_Data.slice(i, i + groupBy);
    moduloSort.push(group);
}

let moduloSlides = [];

for(let i=0; i<moduloSort.length; i++){
	let k = i+1;
	let nb = {};
	nb.tempId = k;
	nb.tempDesc = "~"
	moduloSlides.push(nb)
}

const Slideshow2_Logic = moduloSlides;
export default Slideshow2_Logic