import { shallowMount } from '@vue/test-utils';
import comp from './hello-world.vue';

describe(comp.name, () => {
  it('renders', () => {
    const wrapper = shallowMount(comp, {
      propsData: {},
    });
    expect(wrapper.is('.hello')).toBeTruthy();
  });

  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(comp, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
