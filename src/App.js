
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Date from './components/Date';
import './App.css';
import allreducers from './reducers';
import DayOfWeek from './components/DayOfWeek';

const store = createStore(allreducers)

const styles = {
  day_container: {
    display: 'flex',
    marginLeft: '157px',
    backgroundColor:'#ff00ff',
    marginRight:'310px',
    marginBottom:'15px',
    borderRadius:'15px'
  },
  day_item: {
    padding: '28px'
  },
  grid_container: {
    display: 'grid',
    gridTemplateColumns: '120px 120px 120px 120px 120px 120px 120px',
    gridTemplateRows: '80px 80px 80px 80px 80px',
    marginLeft: '190px',
    // gridColumnStart:'2'
    rowGap: '1px',
    columnGap: '1px'
  },
  eachDay: {
    // border: '.1px solid black',
    // gridColumnStart:'6',

    gridColumn: 1 / 5,
    gridRows: 2 / 4
  },
  header :{
      color:'green',
    
      backgroundColor:'gold',
      marginLeft: '157px',
      marginRight:'310px',
      boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
      padding:'1px',
      borderRadius:'15px'
  }
}
// const arr = ['', '', '', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <div style={styles.header}><h3>Calender</h3> </div>
        
        <Date />
        <div className='day_container' style={styles.day_container}>
          {
            weekday.map(ele => {
              return (
                <div className="day-item" style={styles.day_item}>{ele}</div>
              )
            })
          }
        </div>
        <DayOfWeek />
      </div>
    </Provider>
  );
}

export default App;