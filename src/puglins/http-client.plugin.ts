//const axios  = require('axios');
import axios from "axios";


export const httpClientPlugin = {

    get: async(url: string ) => {
        const {data}= await axios.get( url )
        return data 
    },

    post: async(url: string, body: any) => {},
    put: async(url:string, body:any) => {},
    delete: async(url:string) => {}







//--usando fetch
    /*get: async(url) => {
        const resp = await fetch( url )
        return await resp.json()   
    },

    post: async(url, body) => {},
    put: async(url, body) => {},
    delete: async(url) => {}*/

};

