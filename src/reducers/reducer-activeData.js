export default function (state='', action) {
  switch(action.type) {
    case "SET_ACTIVE_DATA":
      return action.payload
    default:
      return state
  }
}
