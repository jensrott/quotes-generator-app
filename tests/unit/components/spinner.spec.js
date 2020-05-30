import { shallowMount } from '@vue/test-utils';
import Spinner from '@/components/Spinner.vue';

describe('Spinner.vue', () => {
    const wrapper = shallowMount(Spinner);

    it('Renders the Spinner component', () => {
        expect(wrapper.exists()).toBe(true)
    })
})