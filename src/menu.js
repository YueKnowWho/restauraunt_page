import chaliapinSteak from "./assets/food/chaliapin_steak_bowl.jpg";
import roastPork from "./assets/food/gotcha-pork-roast-5.jpg";
import appleRisotto from "./assets/food/apple_rissoto.jpg";
import transformingFurikake from "./assets/food/transforming_furikake_gohan.jpg";
import hanetsukiGyoza from "./assets/food/cheese_feathered_hanetsuki_gyoza.jpg";
import sumireKaraage from "./assets/food/sumire_karage_roll.jpg";
import primevalMeat from "./assets/food/evolving_nori_bento.jpg";
import rainbowTerrine from "./assets/food/rainbow_terrine.jpg";

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  element.className = className;
  if (text) element.textContent = text;
  return element;
}

function createImage(src, alt, className) {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.className = className;
  return image;
}

const dishes = [
  {
    name: "Chaliapin Steak Don",
    description: "Tender steak served over rice with a rich onion sauce.",
    price: "$18",
    image: chaliapinSteak,
  },
  {
    name: "Roast Pork, Just Kidding",
    description: "A creative mock-roast made with mashed potatoes, vegetables, and bacon.",
    price: "$24",
    image: roastPork,
  },
  {
    name: "Apple Risotto",
    description: "A creamy risotto featuring the sweet and savory flavor of apple.",
    price: "$12",
    image: appleRisotto,
  },
  {
    name: "Transforming Furikake Gohan",
    description: "Breakfast rice topped with scrambled eggs and broth cubes that melt into a rich sauce.",
    price: "$16",
    image: transformingFurikake,
  },
  {
    name: "Cheese-Feathered Hanetsuki Gyōza",
    description: "Chicken-wing dumplings pan-fried over a delicate, crispy cheese feather.",
    price: "$17",
    image: hanetsukiGyoza,
  },
  {
    name: "Sumire Karaage Roll",
    description: "Crispy karaage, fresh greens, and a turmeric crepe rolled into one bright bite.",
    price: "$16",
    image: sumireKaraage,
  },
  {
    name: "Time Fuse: Brazen Youngster-Style Primeval Meat",
    description: "A bold, rustic meat dish with a dramatic presentation and rich savory flavor.",
    price: "$19",
    image: primevalMeat,
  },
  {
    name: "Rainbow Terrine",
    description: "A colorful layered terrine showcasing contrasting flavors and textures in every slice.",
    price: "$21",
    image: rainbowTerrine,
  },
];

export function loadMenu() {
  const page = createElement("section", "page");
  page.append(
    createElement("p", "eyebrow", "From our kitchen"),
    createElement("h2", "", "A menu made for sharing"),
    createElement(
      "p",
      "lead",
      "Familiar ingredients, careful technique, and a few surprises from our family recipe book."
    )
  );

  const list = createElement("div", "menu-grid");
  dishes.forEach((dish) => {
    const card = createElement("article", "dish-card");
    card.append(createImage(dish.image, `${dish.name} dish`, "dish-image"));
    const heading = createElement("div", "dish-heading");
    heading.append(
      createElement("h3", "", dish.name),
      createElement("span", "price", dish.price)
    );
    card.append(heading, createElement("p", "", dish.description));
    list.append(card);
  });

  page.append(list);
  return page;
}
