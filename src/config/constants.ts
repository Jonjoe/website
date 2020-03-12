import dotenv from "dotenv"
dotenv.config()

const constants = {
  apiKeys: {
    GDRIVE: process.env.GDRIVE_API_KEY || '',
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
