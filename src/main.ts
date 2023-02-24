import * as core from '@actions/core'
import { getActionParams } from "./lib/getActionParams"

async function run(): Promise<void> {
  try {
    const actionParams = getActionParams()
    console.log(actionParams)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error)
  }
}

run()
