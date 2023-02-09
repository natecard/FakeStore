import { Context, item } from '../App';

export default function ShoppingCartContents(props) {
  return (
    <div>
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
      <h4>{props.amount}</h4>
    </div>
  );
}
