
import React, { useState, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';
import axios from 'axios';
import Loading from './Loading';
import Card from './Card';

const RandomData = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMoreItems = () => {
    if (!loading) {
      setLoading(true);
      axios
        .get(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`)
        .then((response) => {
          setItems((prevItems) => [...prevItems, ...response.data]);
          setLoading(false);
          setPage(page + 1);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    loadMoreItems();
  }, []); // Load initial data

  const Row = ({ index, style }) => {
    const item = items[index];
    if (!item) {
      return <Loading></Loading>;
    }
    return (
      <div style={style} className="list-item">
        <Card item={item} /> 
      </div>
    );
  };
  return (
    <div className="infinite-scroll-list">
      <List
        height={400}
        itemCount={items.length + 1} 
        itemSize={100}
        onItemsRendered={({ visibleStopIndex }) => {
          if (visibleStopIndex === items.length - 1) {
            loadMoreItems();
          }
        }}
      >
        {Row}
      </List>
      {loading && <Loading/>}
    </div>
  );
};

export default RandomData;
