export default function reducer(state = {}, action) {
  switch (action.type) {
    case "SET_USER_DATA": {
      return { ...state, ...action.payload };
    }

    default: {
      return { ...state };
    }
  }

  //
}
