import { Provider } from "react-redux";
import { FC } from "react";
import { store } from "@redux/store";
import { ReactNodeT } from "@type/index";
import { BrowserRouter } from "react-router-dom";
import SuspenseWrapper from "@tools/suspense-wrapper";

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
