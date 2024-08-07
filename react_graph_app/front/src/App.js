import { useEffect, useState } from "react";

function App() {
  const [visitors, setVisitors] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const response = await fetch("http://localhost:8081/visitors");
        // console.log(response);
        const visitors = await response.json();
        setVisitors(visitors);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchCustomers = async () => {
      try {
        const response = await fetch("http://localhost:8081/customers");
        // console.log(response);
        const customers = await response.json();
        setCustomers(customers);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVisitors();
    fetchCustomers();
  }, []);

  console.log(visitors);
  console.log(customers);

  return <div className="App">test</div>;
}

export default App;
