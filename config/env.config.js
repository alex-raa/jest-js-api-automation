import { cleanEnv, str, url, port } from "envalid";

if (process.env.DOMAIN) {
    process.env.DOMAIN_API_URL = `https://${process.env.DOMAIN}`;
}

export const CONFIG = cleanEnv(process.env, {
    API_URL: url({
      default: process.env.DOMAIN_API_URL || `https://cci-gwp-adonis-api.herokuapp.com`,
      desc: "API URL to be used"
    }),
    S_KEY: str({
      default: process.env.SECRET_KEY,
      desc: "secret key from github"
    }),
    NEW_KEY: str({
      default: process.env.NEW_KEY,
      desc: "secret key"
    })
});