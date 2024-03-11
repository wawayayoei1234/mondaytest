import React, { createContext } from 'react';
import Test2 from '../pages/test2'
export const MyContext = createContext();

export const MyProvider = (props) => {

  const { children } = props;
  const [state, setState] = React.useState({"menuMobile": false,"token":[],"role":[],"country":[],"accessdata":[]});
console.log(state)
  React.useEffect(() => {
  }, []);
  
  return (
    <>
    <Test2 settoken={(token) => { setState({ ...state, "token": token }) }}/>
      <MyContext.Provider value={[state, setState]}>
        {children}
      </MyContext.Provider>
    </>
  );
};
