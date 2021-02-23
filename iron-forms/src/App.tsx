import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainLayout } from './components';
import { UserRegistration } from './screens';

function App() {
  return (
    <>
      <MainLayout>
        <UserRegistration />
      </MainLayout>
    </>
  );
}

export default App;
