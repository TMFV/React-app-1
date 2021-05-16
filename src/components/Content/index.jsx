import Products from '../../pages/Products';
import Contacts from '../../components/Contacts';
import Counters from '../../pages/Counters/index';

console.dir(window.location);

const Content = () => {
  const { pathname } = window.location;

  return (
    <div className="content">
      {pathname === '/Products' && <Products />}
      {pathname === '/contacts' && <Contacts />}
      {pathname === '/counters' && <Counters />}
    </div>
  );
};
export default Content;
