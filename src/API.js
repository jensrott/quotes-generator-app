import axios from 'axios';
const apiUrl = `https://quote-garden.herokuapp.com/api/v2`;

export default {
    search(searchTerm) {
        const url = `${apiUrl}/authors/${searchTerm}?page=1&limit=100`;
        return axios.get(url) // Returns a promise
            .then(data => {
                console.log(data.data.quotes);
                return data.data.quotes;
            })
            .catch(err => {
                console.log(err);
            })

    },

    getRandomQuote() {
        const url = `${apiUrl}/quotes/random`;
        return axios.get(url) // Returns a promise
            .then(data => {
                console.log(data.data.quote);
                return data.data.quote;
            })
            .catch(err => {
                console.log(err);
            })
    }
}
