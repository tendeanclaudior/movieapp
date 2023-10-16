import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import {Loading} from './components';

const MainApp = () => {
  // Menggunakan useSelector untuk mengakses state global
  const stateGlobal = useSelector(state => state);
  return (
    <>
      {/* Menggunakan NavigationContainer sebagai tempat untuk navigasi */}
      <NavigationContainer>
        {/* Menggunakan komponen Router untuk menangani navigasi */}
        <Router />
      </NavigationContainer>
      {/* Menampilkan komponen Loading jika stateGlobal.loading bernilai true */}
      {stateGlobal?.loading && <Loading />}
    </>
  );
};

const App = () => {
  return (
    // Provider dari Redux untuk menyediakan store ke seluruh komponen
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
