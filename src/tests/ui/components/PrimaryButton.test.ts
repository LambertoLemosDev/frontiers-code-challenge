import { mount } from '@vue/test-utils'
import PrimaryButton from '@/ui/components/PrimaryButton.vue'

const mountBtn = (props?: { text?: string; disabled?: boolean }) =>
  mount(PrimaryButton, {
    props: {
      text: props?.text ?? 'Click me',
      disabled: props?.disabled ?? false,
    },
  })

describe('PrimaryButton', () => {
  it('renders the provided text', () => {
    const wrapper = mountBtn({ text: 'Submit' })
    expect(wrapper.get('button').text()).toBe('Submit')
  })

  it('emits "onClick" when clicked and enabled', async () => {
    const wrapper = mountBtn({ disabled: false })
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('onClick')).toBeTruthy()
    expect(wrapper.emitted('onClick')!.length).toBe(1)
  })

  it('does not emit "onClick" when disabled', async () => {
    const wrapper = mountBtn({ disabled: true })
    await wrapper.get('button').trigger('click')
    expect(wrapper.emitted('onClick')).toBeUndefined()
  })

  it('applies disabled attribute and class when disabled', () => {
    const wrapper = mountBtn({ disabled: true })
    const btn = wrapper.get('button')
    expect(btn.attributes('disabled')).toBeDefined()
    expect(btn.classes()).toContain('primary-button--disabled')
  })

  it('does not have disabled attribute or class when enabled', () => {
    const wrapper = mountBtn({ disabled: false })
    const btn = wrapper.get('button')
    expect(btn.attributes('disabled')).toBeUndefined()
    expect(btn.classes()).not.toContain('primary-button--disabled')
  })
})
