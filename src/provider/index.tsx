import { Provider } from "react-redux";
import { FC } from "react";
import { store } from "@redux/store";
import { AppProviderPropsI } from "@interfaces/index";

const AppProvider:FC<AppProviderPropsI> = ({children}) => {

  return <Provider store={store}>
    {children}
  </Provider>;
};

export default AppProvider;
