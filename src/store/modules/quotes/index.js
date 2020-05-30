import API from '../../../API';
import types from './types';

const state = {
    quotes: [],
    quote: {},
    loading: false,
    error: ""
}

const mutations = {
    [types.SET_QUOTES](state, quotes) {
        state.quotes = quotes;
    },
    [types.SET_RANDOM_QUOTE](state, quote) {
        state.quote = quote;
    },
    [types.SET_LOADING](state, loading) {
        state.loading = loading;
    },
    [types.SET_ERROR](state, error) {
        state.error = error;
    }
}

const actions = {
    async [types.FETCH_QUOTES]({ commit }, searchTerm) {
        commit(types.SET_LOADING, true);

        const res = await API.search(searchTerm)
            .catch(err => {
                commit(types.SET_ERROR, err.response.data);
            })
        commit(types.SET_QUOTES, res);

        commit(types.SET_LOADING, false);
    },

    async [types.FETCH_RANDOM_QUOTE]({ commit }) {
        commit(types.SET_LOADING, true);

        const res = await API.getRandomQuote()
            .catch(err => {
                commit(types.SET_ERROR, err.response.data);
            })
        commit(types.SET_RANDOM_QUOTE, res);

        commit(types.SET_LOADING, false);
    }
}


const getters = {
    allQuotes: (state) => {
        return state.quotes;
    },
    randomQuote: (state) => {
        return state.quote
    },
    loading: (state) => {
        return state.loading
    },
    error: (state) => {
        return state.error
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}