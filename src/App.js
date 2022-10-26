// import NavBar from "./components/NavBar";
import "./styles/custom.scss";
import "./components/NewExpense/NewExpense";

// import "@fortawesome/fontawesome-free/css/all.css";
// import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import Skills from "./components/pages/Skills";
// import Contact from "./components/pages/Contact";
// import { Routes, Route } from "react-router-dom";
import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "a1",
      title: "Toilet Paper",
      amount: 95.15,
      date: new Date(2022, 6, 15),
    },
    {
      id: "a2",
      title: "Car Insurance",
      amount: 120.36,
      date: new Date(2022, 5, 8),
    },
    {
      id: "a3",
      title: "New Tv",
      amount: 220.14,
      date: new Date(2021, 8, 17),
    },
    {
      id: "a4",
      title: "New Benz",
      amount: 450.12,
      date: new Date(2020, 2, 9),
    },
  ];
  return (
    <div className="App">
      <NewExpense/>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
      {/* <NavBar />
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes> */}
    </div>
  );
}

export default App;
