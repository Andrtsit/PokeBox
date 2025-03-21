import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import PageNotFound from "./routes/PageNotFound";
import AppLayout from "./routes/AppLayout";
import About from "./routes/About";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Collection from "./pages/Collection";
import Unboxing from "./pages/Unboxing";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="collection" element={<Collection />} />
            <Route path="settings" element={<Settings />} />
            <Route path="unboxing" element={<Unboxing />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "bg-grey-800",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
