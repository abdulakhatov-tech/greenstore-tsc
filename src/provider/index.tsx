import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";
import { store } from "@redux/store";
import { ReactNodeT } from "@type/index";
import SuspenseWrapper from "@tools/suspense-wrapper";
import "@locale";

const queryClient = new QueryClient();

const AppProvider: FC<ReactNodeT> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>
          <SuspenseWrapper>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
          </SuspenseWrapper>
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default AppProvider;
