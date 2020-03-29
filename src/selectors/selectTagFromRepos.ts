function filterReposByTag(repos: any[], tag: string): any[] {
  return repos.filter(repo => repo.topics.includes(tag));
}

export default filterReposByTag;
