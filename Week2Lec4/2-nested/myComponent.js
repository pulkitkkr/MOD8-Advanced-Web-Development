import {component} from 'vue';
const Template = `
    <h1>This is {{ name }}</h1>
`

const NestedComponent = component('NestedComponent', {
  data: function () {
    return {
      count: 0
    }
  },
  template: Template
})

const Template2 = `
    <div>
      count is {{ count }}
      <NestedComponent></NestedComponent >
    </div>
`

export default {
  data() {
    return { count: 0 }
  },
  template: Template2,
  component: {
    NestedComponent
  }
}
