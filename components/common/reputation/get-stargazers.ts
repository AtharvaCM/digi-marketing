import { stegaClean } from '@sanity/client/stega';
import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN!,
});

export default async function getStargazers(reputation?: Sanity.Reputation) {
  if (!reputation) return {};

  const [owner, repo] = stegaClean(reputation.repo)?.split('/') ?? [];
  const limit = Number(stegaClean(reputation.limit)) || 5;

  try {
    // get stargazers total count
    const { data: { stargazers_count: count = 0 } = {} } = await octokit.rest.repos
      .get({ owner, repo })
      .catch(() => ({ data: { stargazers_count: 0 } }));

    // get stargazers avatars
    let page = Math.ceil(count / limit);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let avatars: any[] = [];

    while (avatars.length < limit && page > 0) {
      const { data } = await octokit
        .request('GET /repos/{owner}/{repo}/stargazers', {
          owner,
          repo,
          per_page: limit,
          page,
        })
        .catch(() => ({ data: [] }));

      avatars = [...data, ...avatars];
      page--;
    }

    return {
      count,
      avatars: avatars
        .toReversed()
        .slice(0, limit)
        .map(({ avatar_url, login }) => ({
          avatar_url,
          login,
        })),
    };
  } catch (e) {
    console.error(e);
    return {};
  }
}
