import {getActionParams} from './lib/getActionParams'
import {Activity} from './lib/fetchActivity'
import {updateContent} from './lib/updateContent'
import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const actionParams = getActionParams()
    const activity = new Activity(actionParams.authorID)
    const filePath = await activity.download()
    updateContent({ghToken: actionParams.token, filePath})
  } catch (error) {
    if (error instanceof Error) core.setFailed(error)
  }
}

run()
