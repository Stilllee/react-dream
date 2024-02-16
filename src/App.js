import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import MainProducts from "./components/MainProducts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MainProducts />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
