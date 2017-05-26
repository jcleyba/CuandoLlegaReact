/**
 * Created by juanleyba on 5/26/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Spinner} from './common';
import {View, Text, Picker, ScrollView, TouchableWithoutFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {fetchParadas} from '../actions'

class Intersecciones extends Component {

    componentWillMount() {
        this.props.fetchParadas(this.props.selectedLinea, this.props.selectedCalle, this.props.selectedInterseccion);
    }

    selectParada() {
        Actions.resultados();
    }

    renderParadas() {
        var jsx = [];
        if (this.props.paradasList.length == 0) {
            return <Spinner size="large"/>
        }
        else {
            this.props.paradasList.map((item) => {
                let i = item;
                jsx.push(
                    <TouchableWithoutFeedback onPress={()=> this.selectParada(i)}
                                              key={this.props.paradasList.indexOf(i)}>
                        <View style={styles.listItem}>
                            <Text style={{fontSize:18}}>
                                {this.props.selectedInterseccion.descripcion} - {i.descripcion}</Text>
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
                {this.renderParadas()}
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

const mapStateToProps = ({lineas, calles, paradas, intersecciones}) => {
    const selectedInterseccion = intersecciones.selectedInterseccion;
    const selectedCalle = calles.selectedCalle;
    const selectedLinea = lineas.selectedLinea;
    const paradasList = paradas.paradasList;
    return {selectedInterseccion, selectedCalle, selectedLinea, paradasList}
};

export default connect(mapStateToProps, {fetchParadas})(Intersecciones)