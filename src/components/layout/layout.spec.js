import { shallowMount } from '@vue/test-utils';
import comp from './layout.vue';

describe(comp.name, () => {
  it('renders', () => {
    const wrapper = shallowMount(comp, {
      propsData: {},
    });
    expect(wrapper.is('.layout')).toBeTruthy();
  });
});
