/**
 * Created by juanleyba on 5/24/17.
 */

import {parseString} from 'react-native-xml2js';
import {CALLES_FETCH, CALLES_FETCH_SUCCESS, SELECTED_CALLE_CHANGED} from './Constants';


export const selectedCalleChanged = (calle) => {
    return {
        type: SELECTED_CALLE_CHANGED,
        payload: calle
    }
};

export const fetchCalles = (linea) => {
    return (dispatch) => {
        dispatch({type: CALLES_FETCH});

        var headers = new Headers();
        headers.append('User-Agent', 'ksoap2-android/2.6.0+');
        headers.append('SOAPAction', 'http://tempuri.org/RecuperarCallesPrincipalPorLinea');
        headers.append('Accept-Encoding', 'gzip');
        headers.append('Content-Type', 'text/xml;charset=utf-8');

        var lineaParsed = linea.id ? linea.id : linea;

        var url = "http://swandroidcuandollegasmp04.efibus.com.ar/Paradas.asmx";
        var soap =
            '<v:Envelope xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:d="http://www.w3.org/2001/XMLSchema" xmlns:c="http://schemas.xmlsoap.org/soap/encoding/" xmlns:v="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<v:Header><n0:UserDetails xmlns:n0="http://tempuri.org/"><n0:userName>UsAnCL3280.</n0:userName><n0:password>PsAnCL3280.</n0:password></n0:UserDetails></v:Header>' +
            '<v:Body><RecuperarCallesPrincipalPorLinea xmlns="http://tempuri.org/" id="o0" c:root="1"><codLinea i:type="d:int">' + lineaParsed + '</codLinea></RecuperarCallesPrincipalPorLinea></v:Body></v:Envelope>'

        var obj = {
            method: 'POST',
            headers: headers,
            mode: 'cors',
            cache: 'default',
            body: soap
        };
        fetch(url, obj).then((resp) => resp.text()).then((respjson) => {
            parseString(respjson, function (err, result) {
                dispatch({
                    type: CALLES_FETCH_SUCCESS,
                    payload: result['soap:Envelope']['soap:Body'][0].RecuperarCallesPrincipalPorLineaResponse[0].RecuperarCallesPrincipalPorLineaResult[0].Simple
                })
            });

        }).catch((error) => {
            console.log(error);
        })
    }

};