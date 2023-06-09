import React, { useState } from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const changeFilter = evt => {
    setFilter(evt.target.value);
    dispatch(filterContacts(evt.target.value));
  };
  return (
    <label>
    Find contacts by name
    <input
      type="text"
      value={filter}
      onChange={changeFilter}
      className={css.filterInput}
    />
  </label>
)
};
export default Filter;
