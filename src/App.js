import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { UserProvider } from './context/user.context';
import { CategoriesProvider } from './context/categories.context';
import { BagProvider } from './context/bag.context';
import { store } from './store/store';

const HomePage = lazy(() => import("./containers/HomePage"));
const ShopPage = lazy(() => import("./containers/ShopPage"));
const SignInPage = lazy(() => import("./containers/SignInPage"));
const SignUpPage = lazy(() => import("./containers/SignUpPage"));
const BagPage = lazy(() => import("./containers/BagPage"));
const CheckoutPage = lazy(() => import("./containers/CheckoutPage"));
const CategoryPreviewPage = lazy(() => import("./containers/CategoryPreviewPage"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <UserProvider>
            <CategoriesProvider>
              <BagProvider>
                <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                    <Route path="/" element={<CategoryPreviewPage />} />
                    <Route path="/shop/*" element={<ShopPage />} />
                    {/* <Route path="/category" element={<CategoryPreviewPage />} /> */}
                    <Route path="/signin" element={<SignInPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/bag" element={<BagPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                  </Routes>
                </Suspense>
              </BagProvider>
            </CategoriesProvider>
          </UserProvider>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
