import Products from '../pages/Products';
import Contacts from '../components/Contacts';
import Counters from '../pages/Counters/index';

/*       <a href="/products">Products</a>
      <a href="/products/1234">Product Detait</a>
      <a href="/cart">Cart</a>
      <a href="/order">Order</a>
      <a href="/profile">Profile</a>
      <a href="/contacts">Contacts</a>
      <a href="/counters">Counters</a> */

export const routes = [
  {
    id: 1,
    link: '/products',
    label: 'Products',
    component: Products,
  },
  {
    id: 2,
    link: '/contacts',
    label: 'Contacts',
    component: Contacts,
  },
  {
    id: 3,
    link: '/counters',
    label: 'Counters',
    component: Counters,
  },
];
