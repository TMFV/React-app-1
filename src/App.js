/* import MyFirstComponent from './components/MyFirstComponent';
import MySecondComponent from './components/MySecondComponent';
import MyThirdComponent from './components/MyThirdComponent'; */
import UserDetails from './components/UserDetails';

function App() {
  //const userName = { name: 'Bobby'};
  const user = { firstName: 'Bobby', lastName: 'Axelroad', age: 28};

  return (
    <div className="App">
      <h1> Hello, from React!!!</h1>
{/*       <MyFirstComponent usera={userName} x={73} />
      <MySecondComponent userb={userName} />
      <MyThirdComponent>
        <p>lorem ipsum</p>
        <button>Push the Button!</button>
      </MyThirdComponent> */}
      <UserDetails user={user} />
    </div>
  );
}

export default App;
