const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: 'http://localhost:8888/feb-24/php-todo-list-json/server.php',
      listTasks: [],
      newTask: '',
      errorMsg: '',
    };
  },

  methods: {
    getApi() {
      axios.get(this.apiUrl).then((result) => {
        this.listTasks = result.data;
        console.log(result.dat);
      });
    },
    addTask(event) {
      // Creo oggetto formdata
      event.preventDefault();
      const data = new FormData();
      // aggiungo variabile all'oggetto
      data.append('text', this.newTask);
      data.append('check', false);
      // chiamata axios
      axios.post(this.apiUrl, data).then((result) => {
        this.newTask = '';
        this.listTasks = result.data;
        console.log(this.listTasks);
      });
    },
    // Funzione Rimuovi task

    remtsk(index) {
      // Creo oggetto formdata
      const data = new FormData();
      // aggiungo variabile all'oggetto
      data.append('delIndex', index);
      // chiamata axios
      axios.post(this.apiUrl, data).then((result) => {
        this.listTasks = result.data;
      });
    },
  },

  mounted() {
    this.getApi();
  },
}).mount('#app');
