import Header from './components/Header'
import Menu from './components/Menu'
import Content from './components/Content'
import Footer from './components/Footer'
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