import GifGif from '@/GifGif.vue';
import { shallowMount } from '@vue/test-utils';

window.axios = {
    post: jest.fn().mockImplementation(() => Promise.resolve([])),
};

describe('GifGif', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(GifGif, {
            propsData: {
                dataVotes: [],
            }
        });
    });

    it('renders', () => {
        expect(wrapper.text()).toContain('How do you pronounce the word gif?');
        expect(wrapper).toMatchSnapshot();
    });

    it('shows votes loaded from props', () => {
        let reason = 'It is not jrafical interchange format';
        let name = 'Matt Stauffer';

        wrapper = shallowMount(GifGif, {
            propsData: {
                dataVotes: [{
                    picked: 'gif2',
                    reason,
                    name,
                }]
            }
        });

        expect(wrapper.text()).toContain(reason);
        expect(wrapper.text()).toContain(name);
        expect(wrapper).toMatchSnapshot();
    });

    it('updates the selected pronunciation via radio button', () => {
        wrapper.find('#gif1').trigger('click');
        expect(wrapper.vm.newVote.picked).toBe('gif1');

        wrapper.find('#gif2').trigger('click');
        expect(wrapper.vm.newVote.picked).not.toBe('gif1');
        expect(wrapper.vm.newVote.picked).toBe('gif2');
    });

    it('submits a reason for the pronunciation', async () => {
        let vote = {
            picked: 'gif2',
            reason: 'All the cool kids say it that way',
            name: 'Samantha',
        };

        expect(wrapper.vm.votes.length).toBe(0);

        wrapper.find('#gif2').trigger('click');
        expect(wrapper.vm.newVote.picked).toBe(vote.picked);

        let reason = wrapper.find('#reason');
        reason.element.value = vote.reason;
        reason.trigger('input');
        expect(wrapper.vm.newVote.reason).toBe(vote.reason);

        let name = wrapper.find('#name');
        name.element.value = vote.name;
        name.trigger('input');
        expect(wrapper.vm.newVote.name).toBe(vote.name);

        wrapper.find('#submit').trigger('click');

        expect(axios.post).toBeCalledWith('/api/votes', vote);

        await wrapper.vm.$nextTick();
        expect(wrapper.vm.votes.length).toBe(1);
        expect(wrapper.vm.newVote.picked).not.toBe('gif1');
        expect(wrapper.vm.newVote.reason).not.toBe(vote.reason);
        expect(wrapper.vm.newVote.name).not.toBe(vote.name);
        expect(wrapper).toMatchSnapshot();
    });

    it('does not let the user submit the form without all the fields', () => {
        wrapper.find('#submit').trigger('click');

        expect(wrapper.vm.votes.length).toBe(0);
    });
});
