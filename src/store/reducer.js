import { createReducer } from '@reduxjs/toolkit';
import { loadBooks, loadMoreBooks, setSearchParameters, setBooksDataLoadingStatus, loadBookData } from './action';


const initialState = {
    books: [],
    book: [],
    isBooksDataLoading: false,
    loadedBooks: 0,
    totalBooks: 0,
    searchText: '',
    category: 'all',
    sorting: 'relevance',
};

export const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(loadBooks, (state, action) => {
            state.books = [...action.payload.items];
            state.loadedBooks = 30;
            state.totalBooks = action.payload.totalItems;
        })
        .addCase(loadMoreBooks, (state, action) => {
            state.books = [...state.books, ...action.payload.items];
            state.loadedBooks = state.loadedBooks + 30;
        })
        .addCase(setSearchParameters, (state, action) => {
            state.searchText = action.payload.searchText;
            state.category = action.payload.category;
            state.sorting = action.payload.sorting;
        })
        .addCase(setBooksDataLoadingStatus, (state, action) => {
            state.isBooksDataLoading = action.payload;
        })
        .addCase(loadBookData, (state, action) => {
            state.book = action.payload;
        })
});
