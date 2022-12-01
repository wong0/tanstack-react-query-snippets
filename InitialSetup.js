import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      /* containers */
      /* views */
    </QueryClientProvider>
  );
}

export default App;
