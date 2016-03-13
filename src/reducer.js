export default function modalReducer(state = {}, action) {
  switch (action.type) {

    case 'OPEN_MODAL': {
      const {name} = action.payload
      return {...state, [name]: true}
    }

    case 'CLOSE_MODAL': {
      const {name} = action.payload
      return {...state, [name]: false}
    }

  }
  return state
}
