import { handleActions } from 'redux-actions'
import * as at from '../types'

const INIT_STATE = [
    {
      it: 'dfsdfs232',
      content: '第一个已完成任务',
      status: 'completed'
    },
    {
      it: 'dfsd232232',
      content: '第一个未完成任务',
      status: 'uncompleted'
    },
    {
      it: 'dfsdfsss232',
      content: 'read a book，remember some words and write them in paper.',
      status: 'completed'
    },
    {
      it: 'dfsdaa232232',
      content: 'listen a song.then, play football with some friends,enjoyed.',
      status: 'uncompleted'
    },
    {
      it: 'dfsdfsss232',
      content: 'read a book，remember some words and write them in paper.',
      status: 'completed'
    },
    {
      it: 'dfsd23qq2232',
      content: 'listen a song.then, play football with some friends,enjoyed.',
      status: 'uncompleted'
    },
    {
      it: 'dfsdfsww232',
      content: 'read a book，remember some words and write them in paper.',
      status: 'completed'
    },
    {
      it: 'dfsdee232232',
      content: 'listen a song.then, play football with some friends,enjoyed.',
      status: 'uncompleted'
    },
    {
      it: 'dfsdfrrs232',
      content: 'read a book，remember some words and write them in paper.',
      status: 'completed'
    },
    {
      it: 'dfsd23tt2232',
      content: 'listen a song.then, play football with some friends,enjoyed.',
      status: 'uncompleted'
    },
    {
      it: 'dfsdfyys232',
      content: 'read a book，remember some words and write them in paper.',
      status: 'completed'
    },
    {
      it: 'dfsd23552232',
      content: 'listen a song.then, play football with some friends,enjoyed.',
      status: 'uncompleted'
    },
    {
      it: 'dfsdfs44232',
      content: 'read a book，remember some words and write them in paper.',
      status: 'completed'
    },
    {
      it: 'dfsd23332232',
      content: 'listen a song.then, play football with some friends,enjoyed.',
      status: 'uncompleted'
    },
    {
      it: 'dfsdfs5544232',
      content: 'read a book，remember some words and write them in paper.',
      status: 'completed'
    },
    {
      it: 'dfsd2333332232',
      content: 'listen a song.then, play football with some friends,enjoyed.',
      status: 'uncompleted'
    },
    {
      it: 'dfsdfs4421132',
      content: 'read a book，remember some words and write them in paper.',
      status: 'completed'
    },
    {
      it: 'dfsd2333223662',
      content: 'listen a song.then, play football with some friends,enjoyed.',
      status: 'uncompleted'
    },
  ]

export default handleActions({
  [at.ADD_DUTY] (state, action) {
    const {
      payload: {
        content
      }
    } = action
    if(content) {
      return state.concat([action.payload])
    }
    return state
  }
}, INIT_STATE)