

  const initialState = {
    note:  []// Giá trị khởi tạo ban đầu cho 'note'
  };
  
// Reducer.js
// Reducer.js
const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NOTE":
      return {
        ...state,
        note: [...state.note, action.payload],
      };
    case "DELETE_NOTE":
      return {
        ...state,
        note: state.note.filter(note => note !== action.payload),
      };
    case "UPDATE_NOTE":
      return {
        ...state,
        note: state.note.map(noteItem => {
          if (noteItem === action.payload.oldNote) {
            return action.payload.newNote;
          }
          return noteItem;
        }),
      };
    default:
      return state;
  }
};

export default noteReducer;

