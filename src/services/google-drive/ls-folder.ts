import { API_URL } from './'
import { apiKeys } from "config"

async function asyncLsFolder(folderId: string) {
  const response = await fetch(
    `${API_URL}/files?q="${folderId}"+in+parents&fields=files(*)&key=${apiKeys.GDRIVE}`
  );

  return response.json();
}

export default asyncLsFolder
