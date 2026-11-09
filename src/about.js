import ownerImage from "./assets/owner/joichiro_yukihara.jpg";
import restaurantImage from "./assets/restauraunt/restauraunt_yukihara.jpg";

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

export function loadAbout() {
  const page = createElement("section", "page about-page");
  const story = createElement("div", "story-card");
  story.append(
    createImage(
      restaurantImage,
      "The welcoming dining room of a family restaurant",
      "story-image"
    )
  );
  story.append(
    createElement("p", "eyebrow", "Our story"),
    createElement("h2", "", "A neighborhood table"),
    createElement(
      "p",
      "",
      "Restaurant Yukihara began as a small family kitchen and grew one regular, one recipe, and one shared meal at a time."
    ),
    createElement(
      "p",
      "",
      "Our food is rooted in Japanese home cooking, but we are never afraid to experiment. We believe the best meals feel welcoming, generous, and a little unexpected."
    )
  );

  const details = createElement("div", "details-card");
  details.append(
    createImage(
      ownerImage,
      "Jōichirō Yukihara, chef and owner of Restaurant Yukihara",
      "owner-image"
    )
  );
  const chefInfo = createElement("div", "chef-info");
  chefInfo.append(
    createElement("p", "eyebrow", "Chef and owner"),
    createElement("h3", "", "Jōichirō Yukihara"),
  );

  const diningInfo = createElement("div", "dining-info");
  diningInfo.append(
    createElement("h3", "", "Come dine with us"),
    createElement("p", "hours", "Tuesday–Sunday · 11:30–21:00"),
    createElement("p", "", "12 Yukihara Lane · Your neighborhood"),
    createElement("p", "", "Reservations: (555) 019-1988")
  );

  details.append(chefInfo, diningInfo);

  page.append(story, details);
  return page;
}
