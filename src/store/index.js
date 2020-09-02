import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
    countries: [],
    filterByName: [],
    filterByRegion: [],
    filter: '',
    action: 'initialState',
    darkMode: false 
};

const store = createStore(reducer, initialState);

export default store;