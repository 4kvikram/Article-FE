import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './containers/CustomLayout'
import BaseRoute from './Routes'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <CustomLayout>

            <BaseRoute />

          </CustomLayout>
        </BrowserRouter>

      </div>

    </>
  );
}

export default App;
