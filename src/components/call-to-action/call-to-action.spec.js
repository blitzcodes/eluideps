import { shallowMount } from '@vue/test-utils';
import comp from './call-to-action.vue';

describe(comp.name, () => {
  it('renders', () => {
    const wrapper = shallowMount(comp, {
      propsData: {},
    });
    expect(wrapper.is('.call-to-action')).toBeTruthy();
  });

  it('renders props.title when passed', () => {
    const title = 'new message';
    const wrapper = shallowMount(comp, {
      propsData: { title },
    });
    expect(wrapper.querySelector('.call-to-action__title').textContent).toMatch(title);
  });
});
