import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content/index';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  return (
    <div className="shop">
      <Header />
      <div className="body">
        <Menu />
        <Content />
      </div>
      <Footer />
    </div>
  );
};
export default App;
