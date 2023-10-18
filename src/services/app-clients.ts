import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8529fe3031274de2a950f841fb6961f5',
    }
})