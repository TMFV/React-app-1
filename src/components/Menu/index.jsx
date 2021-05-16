import { routes } from '../routes';
const Menu = () => {
  return (
    <div className="menu">
      <p>Menu</p>
      {routes.map(({ link, label }) => (
        <a key={link} href={link}>
          {label}
        </a>
      ))}
      {/*       <a href="/products">Products</a>
      <a href="/products/1234">Product Detait</a>
      <a href="/cart">Cart</a>
      <a href="/order">Order</a>
      <a href="/profile">Profile</a>
      <a href="/contacts">Contacts</a>
      <a href="/counters">Counters</a> */}
    </div>
  );
};
export default Menu;
