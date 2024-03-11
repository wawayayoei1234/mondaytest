import React, { createContext } from 'react';
export const MyContext = createContext();

export const MyProvider = (props) => {

  const { children } = props;
  const [state, setState] = React.useState({"menuMobile": false,"teblestudent":false,"tableteacher":false});
console.log(state)
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
