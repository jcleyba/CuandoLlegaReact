/**
 * Created by juanleyba on 5/24/17.
 */
import {SELECTED_PARADA_CHANGED, PARADAS_FETCH, PARADAS_FETCH_SUCCESS} from './Constants'
import {parseString} from 'react-native-xml2js';

export const paradasChanged = (parada) => {
    return {
        type: SELECTED_PARADA_CHANGED,
        payload: parada
    }
};

export const fetchParadas = (linea, calle, interseccion) => {
    return (dispatch) => {
        dispatch({type: PARADAS_FETCH});

        var headers = new Headers();
        headers.append('User-Agent', 'ksoap2-android/2.6.0+');
        headers.append('SOAPAction', 'http://tempuri.org/RecuperarParadasPorLineaCalleEInterseccion');
        headers.append('Accept-Encoding', 'gzip');
        headers.append('Content-Type', 'text/xml;charset=utf-8');


        var url = "http://swandroidcuandollegasmp03.efibus.com.ar/Paradas.asmx";
        var soap =
            '<v:Envelope xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:d="http://www.w3.org/2001/XMLSchema" xmlns:c="http://schemas.xmlsoap.org/soap/encoding/" xmlns:v="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<v:Header><n0:UserDetails xmlns:n0="http://tempuri.org/"><n0:userName>UsAnCL3280.</n0:userName><n0:password>PsAnCL3280.</n0:password></n0:UserDetails></v:Header>' +
            '<v:Body><RecuperarParadasPorLineaCalleEInterseccion xmlns="http://tempuri.org/" id="o0" c:root="1"><codLinea i:type="d:int">' + linea.id + '</codLinea>' +
            '<codCalle i:type="d:int">' + calle.codigo + '</codCalle><codInterseccion i:type="d:int">' + interseccion.codigo + '</codInterseccion></RecuperarParadasPorLineaCalleEInterseccion></v:Body></v:Envelope>'

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
                    type: PARADAS_FETCH_SUCCESS,
                    payload: result['soap:Envelope']['soap:Body'][0].RecuperarParadasPorLineaCalleEInterseccionResponse[0].RecuperarParadasPorLineaCalleEInterseccionResult[0].Parada
                })
            });

        }).catch((error) => {
            console.log(error);
        })
    }

};