import { createAction } from 'redux-actions'

import api from '../api/nameList'

export const ADD_NAME = 'ADD_NEW_NAME'
export const KILL = 'KILL_ONE'
export const LOAD_NAMES = 'LOAD_ALL_NAMES'

export const loadNames = createAction(LOAD_NAMES, () => api.loadNames())
export const addName = createAction(ADD_NAME, (name) => api.addName(name))
export const kill = createAction(KILL, (name) => api.killByName(name))
