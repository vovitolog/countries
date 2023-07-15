import {setCountries} from "../countries/countries-actions";
import {searchByCountry} from "../../config";

export const SET_COUNTRY = '@@details/SET_COUNTRIES'
export const SET_LOADING = '@@details/SET_LOADING'
export const SET_ERROR = '@@details/ERROR'

const setLoading = () => ({
    type: SET_LOADING,
})

const setError = (error) => ({
    type: SET_ERROR,
    payload: error
})
const setCountry = (country) => ({
    type: SET_COUNTRY,
    payload: country
})

export const loadCountyByName = (name) => (dispatch, _, {client, api}) => {
    dispatch(setLoading());

    client.get(api.searchByCountry(name))
        .then(({data}) => dispatch(setCountry(data[0])))
        .catch((err) => dispatch(setError(err.message)));
}

