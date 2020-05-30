import { shallowMount } from '@vue/test-utils';
import { v4 as uuidv4 } from 'uuid';
import QuotesList from '@/components/QuotesList.vue';
import Quote from '@/components/Quote.vue';

/* Tests: 
  Check if rendered V
  Check if Quote component renders V
  Check if array of objects get passed as props V
*/
describe('QuotesList.vue', () => {
  const wrapper = shallowMount(QuotesList);

  it('Renders the QuotesList component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('Contains a Quote component', () => {
    const quote = wrapper.findComponent(Quote);
    expect(quote.exists())
  })

  it('Renders quotes array when passed', () => {
    const quotesArray = [
      {
        _id: uuidv4(),
        quoteAuthor: 'Test',
        quoteText: 'Test Text',
      },
      {
        _id: uuidv4(),
        quoteAuthor: 'Test',
        quoteText: 'Test Text',
      },
      {
        _id: uuidv4(),
        quoteAuthor: 'Test',
        quoteText: 'Test Text',
      }
    ];
    const wrapper = shallowMount(QuotesList, {
      propsData: {
        quotes: quotesArray
      }
    });
    expect(typeof wrapper.props().quotes).toBe('object');
  });
});
