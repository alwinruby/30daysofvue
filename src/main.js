new Vue({
 el: '#app',
 data: {
   greeting: 'Hi There!',
   alertMessage: ''
  },
  methods: {
    changeGreeting() {
      this.greeting = this.greeting === 'Hi There!' ?
      'What is up!' :
      'Hi There!';
    },
    alertMessageGreeting() {
      this.alertMessage = 'You typed something!';
    },
    alertEnterGreeting() {
      this.alertMessage = 'You typed and pressed Enter!';
    },
  }
});
