/**
 * Created by juanleyba on 5/26/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Spinner} from './common';
import {Actions} from 'react-native-router-flux';
import {View, Text, Picker, ScrollView, TouchableWithoutFeedback} from 'react-native';
import {fetchCalles, selectedCalleChanged} from '../actions'

class Calles extends Component {
    componentWillMount() {
        this.props.fetchCalles(this.props.selectedLinea);
    }

    selectCalle(calle) {
        this.props.selectedCalleChanged(calle);
        Actions.intersecciones();
    }

    renderCalles() {
        var jsx = [];
        if (this.props.callesList.length == 0) {
            return <Spinner size="large"/>
        }
        else {
            this.props.callesList.map((item) => {
                let i = item;
                jsx.push(
                    <TouchableWithoutFeedback onPress={()=> this.selectCalle(i)} key={this.props.callesList.indexOf(i)}>
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
                {this.renderCalles()}
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

const mapStateToProps = ({lineas, calles}) => {
    const selectedLinea = lineas.selectedLinea;
    const callesList = calles.callesList;
    return {selectedLinea, callesList};
};

export default connect(mapStateToProps, {fetchCalles, selectedCalleChanged})(Calles);