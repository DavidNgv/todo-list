/**
 * Created by davidngv on 11/22/16.
 */

import { createStore } from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp)