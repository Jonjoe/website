import { constants } from "config";

const { apiUrls, apiKeys } = constants;

async function asyncLsFolder(folderId: string) {
  const response = await fetch(
    `${apiUrls.GDRIVE}/files?q="${folderId}"+in+parents&fields=files(*)&key=${apiKeys.GDRIVE}`
  );

  return response.json();
}

export default asyncLsFolder
