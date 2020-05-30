import { shallowMount } from '@vue/test-utils';
import AppHeader from '@/components/AppHeader.vue';

describe('AppHeader.vue', () => {
    const wrapper = shallowMount(AppHeader, {
        stubs: ['router-link', 'router-view']
    });

    it('Renders the AppHeader component', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('Renders the Vuetify logo', () => {
        const imgHtml = "img"
        expect(wrapper.find(imgHtml))
    })

    it('Renders a title', () => {
        const titleHtml = "h1"
        expect(wrapper.find(titleHtml))
    })

    it('Renders a link', () => {
        const linkHtml = "router-link"
        expect(wrapper.find(linkHtml))
    })
})