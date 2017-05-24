/**
 * Created by juanleyba on 5/24/17.
 */
import {combineReducers} from 'redux';
import LineasReducer from './LineasReducer'
import ParadasReducer from './ParadasReducer'
import ResultsReducer from './ResultsReducer'

export default combineReducers({
    lineas: LineasReducer,
    paradas: ParadasReducer,
    resultados: ResultsReducer
});