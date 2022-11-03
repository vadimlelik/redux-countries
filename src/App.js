import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countriesDelete, getCountries, loadCountries } from './store/countries';



const App = () => {
  const dispatch = useDispatch()
  const countries = useSelector(getCountries())
  console.log(countries);
  useEffect(() => {
    dispatch(loadCountries())
  }, [dispatch])

  const remove = (id) => {
    dispatch(countriesDelete(id))
  }


  return (
    <div className="App">
      <ul>
        {countries && countries.map((count, index) => {
          return (<li key={index + Date.now().toString()} >{count.name} <span onClick={() => remove(count.name)} style={{ cursor: 'pointer' }}>&#10133;</span></li>)
        })}
      </ul>
    </div>
  );
}

export default App;
