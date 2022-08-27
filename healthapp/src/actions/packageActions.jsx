import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL,
  CREATE,
} from '../constants/packageConstants.jsx'
import * as api from '../api/index.js'

export const getPackages = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.fetchPackages()

    dispatch({ type: FETCH_ALL, payload: data })
    dispatch({ type: END_LOADING })
  } catch (error) {
    console.log(error)
  }
}

export const createPackage = (pack, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING })
    const { data } = await api.createPackage(pack)

    dispatch({ type: CREATE, payload: data })
    dispatch({ type: END_LOADING })

    navigate('/dashboard/managePackage')
  } catch (error) {
    console.log(error)
  }
}
