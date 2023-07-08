import {setCountries, setError, setLoading} from "../countries/countries-actions";
import {searchByCountry} from "../../config";

export const SET_SEARCH = '@@controls/SET_SEARCH';

export const setSearch = (search) => ({
    type: SET_SEARCH,
    payload: search
})
