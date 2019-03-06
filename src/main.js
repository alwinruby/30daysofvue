new Vue({
 el: '#app',
 data: {
   greeting: '', // greeting is initialized
   user: 'Alwin Solanky',
   city: 'London',
  },
  methods: {
    addGreeting() {
      // greeting can now be updated!
      this.greeting = 'Hi There!';
    }
  },
});
