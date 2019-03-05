new Vue({
 el: '#app',
 data: {
   greeting: 'Hi there!',
   user: 'Alwin Solanky',
   city: 'London',
  },
  methods: {
    // instance methods
    changeGreeting() {
      this.greeting = this.greeting === 'Hi there!' ?
      'What is up!' :
      'Hi there!';
    }
  },
});
