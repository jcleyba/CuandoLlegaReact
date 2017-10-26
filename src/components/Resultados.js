/**
 * Created by juanleyba on 5/26/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Spinner } from './common';
import { Actions } from 'react-native-router-flux';
import { View, Text, Picker, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { fetchResultsByParadaAndLinea } from '../actions'

class Resultados extends Component {

  componentWillMount() {
    this.props.fetchResultsByParadaAndLinea(this.props.selectedParada, this.props.selectedLinea);
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
    if (!this.props.resultsList.length) {
      return <Spinner size="large"></Spinner>
    }
    this.props.resultsList.map(item => {
      jsx.push(
        <View key={this.props.resultsList.indexOf(item)} style={styles.singleView}>
          <Text style={{fontSize: 18}}>Linea: {item.linea[0]}</Text>
          <Text style={{fontSize: 18}}>Tiempo: {item.arribo[0]}</Text>
        </View>
      )
    });

    return jsx;
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          <Text style={styles.titleStyle}>
            Linea: {this.props.selectedLinea.display} - {this.props.selectedParada}
          </Text>
          {this.renderResults()}
        </View>
        <View style={{marginTop: 10}}>
          <Button onPress={Actions.main} disabled={!this.props.resultsList.length}>Inicio</Button>
        </View>
      </ScrollView>
    )
  }
}

const styles = {
  viewStyle: {
    marginTop: 10,
    marginBottom: 10
  },
  titleStyle: {
    fontSize: 20,
    flex: 1,
    alignSelf: 'center'
  }
}

const mapStateToProps = ({resultados, paradas, lineas}) => {
  const selectedParada = paradas.selectedParada;
  const selectedLinea = lineas.selectedLinea;
  const {resultsList, loading} = resultados;
  return {selectedLinea, selectedParada, resultsList, loading}
};

export default connect(mapStateToProps, {fetchResultsByParadaAndLinea})(Resultados)