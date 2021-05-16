//import Products from '../../pages/Products';
//import Contacts from '../../components/Contacts';
//import Counters from '../../pages/Counters/index';
import { routes } from '../routes';

console.dir(window.location);

const Content = () => {
  const { pathname } = window.location;

  return (
    <div className="content">
      {routes.map(({ id, link, component: Component }) =>
        pathname === link ? <Component key={id} /> : null,
      )}
      {/* {pathname === '/products' && <Products />}
      {pathname === '/contacts' && <Contacts />}
      {pathname === '/counters' && <Counters />} */}
    </div>
  );
};
export default Content;
