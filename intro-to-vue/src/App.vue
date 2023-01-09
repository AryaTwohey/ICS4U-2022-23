<template>
  <div class="container">
    <Header @toggle-add-task="toggleAddTask" title="Task Tracker" />
    <div v-show="showAddTask">

      <AddTask @add-task = "addTask" />

    </div>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"/>
</div>

</template>

<script>
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { tSExpressionWithTypeArguments, tSMethodSignature } from '@babel/types'


export default {
  name: 'App',
  components: {
  Header,
  Tasks,
  AddTask
  },
  data(){
    return {
      tasks: [],
      showAddTask:false
    }
  },
  methods: {
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
    },
    addTask(task){
      this.tasks = [...this.tasks, task]
    },
    deleteTask(id){
    if(confirm('Are You Sure?')){
    this.tasks = this.tasks.filter((task) => task.id !== id)
    }
  },
  toggleReminder(id){
    console.log(id);
  }
  
  },
  
  created(){
    this.tasks = [
      {
        id: 1,
        text: 'World Domination',
        day: 'March 1st at 2:30pm',
        reminder: true, 
      },
      {
        id: 2,
        text: 'Dentist Appointment',
        day: 'March 1st at 2:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Hair Appointment',
        day: 'March 1st at 2:30pm',
        reminder: false,
      },
    ]
  }
}
</script>

<style> 
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
