import * as axios from "axios";

export const apiGithub = axios.create({
  baseURL: "https://api.github.com/",
  headers: { Accept: "application/vnd.github.v3+json" },
});

const ApiGithub = {
  fetchissues: () =>
    apiGithub
      .get("/repos/facebook/create-react-app/issues")
      .then((response) => (response.data ? response.data : []))
      .catch((err) => console.log(err)),
};
export default ApiGithub;
