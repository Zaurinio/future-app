import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchParameters } from '../../store/action';
import { fetchBooksAction } from '../../store/api-actions';
import './header.css';

function Header() {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        searchText: '',
        category: '',
        sorting: 'relevance',
    });

    const updateStateHandler = (evt) => {
        const { name, value } = evt.target;
        setFormData({ ...formData, [name]: value });
    };

    const formSubmitHandler = (evt) => {
        evt.preventDefault();
        dispatch(fetchBooksAction(formData));
        dispatch(setSearchParameters(formData));
    };

    return (
        <header className="header">
            <div className="container">
                <h1 className='header__title'><Link className="header__link" to={'/'}>Search for books</Link></h1>
                <form onSubmit={formSubmitHandler} className="header__form form">
                    <input onChange={updateStateHandler} value={formData.searchText} type="text" name='searchText' className="form__control form__control--text" />
                    <fieldset className="form__fieldset form__fieldset--filters">
                        <ul className="form__list">
                            <li className="form__item">
                                <label htmlFor="categories">Categories</label>
                                <select onChange={updateStateHandler} value={formData.category} id="categories" name='category' className="form-control form-control--select">
                                    <option value="">all</option>
                                    <option value="biography">biography</option>
                                    <option value="computers">computers</option>
                                    <option value="history">history</option>
                                    <option value="medical">medical</option>
                                    <option value="poetry">poetry</option>
                                </select>
                            </li>
                            <li className="form__item">
                                <label htmlFor="sorting">Sorting by</label>
                                <select onChange={updateStateHandler} value={formData.sorting} id="sorting" name='sorting' className="form-control form-control--select" >
                                    <option defaultValue value="relevance">relevance</option>
                                    <option value="newest">newest</option>
                                </select>
                            </li>
                        </ul>
                    </fieldset>
                </form>
            </div>
        </header>
    )
};

export default Header;