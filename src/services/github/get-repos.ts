import { API_URL } from "./";

async function asyncGetRepos() {
  const queryUrl = `${API_URL}/users/jonjoe/repos`;
  const response = await fetch(queryUrl);

  return response;
}

export default asyncGetRepos;
