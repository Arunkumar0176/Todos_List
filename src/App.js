import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";

export function App() {
  let todos = [
    {
      sno: 1,
      title: "Buy Groceries",
      desc: "You need to buy vegetables and fruits."
    },
    {
      sno: 2,
      title: "Complete Homework",
      desc: "Finish the math and science homework."
    },
    {
      sno: 3,
      title: "Call Electrician",
      desc: "Fix the living room light issue."
    }
  ];

  return (
    <>
      <Header title="My Todo List" />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
