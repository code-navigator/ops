import { createLocalVue, shallowMount } from '@vue/test-utils'
import { TestHelpers } from './../testHelpers'
import hello from './../../../src/components/controls/hello'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuetify)
localVue.use(Vuex)

describe('test.vue', () => {
  let h
  let store
  let wrapper

  beforeEach(() => {
    store = new Vuex.Store({})
    wrapper = shallowMount(hello, {
      localVue,
      store
    })
    h = new TestHelpers(wrapper, expect)
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('should mount without errors', () => {
    h.isInstance()
  })

  it('should include a message', () => {
    h.hasText('Hello')
  })

  it('should render correctly', () => {
    h.renders()
  })

  it('should trigger click event', () => {
    h.click('button')
    h.hasSelectorWithText('#output', '1')
    h.click('button')
    h.hasDataPropWithValue('number', 2)
  })
})
