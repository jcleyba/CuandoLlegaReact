/**
 * Created by juanleyba on 5/24/17.
 */
import{SELECTED_PARADA_CHANGED} from '../actions/Constants'

const INITIAL_STATE = {
    paradasList: [],
    selectedParada: ""
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECTED_PARADA_CHANGED:
            return {...state, selectedParada: action.payload};
        default:
            return {...state};
    }

}