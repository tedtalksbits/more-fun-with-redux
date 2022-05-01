let lastId = 0;

const bugActions = {
  add: "ADD_BUG",
  remove: "REMOVE_BUG",
  squash: "SQUASH_BUG",
};

const bugReducer = (action, state = []) => {
  const { add, remove, squash } = bugActions;

  switch (action.type) {
    case add:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case remove:
      return [
        ...state.filter((bug) => bug.id !== action.payload.id),
        {
          date: new Date().toLocaleDateString(),
          msg: "bug removed 🗑",
        },
      ];
    case squash:
      return [
        ...state.filter((bug) => bug.id !== action.payload.id),
        {
          date: new Date().toLocaleDateString(),
          msg: "bug squashed🪦",
        },
      ];

    default:
      return state;
  }
};
