/**
 * Created by juanleyba on 5/24/17.
 */

import {parseString} from 'react-native-xml2js';
import {RESULTADOS_FETCH, RESULTADOS_FETCH_SUCCESS} from './Constants'

export const fetchResultsByParadaAndLinea = (parada, linea) => {
    return (dispatch) => {
        dispatch({type: RESULTADOS_FETCH});

        var headers = new Headers();
        headers.append('User-Agent', 'ksoap2-android/2.6.0+');
        headers.append('SOAPAction', 'http://tempuri.org/RecuperarProximosArribos');
        headers.append('Accept-Encoding', 'gzip');
        headers.append('Content-Type', 'text/xml;charset=utf-8');

        var lineaParsed = linea.id ? linea.id : linea;

        var url = "http://swandroidcuandollegasmp04.efibus.com.ar/Paradas.asmx";
        var soap =
            '<v:Envelope xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:d="http://www.w3.org/2001/XMLSchema" xmlns:c="http://schemas.xmlsoap.org/soap/encoding/" xmlns:v="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<v:Header><n0:UserDetails xmlns:n0="http://tempuri.org/"><n0:userName>UsAnCL3280.</n0:userName><n0:password>PsAnCL3280.</n0:password></n0:UserDetails></v:Header>' +
            '<v:Body><RecuperarProximosArribos xmlns="http://tempuri.org/" id="o0" c:root="1"><identificadorParada i:type="d:string">' + parada + '</identificadorParada><codigoLineaParada i:type="d:int">' + lineaParsed + '</codigoLineaParada>' +
            '<codigoAplicacion i:type="d:int">0</codigoAplicacion><codigoEntidad i:type="d:int">15</codigoEntidad><localidad i:type="d:string">CIUDAD DE CORDOBA</localidad></RecuperarProximosArribos></v:Body></v:Envelope>'

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
                    type: RESULTADOS_FETCH_SUCCESS,
                    payload: result['soap:Envelope']['soap:Body'][0].RecuperarProximosArribosResponse[0].RecuperarProximosArribosResult[0].ProximoArribo
                })
            });

        }).catch((error) => {
            console.log(error);
        })
    }

};