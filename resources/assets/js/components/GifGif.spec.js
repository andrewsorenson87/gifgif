import GifGif from '@/GifGif.vue';
import { shallowMount } from '@vue/test-utils';

describe('GifGif', () => {
    it('renders', () => {
        let wrapper = shallowMount(GifGif);

        expect(wrapper.text()).toContain('How do you pronounce the word gif?');
        expect(wrapper).toMatchSnapshot();
    });
});
