// Define the state interface
interface TaskState {
    tasks: Task[];
  }
  
  // Define the Task interface
  interface Task {
    id: number;
    name: string;
  }
  
  const state: TaskState = {
    tasks: []
  }
  
  const mutations = {
    addTask(state: TaskState, task: Task) {
      state.tasks.push(task);
    },
    removeTask(state: TaskState, taskId: number) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    }
  }
  
  const actions = {
    addTask({ commit }: { commit: Function }, task: Task) {
      commit('addTask', task);
    },
    removeTask({ commit }: { commit: Function }, taskId: number) {
      commit('removeTask', taskId);
    }
  }
  
  const getters = {
    tasks: (state: TaskState) => state.tasks
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }