import { mount } from '@vue/test-utils'
import QuoteErrorCardCard from '@/features/quotes/components/QuoteErrorCard.vue'

const mountError = (props?: { message?: string }) =>
  mount(QuoteErrorCardCard, {
    props: { message: props?.message ?? 'Something went wrong' },
    global: {
      stubs: {
        GlassBaseCard: { template: '<div data-test="glass-base-card"><slot/></div>' },
      },
    },
  })

describe('QuoteErrorCard component', () => {
  it('renders title and message', () => {
    const wrapper = mountError({ message: 'Network failed' })
    expect(wrapper.text()).toContain('Well, this is awkward...')
    expect(wrapper.text()).toContain('Network failed')
  })

  it('emits "retry" when button is clicked', async () => {
    const wrapper = mountError()
    const btn = wrapper.get('button')
    await btn.trigger('click')
    expect(wrapper.emitted('retry')).toBeTruthy()
    expect(wrapper.emitted('retry')!.length).toBe(1)
  })

  it('renders accessible error icon', () => {
    const wrapper = mountError()
    const icon = wrapper.find('[data-test="error-icon-think"]')
    expect(icon.exists()).toBe(true)
  })

  it('renders inside GlassBaseCard stub', () => {
    const wrapper = mountError()
    const shell = wrapper.find('[data-test="glass-base-card"]')
    expect(shell.exists()).toBe(true)
  })

  it('shows the action button label', () => {
    const wrapper = mountError()
    expect(wrapper.get('button').text()).toBe('Give it another shot')
  })
})
