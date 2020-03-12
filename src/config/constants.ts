import { resolve } from "path";
import { config } from "dotenv";

config({ path: resolve(__dirname, "../../.env") });

const constants = {
  apiKeys: {
    GDRIVE: process.env.REACT_APP_GDRIVE_API_KEY || ""
  },
  apiUrls: {
    GDRIVE: "https://www.googleapis.com/drive/v3"
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
  }
};

export default constants;
