/**
 * Created by juanleyba on 5/24/17.
 */
import{SELECTED_PARADA_CHANGED, PARADAS_FETCH_SUCCESS, PARADAS_FETCH} from '../actions/Constants'

const INITIAL_STATE = {
    paradasList: [],
    selectedParada: "",
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECTED_PARADA_CHANGED:
            return {...state, selectedParada: action.payload};
        case PARADAS_FETCH_SUCCESS:
            return {
                ...state,
                paradasList: action.payload,
                selectedParada: action.payload[0].descripcion[0],
                loading: false
            };
        case PARADAS_FETCH:
            return {...state, loading: true};
        default:
            return {...state};
    }

}