import { create } from 'apisauce';

const api = create({
    urlPost:'http://3.82.243.220:8000'
});

api.addResponseTransform(response =>{
    if (!response.ok) throw response; 
});

export default api;  