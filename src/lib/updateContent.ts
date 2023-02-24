import { readFileSync } from 'fs'
import * as github from '@actions/github'

export const updateContent = async (params: {ghToken: string, filePath: string}): Promise<void> => {
    const octokit = github.getOctokit(params.ghToken)
    await octokit.rest.repos.createOrUpdateFileContents({
      repo: github.context.repo.repo,
      owner: github.context.repo.owner,
      path: params.filePath,
      message: `update ${params.filePath}`,
      content: readFileSync(params.filePath, { encoding: "base64" }),
      committer: {
        name: 'github-actions[bot]',
        email: '41898282+github-actions[bot]@users.noreply.github.com'
      },
    })
  }
  