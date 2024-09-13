import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import filtersReducer from './filtersSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});


// const rootReducer = (state = initialState, action) => {
//   switch(action.type){
//     case "tasks/addTask":{
//       return{
//         ...state,
//         tasks:{
//           items: [...state.tasks.items, action.payload]
//         }
//       }
//     }case "tasks/deleteTask":
//     return{
//       ...state,
//       tasks: {
//         items: state.tasks.items.filter((task) => task.id !== action.payload)
//       }
//     }; case "tasks/toggleTask":
//     return{
// ...state,
// tasks:{
// items: state.tasks.items.map((task) => {
//   if(task.id !== action.payload){
//     return task;
//   }
//   return{
//     ...task,
//     completed: !task.completed
//   }
// })
// }
// }; case "filter/setStatusFilter":
// return{
//   ...state,
//  filters: {
//   status: action.payload,
//  },
// };
    
//     default:
//       return state;
//   }
// };

// export const store = configureStore({
//   reducer: rootReducer,
// });

