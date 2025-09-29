import axios from 'axios';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const API_URL = 'https://rickandmortyapi.com/api/character/';

export function DataProvider({ children }) {
  const [activePage, setActivePage] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [info, setInfo] = useState({});
  const [apiURL, setApiURL] = useState(API_URL);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      setIsError(false);

      try {
        const { data } = await axios.get(apiURL);
        setIsFetching(false);
        setCharacters(data.results);
        setInfo(data.info);
      } catch (e) {
        setIsFetching(false);
        setIsError(true);
        console.error(e);
      }
    };

    fetchData();
  }, [apiURL]); // Только apiURL как зависимость

  const dataValue = useMemo(
    () => ({
      activePage,
      setActivePage,
      apiURL,
      setApiURL,
      characters,
      isFetching,
      isError,
      info
    }),
    [activePage, apiURL, characters, isFetching, isError, info]
    // fetchData удален из зависимостей
  );

  return (
    <DataContext.Provider value={dataValue}>{children}</DataContext.Provider>
  );
}

const DataContext = createContext({});

export const useData = () => useContext(DataContext);
