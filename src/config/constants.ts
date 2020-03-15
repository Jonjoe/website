import { resolve } from "path";
import { config } from "dotenv";

config({ path: resolve(__dirname, "../../.env") });

const constants = {
  apiKeys: {
    GDRIVE: process.env.REACT_APP_GDRIVE_API_KEY || "",
    GA_CODE: 'UA-160618455-1',
  },
  apiUrls: {
    GDRIVE: "https://www.googleapis.com/drive/v3",
    GITHUB: "https://api.github.com",
  },
  googleFolderIds: {
    CV_FOLDER: "1_gb8kcaINJgpNDyZlA2PsKtBBJyz5c6i"
  },
  techLabels: {
    JAVASCRIPT: "javascript",
    NODEJS: "nodejs",
    TYPESCRIPT: "typescript",
    REACT_NATIVE: "react-native",
    REACT: "react",
    AWS: "aws"
  },
  links: {
    GITHUB: "https://github.com/jonjoe",
    TWITTER: "https://twitter.com/_jonjoe",
    LINKEDIN: "https://linkedin.com/in/jonjoe",
    DRIBBBLE: "https://dribbble.com/jonjoe",
    EMAIL: "me@jonjoe.io"
  }
};

export default constants;
