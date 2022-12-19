import ExpenseItem from "./ExpenseItem";
const Expenses = (props) => {
  return (
    <div>
      {props.lists.map(item => {
                return <ExpenseItem title={item.title} amount={item.amount} date={item.date}/>;
            })}    

      {/* <ExpenseItem title={props.lists[0].title} amount={props.lists[0].amount} date={props.lists[0].date} />
      <ExpenseItem title={props.lists[1].title} amount={props.lists[1].amount} date={props.lists[1].date} />
      <ExpenseItem title={props.lists[2].title} amount={props.lists[2].amount} date={props.lists[2].date} />
      <ExpenseItem title={props.lists[3].title} amount={props.lists[3].amount} date={props.lists[3].date} /> */}
    </div>
  );
};
export default Expenses;
