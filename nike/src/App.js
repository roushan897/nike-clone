import { useEffect, useState } from "react";
import { AllRoutes } from "./allRoutes/AllRoutes";

function App() {
  const [loading, setLoading] = useState(true);
  let loader = document.getElementById('loader');

  useEffect(()=>{
    setTimeout(()=>{
      loader.style.display= 'none';
      setLoading(false);
    }, 5000)
  },[])

  // console.log("█▓▒­░⡷⠂Nike⠐⢾░▒▓█");
  return (
    <div> 
      {!loading && <AllRoutes />}    
    </div>
  );
}

export default App;
