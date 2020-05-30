import { shallowMount, createLocalVue } from '@vue/test-utils';
import AuthorQuotes from '@/views/AuthorQuotes.vue';
import Vuex from 'vuex';
import store from '@/store/index.js';
import VueRouter from 'vue-router';

describe('AuthorQuotes.vue', () => {
    const localVue = createLocalVue()
    const router = new VueRouter();
    localVue.use(Vuex)

    const wrapper = shallowMount(AuthorQuotes, {
        store,
        localVue,
        router
    });

    it('Renders the AuthorQuotes view', () => {
        expect(wrapper.exists()).toBe(true)
    })
})