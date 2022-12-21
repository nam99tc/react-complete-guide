import './ExpenseDate.css'
const ExpenseDate = (props) => {
    const day = props.date.toLocaleString('vi-VN', {day: '2-digit'});
    const month = props.date.toLocaleString('vi-VN', {month: 'long'});
    const year = props.date.getFullYear();
  return (
    <div className="date">
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}
export default ExpenseDate;
