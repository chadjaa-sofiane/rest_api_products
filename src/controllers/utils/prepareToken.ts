import { sign } from "jsonwebtoken";
import { config } from "dotenv";
config();
const prepareToken = (tokenData: Object) => {
  return sign(tokenData, `${process.env.SECRET_TOKEN}`, { expiresIn: "48h" });
};

export default prepareToken;
