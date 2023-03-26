import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBookAction } from '../../store/api-actions';
import './book-page.css';

function BookPage() {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (params) {
            dispatch(fetchBookAction(params.id));
        }
    }, [params, dispatch]);

    const bookData = useSelector(state => state.book);

    if (Object.keys(bookData).length === 0) {
        return (
            <section className="books">
                <div className="container">
                    <p className='books__loading-status'>Data is Loading</p>
                </div>
            </section>
        );
    }

    const bookDetails = {
        bookImage: bookData.volumeInfo.imageLinks.thumbnail,
        bookCategory: bookData.volumeInfo.categories,
        bookTitle: bookData.volumeInfo.title,
        bookAuthors: bookData.volumeInfo.authors,
        bookSubtitle: bookData.volumeInfo.subtitle,
    };

    return (
        <section className="book">
            <div className="container">
                <figure className="book__picture">
                    <img className="book__image" src={bookDetails.bookImage} width="250" height="380" alt="#" />
                </figure>
                <div className="book__content">
                    <p className="book__category">{bookDetails.bookCategory}</p>
                    <p className="book__title">{bookDetails.bookTitle}</p>
                    <p className="book__author">{bookDetails.bookAuthors}</p>
                    <p className="book__subtitle">{bookDetails.bookSubtitle}</p>
                </div>
            </div>
        </section>
    );
};

export default BookPage;