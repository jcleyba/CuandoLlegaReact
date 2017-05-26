/**
 * Created by juanleyba on 5/24/17.
 */
import{SELECTED_CALLE_CHANGED, CALLES_FETCH_SUCCESS, CALLES_FETCH} from '../actions/Constants'

const INITIAL_STATE = {
    callesList: [],
    selectedCalle: {},
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CALLES_FETCH:
            return {...state, loading: true};
        case CALLES_FETCH_SUCCESS:
            return {...state, callesList: action.payload, selectedCalle: action.payload[0], loading: false};
        case SELECTED_CALLE_CHANGED:
            return {...state, selectedCalle: action.payload, loading: false};
        default:
            return {...state};
    }

}