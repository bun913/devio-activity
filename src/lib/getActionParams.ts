import * as core from '@actions/core'
import {ActionParams} from '../types/types'
import {z} from 'zod'

export function getActionParams():ActionParams {
  const authorID = core.getInput('AUTHOR_ID')
  const token = core.getInput('GH_TOKEN')
  return {
    authorID,
    token
  }
}
