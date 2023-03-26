import { createAction } from '@reduxjs/toolkit';

export const loadBooks = createAction('data/loadBooks');

export const loadMoreBooks = createAction('data/loadMoreBooks');

export const setBooksDataLoadingStatus = createAction('data/setBooksDataLoadingStatus');

export const loadBookData = createAction('data/loadBookData');

export const setSearchParameters = createAction('search/setSearchParameters');
