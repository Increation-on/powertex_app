import axios from "axios";
const { REACT_APP_DOMAIN_REMOTE } = process.env;

const domain = `https://server.powertex.by`;


export default class RequestService {

    static async getDetailedProduct() {
        const response = await axios.get(`${domain}/detailed_product`).then((response) => {
            if (response.status >= 400 && response.status < 600) {
                throw new Error('Bad response from server');
            }
            return response;
        }).catch(reject => {
            console.log(reject);
        });
        const data =  response.data;
        return data;
    };

    static async getProductApplicate() {
        const response = await axios.get(`${domain}/product_applicate`).then((response) => {
            if (response.status >= 400 && response.status < 600) {
                throw new Error('Bad response from server');
            }
            return response;
        }).catch(reject => {
            console.log(reject);
        });
        const data =  response.data;
        return data;
    };


    static async getProductSpecifications() {
        const response = await axios.get(`${domain}/product_specifications`).then((response) => {
            if (response.status >= 400 && response.status < 600) {
                throw new Error('Bad response from server');
            }
            return response;
        }).catch(reject => {
            console.log(reject);
        });
        const data =  response.data;
        return data;
    };

    static async getProducts() {
        const response = await axios.get(`${domain}/products`).then((response) => {
            if (response.status >= 400 && response.status < 600) {
                throw new Error('Bad response from server');
            }
            return response;
        }).catch(reject => {
            console.log(reject);
        });
        const data =  response.data;
        return data;
    };

    static async getNavbar() {
        const response = await axios.get(`${domain}/nav`).then((response) => {
            if (response.status >= 400 && response.status < 600) {
                throw new Error('Bad response from server');
            }
            return response;
        }).catch(reject => {
            console.log(reject);
        });
        const data =  response.data;
        return data;
    };



}
