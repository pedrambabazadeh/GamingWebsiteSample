import React, { useState, useEffect } from 'react';

interface FetchedData {
  url: string;
  name: string;
}

interface Props {
  url: string;
}

const FetchAndRenderList = ({ url }: Props) => {
  const [fetchedData, setFetchedData] = useState<FetchedData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFetchedData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <ul>
      {fetchedData.map((item, index) => (
        <li key={index}>
          <a href={item.url}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default FetchAndRenderList;
