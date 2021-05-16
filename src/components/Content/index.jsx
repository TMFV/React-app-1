import Products from '../../pages/Products';
import Contacts from '../../components/Contacts';
import Todos from '../../pages/Todos/index';

console.dir(window.location);

const Content = () => {
  const { pathname } = window.location;

  return (
    <div className="content">
      {pathname === '/Products' && <Products />}
      {pathname === '/contacts' && <Contacts />}
      {pathname === '/todos' && <Todos />}
    </div>
  );
};
export default Content;
