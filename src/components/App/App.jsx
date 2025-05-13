import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppHeader from '../appHeader/AppHeader';
import Page404 from '../pages/404';
import ComicsPage from '../pages/ComicsPage';
import MainPage from '../pages/MainPage';
import SinglePage from '../pages/SinglePage';
import SingleCharacterLayout from '../pages/singleCharacterLayout/SingleCharacterLayout';
import SingleComicLayout from '../pages/singleComicLayout/SingleComicLayout.jsx';

const App = () => {
  return (
    <BrowserRouter basename='/marvel-site/'>
      <div className='app'>
        <AppHeader />
        <main>
          <Routes>
            <Route
              path='/'
              element={<MainPage />}
            />
            <Route
              path='/comics'
              element={<ComicsPage />}
            />
            <Route
              path='*'
              element={<Page404 />}
            />
            <Route
              path='/comics/:id'
              element={
                <SinglePage
                  Component={SingleComicLayout}
                  dataType='comic'
                />
              }
            />
            <Route
              path='/characters/:id'
              element={
                <SinglePage
                  Component={SingleCharacterLayout}
                  dataType='character'
                />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
