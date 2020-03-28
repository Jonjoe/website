import { resolve } from "path";
import { config } from "dotenv";

config({ path: resolve(__dirname, "../../.env") });

const keys = {
  GDRIVE: process.env.REACT_APP_GDRIVE_API_KEY || "",
  GOOGLE_FOLDER_ID: '1_gb8kcaINJgpNDyZlA2PsKtBBJyz5c6i',
  GA_CODE: "UA-160618455-1"
};

export default keys;
