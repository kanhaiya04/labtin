import { FETCH_ALL, CREATE } from '../constants/packageConstants.jsx'

const packageReducer = (
  state = { isLoading: true, packageList: [] },
  action
) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true }
    case 'END_LOADING':
      return { ...state, isLoading: false }
    case FETCH_ALL:
      return {
        ...state,
        packageList: action.payload,
      }
    case CREATE:
      return {
        ...state,
        packageList: [...state.packageList, action.payload],
      }
    default:
      return state
  }
}
export default packageReducer
