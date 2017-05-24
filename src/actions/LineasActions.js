/**
 * Created by juanleyba on 5/24/17.
 */

import {LOADING_LINEAS, LINEA_CHANGED, LINEAS_FETCH_SUCCESS} from './Constants'

export const lineasChanged = (linea) => {
    return {
        type: LINEA_CHANGED,
        payload: linea
    }
};

export const lineasFetch = () => {
    return {
        type: LINEAS_FETCH_SUCCESS,
        payload: [{id: 1278, display: 10},
            {id: 1280, display: 11},
            {id: 1279, display: 12},
            {id: 1281, display: 13},
            {id: 1282, display: 14},
            {id: 1283, display: 15},
            {id: 1284, display: 16},
            {id: 1285, display: 17},
            {id: 1286, display: 18},
            {id: 1287, display: 19},
            {id: 1299, display: 20},
            {id: 1300, display: 21},
            {id: 1301, display: 22},
            {id: 1302, display: 23},
            {id: 1303, display: 24},
            {id: 1304, display: 25},
            {id: 1305, display: 26},
            {id: 1306, display: 27},
            {id: 1307, display: 28},
            {id: 1308, display: 29},
            {id: 1309, display: 30},
            {id: 1310, display: 31},
            {id: 1311, display: 32},
            {id: 1312, display: 33},
            {id: 1313, display: 34},
            {id: 1314, display: 35},
            {id: 1315, display: 36},
            {id: 1288, display: 60},
            {id: 1289, display: 61},
            {id: 1290, display: 62},
            {id: 1291, display: 63},
            {id: 1292, display: 64},
            {id: 1293, display: 65},
            {id: 1294, display: 66},
            {id: 1295, display: 67},
            {id: 1296, display: 68},
            {id: 1329, display: 70},
            {id: 1330, display: 71},
            {id: 1331, display: 72},
            {id: 1333, display: 74},
            {id: 1334, display: 75},
            {id: 1335, display: 80},
            {id: 1336, display: 81},
            {id: 1337, display: 82},
            {id: 1338, display: 83},
            {id: 1339, display: 84},
            {id: 1340, display: 85},
            {id: 1341, display: 86},
            {id: 1099, display: "A"},
            {id: 1100, display: "B"},
            {id: 1101, display: "C"},
            {id: 1297, display: "B60"},
            {id: 1298, display: "B61"},
            {id: 1342, display: "AEROBUS"},
            {id: 1343, display: "B30"},
            {id: 1344, display: "B70"}
        ]
    }
};