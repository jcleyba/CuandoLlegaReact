/**
 * Created by juanleyba on 5/24/17.
 */
import{RESULTADOS_FETCH, RESULTADOS_FETCH_SUCCESS} from '../actions/Constants'

const INITIAL_STATE = {
    loading: false,
    resultsList: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RESULTADOS_FETCH:
            return {...state, loading: true}
        case RESULTADOS_FETCH_SUCCESS:
            return {...state, resultsList: action.payload, loading: false};
        default:
            return {...state};
    }

}