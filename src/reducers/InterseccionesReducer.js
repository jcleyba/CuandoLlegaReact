/**
 * Created by juanleyba on 5/24/17.
 */
import{INTERSECCION_FETCH_SUCCESS, INTERSECCION_FETCH, SELECTED_INTERSECCION_CHANGED} from '../actions/Constants'

const INITIAL_STATE = {
    interseccionesList: [],
    selectedInterseccion: {},
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INTERSECCION_FETCH:
            return {...state, loading: true};
        case INTERSECCION_FETCH_SUCCESS:
            return {...state, interseccionesList: action.payload, selectedInterseccion: action.payload[0], loading: false};
        case SELECTED_INTERSECCION_CHANGED:
            return {...state, selectedInterseccion: action.payload, loading: false};
        default:
            return {...state};
    }

}