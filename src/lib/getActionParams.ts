import * as core from '@actions/core'
import {ActionParams} from '../types/types'
import {z} from 'zod'

export function getActionParams():ActionParams {
  const authorID = core.getInput('AUTHOR_ID')
  return {
    authorID
  }
}
