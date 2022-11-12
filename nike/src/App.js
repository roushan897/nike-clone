import { AllRoutes } from "./allRoutes/AllRoutes";

function App() {
  let x = process.env.REACT_APP_DOMAIN
  console.log(x)

  return (
    <div>      
      <AllRoutes />
    </div>
  );
}

export default App;
