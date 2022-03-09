export default {
  data() {
    return {
      count: 2,
      raw: "<h1>I am an HTML tag</h1>"
    }
  },
  methods: {
    increaseValue(){
      this.count++;
    },
    decreaseValue(){
      this.count--;
    }
  },
  template: `
    <div>
        <h3>count : {{ count }}</h3>
        <span v-if="count%2 == 0"> Even </span>
        <span v-if="count%2 != 0"> Odd </span>
        <button @click="increaseValue">Increment</button>
        <button  @click="decreaseValue">Decrement</button>
    </div>
`
}
