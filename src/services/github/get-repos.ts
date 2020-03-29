import { API_URL } from "./";

async function asyncGetRepos() {
  const queryUrl = `${API_URL}/users/jonjoe/repos?per_page=100`;
  const queryOptions = {
    headers: {
      "Accept": "application/vnd.github.mercy-preview+json"
    }
  }

  const response = await fetch(queryUrl, queryOptions);

  return response.json();
}

export default asyncGetRepos;
