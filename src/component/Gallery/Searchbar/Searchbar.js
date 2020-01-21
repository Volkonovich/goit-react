import React from "react";
import css from "../../Styles/styls.css";

const Searchbar = ({ getSearchValue, search, handleSubmit }) => {
  return (
    <div>
      <header className={css.Searchbar}>
        <form onSubmit={handleSubmit} className={css.SearchForm}>
          <button type="submit" className="SearchForm-button ">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={getSearchValue}
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={search}
          />
        </form>
      </header>
    </div>
  );
};

export default Searchbar;
