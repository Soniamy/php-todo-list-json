const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: 'http://localhost:8888/feb-24/php-todo-list-json/server.php',
      listTasks: [],
    };
  },

  methods: {
    getApi() {
      axios.get(this.apiUrl).then((result) => {
        this.listTasks = result.data;
        console.log(result.dat);
      });
    },
  },

  mounted() {
    this.getApi();
  },
}).mount('#app');
