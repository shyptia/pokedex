import { getAllTypes } from "../api/pokemons";
import { TypesWithColors } from "../types/TypesWithColor";
import { linkToLoadPokemonsTypes } from "../utils/links";

const colors = ['lightpink', 'lightsalmon', 'lightcoral', 'peachpuff', 'lemonchiffon', 'palegoldenrod', 'lightgreen', 'palegreen',
  'lightblue', 'paleturquoise', 'lavender', 'thistle', 'mistyrose', 'linen', 'mintcream', 'aliceblue', 'lavenderblush', 'oldlace',
  'cornsilk', 'lightpink'];

export const typesWithColors: TypesWithColors[] = [];

(async function prepareType () {
  const data = await getAllTypes(linkToLoadPokemonsTypes);

  data.results.forEach((type, index) => {
    typesWithColors.push({
      name: type.name,
      color: colors[index],
    })
  });
})();
