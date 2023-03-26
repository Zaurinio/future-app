import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoreBooksAction } from '../../store/api-actions';
import BookItem from '../book-item/book-item';
import './books.css';

function Books() {

    const [loadButtonActivity, setLoadButtonActivity] = useState(true);

    const dispatch = useDispatch();

    const isDataLoading = useSelector(state => state.isBooksDataLoading);
    const booksList = useSelector(state => state.books);
    const totalBooksQty = useSelector(state => state.totalBooks);
    const loadedBooksQuantity = useSelector(state => state.loadedBooks);

    const searchText = useSelector(state => state.searchText);
    const searchCategory = useSelector(state => state.category);
    const searchSorting = useSelector(state => state.sorting);

    const searchParameters = {
        searchText: searchText,
        category: searchCategory,
        sorting: searchSorting,
        loadedBooks: loadedBooksQuantity,
    };

    useEffect(() => {
        if (loadedBooksQuantity >= totalBooksQty) {
            setLoadButtonActivity(false);
        } else {
            setLoadButtonActivity(true);
        }
    }, [loadedBooksQuantity, totalBooksQty]);

    const booksQuantiy = booksList.length > 0 ?
        <p className="books__quantity">Found {totalBooksQty} results</p> :
        <p className="books__quantity">No results</p>;

    const loadButtonClickHandler = () => {
        dispatch(fetchMoreBooksAction(searchParameters));
    };

    if (isDataLoading) {
        return (
            <section className="books">
                <div className="container">
                    <p className='books__loading-status'>Data is Loading</p>
                </div>
            </section>
        );
    }

    return (
        <section className="books">
            <div className="container">
                {booksQuantiy}
                <ul className="books__list">
                    {booksList.map((book, index) => {
                        return (
                            <BookItem
                                key={book.id + index}
                                id={book.id}
                                image={book.volumeInfo.imageLinks}
                                category={book.volumeInfo.categories}
                                title={book.volumeInfo.title}
                                authors={book.volumeInfo.authors}
                            />
                        );
                    })}
                </ul>
                {loadButtonActivity && <button onClick={loadButtonClickHandler} type="button" className="books__button">Load more</button>}
            </div>
        </section>
    )
};

export default Books;