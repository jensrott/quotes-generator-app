import { shallowMount, createLocalVue } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import Vuex from 'vuex';
import store from '@/store/index.js';


describe('Home.vue', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const wrapper = shallowMount(Home, {
        store,
        localVue
    });

    it('Renders the Home view', () => {
        expect(wrapper.exists()).toBe(true)
    })
})