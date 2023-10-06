import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({data1:[] ,data2:[]});

  return (
    <useDataContext.Provider value={{ data, setData }}>
      {children}
    </useDataContext.Provider>
  );
};
