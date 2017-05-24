/**
 * Created by juanleyba on 5/24/17.
 */
import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Home from './components/Home';

const RouterComponent = () => {
    return (
        <Router navigationBarStyle={styles.navBar}>
            <Scene key="home" component={Home} title="Buscar" style={{paddingTop:65}}></Scene>
        </Router>
    )
};

const styles = {
    navBar: {
        backgroundColor: 'white', // changing navbar color
    }
};

export default RouterComponent;