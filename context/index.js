import React, { createContext } from 'react';
export const MyContext = createContext();

export const MyProvider = (props) => {

  const { children } = props;
  const [state, setState] = React.useState({"tablestudent":true,"tableteacher":false, "subject":false});

  React.useEffect(() => {
  }, []);
  
  return (
    <>
      <MyContext.Provider value={[state, setState]}>
        {children}
      </MyContext.Provider>
    </>
  );
};
