/**
 * Created by juanleyba on 5/26/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Spinner} from './common';
import {Actions} from 'react-native-router-flux'
import {View, Text, Picker, ScrollView, TouchableWithoutFeedback, Image} from 'react-native';
import {lineasFetch, lineasChanged} from '../actions'

class Lineas extends Component {

    componentWillMount() {
        this.props.lineasFetch();
    }

    selectLinea(linea) {
        this.props.lineasChanged(linea);
        Actions.calles();
    }

    renderLineas() {
        var jsx = [];
        if (this.props.lineasList.length == 0) {
            return <Spinner size="large"/>
        }
        else {
            this.props.lineasList.map((item) => {
                let i = item;
                jsx.push(
                    <TouchableWithoutFeedback onPress={()=> this.selectLinea(i)} key={this.props.lineasList.indexOf(i)}>
                        <View style={styles.listItem}>
                            <Text style={{fontSize:18}}>{i.display}</Text>
                            <Image style={{width:30, height:30, opacity:0.3}}
                                   source={require('../assets/ic_keyboard_arrow_right_3x.png')}/>

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
                {this.renderLineas()}
            </ScrollView>
        )
    }
}

const styles = {
    listItem: {
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
};

const mapStateToProps = ({lineas}) => {
    const lineasList = lineas.lineasList;

    return {lineasList}
};
export default connect(mapStateToProps, {lineasFetch, lineasChanged})(Lineas)