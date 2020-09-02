//ACCIONES
export const LIST_COUNTRIES = "LIST_COUNTRIES";
export const FILTER_BY_REGION = "FILTER_COUNTRIES";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER = "FILTER";
export const DARKMODE = "CHANGE_DARK_MODE";

//CREADORES DE ACCIONES

export const listCountries = payload => ({
    type: LIST_COUNTRIES,
    payload
});

export const filterCountries = payload => ({
    type: FILTER_BY_REGION,
    payload
})

export const countrySearch = payload => ({
    type: FILTER_BY_NAME,
    payload
})

export const changeDarkMode = payload => ({
    type: DARKMODE,
    payload
})