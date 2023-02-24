import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const authorID = core.getInput('AUTHOR_ID')
    console.log(authorID)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error)
  }
}

run()
