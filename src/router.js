/**
 * Created by juanleyba on 5/24/17.
 */
import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Home from './components/Home';
import Lineas from './components/Lineas';
import Calles from './components/Calles';
import Intersecciones from './components/Intersecciones';
import Paradas from './components/Paradas';
import Resultados from './components/Resultados';

const RouterComponent = () => {
    return (
        <Router navigationBarStyle={styles.navBar} sceneStyle={{paddingTop:65}}>
            <Scene key="main">
                <Scene key="home" component={Home} title="Buscar" rightTitle="Líneas"
                       onRight={()=> Actions.buscarPorParadas()}
                />
            </Scene>
            <Scene key="buscarPorParadas">
                <Scene key="lineas" component={Lineas} title="Lineas" leftTitle="Inicio" onLeft={()=> Actions.pop()}/>
                <Scene key="calles" component={Calles} title="Calles" backTitle="Atrás"/>
                <Scene key="intersecciones" component={Intersecciones} title="Intersecciones" backTitle="Atrás"/>
                <Scene key="paradas" component={Paradas} title="Paradas" backTitle="Atrás"/>
                <Scene key="resultados" component={Resultados} title="Resultados" backTitle="Atrás"/>
            </Scene>
        </Router>
    )
};

const styles = {
    navBar: {
        backgroundColor: 'white'
    }
};

export default RouterComponent;