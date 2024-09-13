import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'filters',
  initialState: {
    status : 'all',
  },
  reducers: {
    setStatusFilter (state, action) {
  state.status = action.payload;
  
    }
  }
})
export const {setStatusFilter} = slice.actions;
export default slice.reducer;






// export const setStatusFilter = createAction('filters/setStatusFilter');

// const initialState = {
//   status: 'all',
// };

// export default function filtersReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };

//     default:
//       return state;
//   }
// }