import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// import Header from "./components/header/header";
import Books from "./components/books/books";
import BookPage from "./components/book-page/book-page";
import Layout from "./components/layout/layout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Books />} />
          <Route path="/book/:id" element={<BookPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
