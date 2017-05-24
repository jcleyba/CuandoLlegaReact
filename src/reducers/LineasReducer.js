/**
 * Created by juanleyba on 5/24/17.
 */
import{LINEAS_FETCH_SUCCESS, LINEA_CHANGED} from '../actions/Constants'

const INITIAL_STATE = {
    lineasList: [],
    selectedLinea: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LINEAS_FETCH_SUCCESS:
            return {...state, lineasList: action.payload, selectedLinea: action.payload[0]};
        case LINEA_CHANGED:
            return {...state, selectedLinea: action.payload};
        default:
            return {...state};
    }

}