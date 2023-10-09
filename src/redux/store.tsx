import {createStore} from 'redux';

interface AppState {
  loading: boolean;
}

interface SetLoadingAction {
  type: 'SET_LOADING';
  value: boolean;
}

const initialState: AppState = {
  loading: false,
};

const reducer = (
  state: AppState = initialState,
  action: SetLoadingAction,
): AppState => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
