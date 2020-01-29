import React from 'react';
import SearchCard from './SearchCard';

function RecentSearches(props) {
  let searchInLocalStorage = JSON.parse(localStorage.getItem('recentSearches'))
  // if user refreshes the page, recent searches stay, it is a good idea to implement a "clear recent searches" button
  let searchCards = searchInLocalStorage.map((searchInfo, idx) => <SearchCard key={idx} searchInfo={searchInfo} />)

  return (
    <section>
      <section className='searchCards'>
       {searchCards}
      </section>
    </section>
  )
}

export default RecentSearches;
