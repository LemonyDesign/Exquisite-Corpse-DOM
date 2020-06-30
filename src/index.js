import createBanner from "./banner.js";

import "./normalize.css";
import "./app-variables.css";
import "./styles.css";

const branding = document.querySelector("#branding");

branding.appendChild(createBanner());
