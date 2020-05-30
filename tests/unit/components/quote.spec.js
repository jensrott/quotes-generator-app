import { shallowMount } from '@vue/test-utils';
import Quote from '@/components/Quote.vue';

describe('Quote.vue', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = shallowMount(Quote, {
            stubs: ['v-card', 'v-card-text', 'v-card-title'],
            props: {
                quoteText,
                quoteAuthor
            }
        })
    })

    it('Renders the Quote component', () => {
        expect(wrapper.exists()).toBe(true)
    })
})