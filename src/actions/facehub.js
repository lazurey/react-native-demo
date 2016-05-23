import { createAction } from 'redux-actions'
import api from '../api/facehubList'

export const LOAD_NAMES = 'LOAD_ALL_NAMES'

export const loadNames = createAction(LOAD_NAMES, () => api.loadNames())
