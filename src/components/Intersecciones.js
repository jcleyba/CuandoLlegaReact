/**
 * Created by juanleyba on 5/26/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Spinner} from './common';
import {View, Text, Picker, ScrollView, TouchableWithoutFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {fetchInterseccion, selectedInterseccionChanged} from '../actions'

class Intersecciones extends Component {

    componentWillMount() {
        this.props.fetchInterseccion(this.props.selectedLinea, this.props.selectedCalle);
    }

    selectInterseccion(interseccion) {
        this.props.selectedInterseccionChanged(interseccion);
        Actions.paradas();
    }

    renderIntersecciones() {
        var jsx = [];
        if (this.props.interseccionesList.length == 0) {
            return <Spinner size="large"/>
        }
        else {
            this.props.interseccionesList.map((item) => {
                let i = item;
                jsx.push(
                    <TouchableWithoutFeedback onPress={()=> this.selectInterseccion(i)}
                                              key={this.props.interseccionesList.indexOf(i)}>
                        <View style={styles.listItem}>
                            <Text style={{fontSize:18}}>{i.descripcion}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                )
            });
        }
        return jsx;
    }

    render() {
        return (
            <ScrollView>
                {this.renderIntersecciones()}
            </ScrollView>
        )
    }
}

const styles = {
    listItem: {
        paddingLeft: 15,
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    }
};

const mapStateToProps = ({calles, intersecciones, lineas}) => {
    const selectedCalle = calles.selectedCalle;
    const selectedLinea = lineas.selectedLinea;
    const interseccionesList = intersecciones.interseccionesList;
    return {selectedCalle, interseccionesList, selectedLinea}
};

export default connect(mapStateToProps, {fetchInterseccion, selectedInterseccionChanged})(Intersecciones)