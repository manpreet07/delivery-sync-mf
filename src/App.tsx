import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeliverySync from "./components/DeliverySync";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<DeliverySync />} />
  </Routes>
);

function App() {
  const isStandalone = import.meta.env.MODE === "development";

  return (
    <>
      {isStandalone ? (
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      ) : (
        <AppRoutes />
      )}
    </>
  );
}

export default App;
