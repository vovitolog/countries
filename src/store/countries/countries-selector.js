export const selectCountriesInfo = (state) => ({
    status: state.countries.status,
    error: state.countries.error,
    quantity: state.countries.list.lenght,
})

export const selectAllCountries = (state) => state.countries.list;
