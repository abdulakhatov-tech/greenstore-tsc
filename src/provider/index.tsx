import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { FC } from "react";
import { store } from "@redux/store";
import { ReactNodeT } from "@type/index";
import SuspenseWrapper from "@tools/suspense-wrapper";
import '@locale'

const AppProvider: FC<ReactNodeT> = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <SuspenseWrapper>{children}</SuspenseWrapper>
      </Provider>
    </BrowserRouter>
  );
};

export default AppProvider;
