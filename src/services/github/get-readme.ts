async function asyncGetReadme(repoName: string) {
  const queryUrl = `https://raw.githubusercontent.com/Jonjoe/${repoName}/master/README.md`;

  const response = await fetch(queryUrl);

  return response.text();
}

export default asyncGetReadme;


