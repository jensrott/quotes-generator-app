import axios from 'axios';
const API_URL = `https://quote-garden.herokuapp.com/api/v2`;

export default {
    search(searchTerm) {
        const url = `${API_URL}/authors/${searchTerm}?page=1&limit=100`;
        return axios.get(url) // Returns a promise
            .then(data => {
                console.log(data.data.quotes);
                return data.data.quotes;
            })
            .catch(err => {
                console.log(err.response.data);
            })

    },

    getRandomQuote() {
        const url = `${API_URL}/quotes/random`;
        return axios.get(url) // Returns a promise
            .then(data => {
                console.log(data.data.quote);
                return data.data.quote;
            })
            .catch(err => {
                console.log(err.response.data);
            })
    }
}
