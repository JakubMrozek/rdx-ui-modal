import update from 'react-addons-update'

export default function modalReducer(state = {}, action) {
  switch (action.type) {

    case 'OPEN_MODAL': {
      const {name} = action.payload
      return update(state, {
        [name]: {
          $set: true
        }
      })
    }

    case 'CLOSE_MODAL': {
      const {name} = action.payload
      return update(state, {
        [name]: {
          $set: false
        }
      })
    }

  }
  return state
}
