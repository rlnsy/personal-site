'use strict';

Vue.config.keyCodes = {
  "enter-key": 13
};

new Vue({
  el: '#console',

  data: {
    message: 'Site Feature Coming Soon!',
    lines: [
      {
        isCommand: false,
        text: 'Welcome to my page. This is just an interactive fake terminal I'
          + ' created as a fun little project. You can use it to do various'
          + ' things on my site.'
      },
      {
        isCommand: false,
        text: "Type 'cmd' to see a list of commands"
      },
    ],
    dataEntered: ''
  },

  methods: {
    submit(event) {
      if (this.dataEntered != '') {
        this.interpret(this.dataEntered);
      }
    },

    interpret(text) {
      this.newline(text);
      if (text == 'cmd') {
        this.log('there no commands availables yet')
      } else {
        this.log('not a valid command')
      } // TODO: make more commands
    },

    newline(lastEntered) {
      this.lines.push({
        isCommand: true,
        text: lastEntered
      });
      this.clearEntry();
    }, //TODO: make newlines and logs auto-scroll the view

    log(content) {
      this.lines.push({
        isCommand: false,
        text: content
      })
    },

    clearEntry() {
      this.dataEntered = '';
    }
  }
});
