import { resolve } from "path";
import { config } from "dotenv";

config({ path: resolve(__dirname, "../../.env") });

interface Constants {
  [label: string]: string;
}

const techLabels: Constants = {
  JAVASCRIPT: "javascript",
  NODEJS: "nodejs",
  TYPESCRIPT: "typescript",
  REACT_NATIVE: "react-native",
  REACT: "react",
  AWS: "aws"
};

const socialLinks: Constants = {
  GITHUB: "https://github.com/jonjoe",
  TWITTER: "https://twitter.com/_jonjoe",
  LINKEDIN: "https://linkedin.com/in/jonjoe",
  DRIBBBLE: "https://dribbble.com/jonjoe",
  EMAIL: "me@jonjoe.io"
};

const breakpoints: Constants = {
  SMALL: "575px",
  MEDIUM: "768px",
  LARGE: "1100px",
  XL_LARGE: "1200px",
};

const routes: Constants = {
  HOME: "/",
  PROJECTS: "/projects",
  CV: "/cv",
  WORK_HISTORY: "/work-history"
};

export default {
  routes,
  techLabels,
  breakpoints,
  socialLinks
};
