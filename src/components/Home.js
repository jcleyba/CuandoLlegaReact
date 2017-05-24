/**
 * Created by juanleyba on 5/24/17.
 */
import React, {Component} from 'react';
import {View, Text, Picker, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Input, Spinner, Button} from './common';
import {lineasFetch, paradasChanged, lineasChanged, fetchResultsByParadaAndLinea} from '../actions'

class Home extends Component {

    componentWillMount() {
        this.props.lineasFetch();
    }

    paradaChanged(text) {
        this.props.paradasChanged(text);
    }

    selectedLineaChanged(linea) {
        this.props.lineasChanged(linea);
    }

    searchTimes() {
        this.props.fetchResultsByParadaAndLinea(this.props.selectedParada, this.props.selectedLinea);
    }

    renderPicker() {
        let lineasItems;
        if (this.props.lineas) {
            lineasItems = this.props.lineas.map((s, i) => {
                return <Picker.Item key={i} value={s.id} label={s.display.toString()}/>
            });
        }

        return (
            <Picker style={{flex:1}}
                    selectedValue={this.props.selectedLinea}
                    onValueChange={ cat => this.selectedLineaChanged(cat)}>
                {lineasItems}
            </Picker>
        );
        return <div></div>
    }

    renderResults() {
        var jsx = [];
        const styles = {
            singleView: {
                marginTop: 5,
                marginBottom: 5,
                marginLeft: 10,
                marginRight: 10,
            }
        };
        this.props.resultsList.map(item => {
            jsx.push(
                <View key={this.props.resultsList.indexOf(item)} style={styles.singleView}>
                    <Text style={{fontSize:18}}>Linea: {item.linea[0]}</Text>
                    <Text style={{fontSize:18}}>Tiempo: {item.arribo[0]}</Text>
                </View>
            )
        });

        return jsx;
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large"></Spinner>
        }
        return <Button onPress={this.searchTimes.bind(this)}>Buscar</Button>
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Text style={{flex:1,paddingTop:20,alignSelf:'center',fontSize:20}}>Lineas</Text>
                    {this.renderPicker()}
                    <View style={styles.inputBoxStyle}>
                        <Input label="Parada"
                               placeholder="C4062"
                               onChangeText={this.paradaChanged.bind(this)}
                               value={this.props.selectedParada}
                        />
                    </View>
                    {this.renderButton()}
                </View>
                <View style={{marginTop:10}}>
                    {this.renderResults()}
                </View>
            </ScrollView>
        )
    }
}

const styles = {
    inputBoxStyle: {
        borderWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        borderColor: '#eaeaea'
    }
};

const mapStateToProps = (state) => {
    const lineas = state.lineas.lineasList;
    const selectedLinea = state.lineas.selectedLinea;
    const selectedParada = state.paradas.selectedParada;
    const {resultsList, loading} = state.resultados;
    return {lineas, selectedLinea, selectedParada, resultsList, loading};
};

export default connect(mapStateToProps, {
    lineasFetch,
    paradasChanged,
    lineasChanged,
    fetchResultsByParadaAndLinea
})(Home);