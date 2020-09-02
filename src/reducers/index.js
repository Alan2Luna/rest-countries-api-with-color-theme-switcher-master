import { LIST_COUNTRIES, FILTER_BY_REGION, FILTER_BY_NAME, DARKMODE } from '../actions';

function reducer(state, action) {
    switch (action.type) {
        case LIST_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                action: 'countries_downloaded'
            }

        case FILTER_BY_NAME:

            let countryFilterByName = state.countries.filter(country => country.name.toLowerCase().includes(action.payload.toLowerCase()));

            if (state.filter !== '') {
                return {
                    ...state,
                    filterByName: state.filterByRegion.filter(country => country.name.toLowerCase().includes(action.payload.toLowerCase())),
                    action: 'filter_by_name'
                }
            }

            return {
                ...state,
                filterByName: countryFilterByName,
                action: 'filter_by_name'
            }

        case FILTER_BY_REGION:
            if(action.payload == 'All') {
                return {
                    ...state,
                    filterByRegion: state.countries,
                    filter: '',
                    action: 'filter_by_region'
                }
            } else {
                return {
                    ...state,
                    filterByRegion: state.countries.filter(country => country.region.toLowerCase() === action.payload.toLowerCase()),
                    filter: action.payload,
                    action: 'filter_by_region'
                }
            }

        case DARKMODE:     
            return {
                ...state,
                darkMode: !state.darkMode
            }
        default: 
            return state;
    }
}

export default reducer;