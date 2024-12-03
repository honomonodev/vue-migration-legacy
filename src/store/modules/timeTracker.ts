// Define the state interface
interface TimeTrackerState {
    timeEntries: TimeEntry[];
  }
  
  // Define the TimeEntry interface
  interface TimeEntry {
    id: number;
    task: string;
    hours: number;
  }
  
  const state: TimeTrackerState = {
    timeEntries: []
  }
  
  const mutations = {
    logTime(state: TimeTrackerState, entry: TimeEntry) {
      state.timeEntries.push(entry);
    },
    removeEntry(state: TimeTrackerState, entryId: number) {
      state.timeEntries = state.timeEntries.filter(entry => entry.id !== entryId);
    }
  }
  
  const actions = {
    logTime({ commit }: { commit: Function }, entry: TimeEntry) {
      commit('logTime', entry);
    },
    removeEntry({ commit }: { commit: Function }, entryId: number) {
      commit('removeEntry', entryId);
    }
  }
  
  const getters = {
    timeEntries: (state: TimeTrackerState) => state.timeEntries
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  }