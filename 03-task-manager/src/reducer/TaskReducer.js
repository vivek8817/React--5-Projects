export const initialState = {
  tasks: [],
  filter: "all",
};

export function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK": {
      const newTask = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };

      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    }

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.id
            ? { ...task, completed: !task.completed }
            : task,
        ),
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };

    default:
      return state;
  }
}
