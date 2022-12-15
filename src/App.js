import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';

function App() {
  const lists = [
    {
      id : 'id1',
      title : 'Vina',
      amount : 453.2,
      date : new Date(2012, 12,30)
    },
    {
      id : 'id2',
      title : 'Hello Hola',
      amount : 233.2,
      date : new Date(2012, 11,10)
    }
  ];
  
  // lists.forEach( function (element) {
  //   return
  //     <ExpenseItem title={element.title} amount={element.amount} date={element.date}></ExpenseItem>
  //   });
  
  return (
    <div className="App">
        <Expenses lists={lists}/>
    </div>
  );
}

export default App;
