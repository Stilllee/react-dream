import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import MainProducts from "./components/MainProducts";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MainProducts />
    </QueryClientProvider>
  );
}
