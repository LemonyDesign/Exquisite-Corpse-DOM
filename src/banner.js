import "./app-variables.css";
import "./banner.css";

const createBanner = () => {
  const link = document.createElement("a");
  link.innerHTML = `<h1 class="branding__title">Exquisite + Corpse</h1>`;
  link.href = "/";
  link.classList = "branding__link";
  return link;
};

export default createBanner;
