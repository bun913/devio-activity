import * as core from '@actions/core'
import {ActionParams} from '../types/types'

export function getActionParams():ActionParams {
  const authorID = core.getInput('AUTHOR_ID')
  const token = core.getInput('GH_TOKEN')
  const sha = core.getInput('SHA')
  return {
    authorID,
    token,
    sha
  }
}
