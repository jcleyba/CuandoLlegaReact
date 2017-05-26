/**
 * Created by juanleyba on 5/24/17.
 */
import {combineReducers} from 'redux';
import LineasReducer from './LineasReducer'
import ParadasReducer from './ParadasReducer'
import ResultsReducer from './ResultsReducer'
import CallesReducer from './CallesReducer'
import InterseccionesReducer from './InterseccionesReducer'

export default combineReducers({
    lineas: LineasReducer,
    paradas: ParadasReducer,
    resultados: ResultsReducer,
    calles: CallesReducer,
    intersecciones: InterseccionesReducer
});