/**
 * Created by juanleyba on 5/24/17.
 */
import {SELECTED_PARADA_CHANGED} from './Constants'

export const paradasChanged = (parada) => {
    return {
        type: SELECTED_PARADA_CHANGED,
        payload: parada
    }
};