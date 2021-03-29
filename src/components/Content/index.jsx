import Products from '../../pages/Products';
import Contacts from '../../components/Contacts';

console.dir(window.location);

const Content = () => {
    const { pathname } = window.location;
    return (
        <div className="content">
            {pathname === 'products' && <Products />}
            {pathname === 'contacts' && <Contacts />}
        </div>
        
    );
};
export default Content;