import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadBooks, loadMoreBooks, setBooksDataLoadingStatus, loadBookData } from './action';

export const fetchBooksAction = createAsyncThunk(
    'data/fetchBooks',
    async (arg, { dispatch }) => {
        dispatch(setBooksDataLoadingStatus(true));
        const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${arg.searchText}+subject:${arg.category}&orderBy=${arg.sorting}&maxResults=30&key=AIzaSyCISDrwQYnSuYmoXqDiQAbSnndjO00bO1k`);
        dispatch(loadBooks(data));
        dispatch(setBooksDataLoadingStatus(false));
    },
);

export const fetchMoreBooksAction = createAsyncThunk(
    'data/fetchMoreBooks',
    async ({ ...arg }, { dispatch }) => {
        dispatch(setBooksDataLoadingStatus(true));
        const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${arg.searchText}+subject:${arg.category}&orderBy=${arg.sorting}&maxResults=30&startIndex=${arg.loadedBooks}&key=AIzaSyCISDrwQYnSuYmoXqDiQAbSnndjO00bO1k`);
        dispatch(loadMoreBooks(data));
        dispatch(setBooksDataLoadingStatus(false));
    },
);

export const fetchBookAction = createAsyncThunk(
    'data/fetchBook',
    async (id, { dispatch }) => {
        dispatch(setBooksDataLoadingStatus(true));
        const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyCISDrwQYnSuYmoXqDiQAbSnndjO00bO1k`);
        dispatch(loadBookData(data));
        dispatch(setBooksDataLoadingStatus(false));
    }
);
