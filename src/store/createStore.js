import axios from 'axios'
import * as api from '../config'
import { combineReducers, configureStore, } from '@reduxjs/toolkit';
import countriesReducer from './countries';



const rootReducer = combineReducers({
	countries: countriesReducer
})


export const createStore = () => configureStore({
	reducer: rootReducer,
	devTools: true,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		thunk: {
			extraArgument: {
				client: axios,
				api,
			},
		},
	})
})