import { Link } from 'react-router-dom';
import './book-item.css';

function BookItem(props) {
    const { id, image, category, title, authors } = props;

    return (
        <li className="books__item">
            <figure className="books__picture">
                <img className="books__image" src={image ? image.thumbnail : ''} width="128" height="158" alt="#" />
            </figure>
            <p className="books__category">{category ? category[0] : ''}</p>
            <p className="books__title">
                <Link to={`/book/${id}`} className="books__link">{title ? title : ''}</Link>
            </p>
            <p className="books__author">{authors ? authors : ''}</p>
        </li>
    )
};

export default BookItem;