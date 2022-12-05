import SampleButton from '../../components/SampleButton.vue'

export default {
  title: 'SampleButton',
  component: SampleButton,
}

const Template = (args: any) => ({
  components: { SampleButton },
  setup() {
    return { args }
  },
  template: '<SampleButton v-bind="$props" />',
})

export const Submit: any = Template.bind({})
Submit.args = {
  type: 'button',
}
