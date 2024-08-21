import { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { store } from "@redux/store";
import SuspenseWrapper from "@tools/suspense-wrapper";
import "@locale";

// the type for the props that the AppProvider will receive
interface AppProviderProps {
  children: React.ReactNode;
}

// a QueryClient instance outside of the component to avoid creating a new instance on every render
const queryClient = new QueryClient();

const AppProvider: FC<AppProviderProps> = ({ children }) => {
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
