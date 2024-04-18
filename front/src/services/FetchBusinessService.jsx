import axios from 'axios';
import { ENDPOINT } from "../config/constans.js";
import { getAuthTokenFromStorage } from '../utils/authUtils.js';

export async function fetchBusinessesService() {
    try {
        const response = await axios.get(ENDPOINT.businesses, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getAuthTokenFromStorage()}`
            }
        });

        const businesses = response.data.businesses.map(business => business.firstname);
        console.log ("data",businesses)
        return businesses;
    } catch (error) {
        console.error('Error fetching businesses:', error);
        throw error;
    }
}
