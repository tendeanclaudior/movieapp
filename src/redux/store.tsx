import {createStore} from 'redux';

// Definisikan tipe state aplikasi
interface AppState {
  loading: boolean;
}

// Definisikan tipe action untuk mengatur loading
interface SetLoadingAction {
  type: 'SET_LOADING';
  value: boolean;
}

// Inisialisasi state awal
const initialState: AppState = {
  loading: false,
};

// Reducer: fungsi yang menangani perubahan state berdasarkan action yang diterima
const reducer = (
  state: AppState = initialState,
  action: SetLoadingAction,
): AppState => {
  // Periksa tipe action
  if (action.type === 'SET_LOADING') {
    // Jika tipe action adalah 'SET_LOADING', ubah nilai loading sesuai dengan nilai yang diberikan
    return {
      ...state,
      loading: action.value,
    };
  }
  // Jika tidak ada perubahan, kembalikan state yang sama
  return state;
};

// Buat store Redux dengan menggunakan reducer
const store = createStore(reducer);

// Ekspor store agar dapat digunakan di seluruh aplikasi
export default store;
