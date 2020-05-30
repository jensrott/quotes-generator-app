import { shallowMount, createLocalVue } from '@vue/test-utils';
import RandomQuote from '@/views/RandomQuote.vue';
import Vuex from 'vuex';
import store from '@/store/index.js';

describe('RandomQuote.vue', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const wrapper = shallowMount(RandomQuote, {
        store,
        localVue
    });

    it('Renders the RandomQuote view', () => {
        expect(wrapper.exists()).toBe(true)
    })
})