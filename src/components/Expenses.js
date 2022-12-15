import ExpenseItem from "./ExpenseItem";
function Expenses (props){
    return(
        <div>
            <ExpenseItem title={props.lists[0].title} amount={props.lists[0].amount} date={props.lists[0].date}></ExpenseItem>
            <ExpenseItem title={props.lists[1].title} amount={props.lists[1].amount} date={props.lists[1].date}></ExpenseItem>
        </div>
    );
}
export default Expenses;