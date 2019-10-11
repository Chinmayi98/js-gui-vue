const add1 = (students) => { return students + 2 }

const adder1 = new Vue({
  el: '#adder1',
  data: {
       firstNumber1: 5
  },
  computed: {
    result1: function () {
      const i = parseInt(this.firstNumber1)
        return ` Estimated capacity is ${add1(i)}.`
    }
  }
})