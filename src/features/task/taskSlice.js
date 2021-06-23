import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import {fetchCount} from './counterAPI';

const initialState = {
  idCount: 3,
  tasks: [
    {id: 3, title: "TASK C", completed: false},
    {id: 2, title: "TASK B", completed: true},
    {id: 1, title: "TASK A", completed: false},
  ]
};

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    newTask: (state, action) => {
      state.idCount ++;
      const newItem = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      }
      state.tasks = [newItem, ...state.tasks];
    },
    completeTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if(task){
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.value += action.payload;
  //     });
  // },
});

export const {newTask, completeTask, deleteTask} = taskSlice.actions;

export const selectTasks = (state) => state.task.tasks;

export default taskSlice.reducer;
