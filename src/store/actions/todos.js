import { createAction } from 'redux-actions'
import * as at from '../types'

export const addDuty = createAction(at.ADD_DUTY, content => ({
    content,
    id: `${Date.now()}`,
    status: 'uncompleted'
  }))