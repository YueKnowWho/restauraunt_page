import restaurantImage from "./assets/restauraunt/restauraunt_yukihara.jpg";
import recommendationImage from "./assets/food/gotcha-pork-roast-5.jpg";

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

export function loadHome() {
  const page = createElement("section", "page home-page");
  page.style.setProperty("--hero-image", `url(${restaurantImage})`);

  const welcome = createElement("div", "hero-copy");
  welcome.append(
    createElement("p", "eyebrow", "A tiny family restaurant with a big appetite"),
    createElement("h2", "", "Every dish has a story."),
    createElement(
      "p",
      "lead",
      "Welcome to Restaurant Yukihara, where classic Japanese comfort food meets a little creative spark."
    ),
    createElement(
      "p",
      "",
      "Pull up a chair, take your time, and let our family cook you something worth remembering."
    )
  );

  const feature = createElement("div", "feature-card");
  feature.append(
    createImage(recommendationImage, "Yukihara's Gotcha Pork Roast", "feature-image")
  );
  feature.append(
    createElement("p", "eyebrow", "Tonight's recommendation"),
    createElement("h3", "", "Yukihara's Gotcha Pork Roast"),
    createElement(
      "p",
      "",
      "Tender pork, bright vegetables, and a savory apple-onion sauce served with rice."
    ),
    createElement("button", "text-button", "See the full menu")
  );
  feature.querySelector("button").addEventListener("click", () => {
    document.querySelector('[data-tab="menu"]').click();
  });

  page.append(welcome, feature);
  return page;
}
