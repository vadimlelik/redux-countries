
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from '../config'



export const loadCountries = createAsyncThunk("countries/load-all", (_, { extra: { client, api }, }) => {
	return client.get(api.BASE_URL)
})

const initialState = {
	entities: [{ name: 'Беларусь', id: 1 }, { name: 'Беларусь2', id: 2 }]
}

const countriesSlice = createSlice({
	name: 'countries',
	initialState,
	reducers: {
		// countriesRecivied: (state, action) => {
		// 	state.entities = action.payload
		// },
		countriesDelete: (state, action) => {
			state.entities = state.entities.filter((count) => count.name !== action.payload)
		},
	},
	extraReducers: {
		[loadCountries.fulfilled]: (state, action) => {
			console.log(action.payload);
			state.entities = action.payload.data
		}
	}
})

const { reducer: countriesReducer, actions } = countriesSlice

// const { countriesRecivied } = actions

// export const loadCountries = () => async (dispatch, getState) => {
// 	try {
// 		const { data } = await axios.get(api.BASE_URL)
// 		dispatch(countriesRecivied(data))

// 	} catch (error) {

// 	}

// }
export const countriesDelete = actions.countriesDelete


export const getCountries = () => (state) => state.countries.entities


export default countriesReducer