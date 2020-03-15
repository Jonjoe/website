import { constants } from "config"

async function asyncGetRepos() {
  const queryUrl = `${constants.apiUrls.GITHUB}/users/jonjoe/repos`
  const response = await fetch(queryUrl)

  return response
}

export default asyncGetRepos
