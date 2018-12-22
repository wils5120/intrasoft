import {create} from 'apisauce';

const getApi = create({
    url: 'http://3.82.243.220:8000/api/filtrar/usuarios?nombre=jhon'
});



export default getApi;
