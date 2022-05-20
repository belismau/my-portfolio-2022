import './App.css';
import Repository from './Repository';

function App() {

  const badges = [
    {
      name: 'node-js',
      // color: '#323232',
      // backgroundColor: 'yellow'
    },
    {
      name: 'react-native',
      // color: '#5ed3f3',
      // backgroundColor: '#666666'
    },
    {
      name: 'mongo-db',
      // color: '#403f41',
      // backgroundColor: '#61bd5e'
    },
    {
      name: 'react-redux',
      // color: '#323232',
      // backgroundColor: '#a983e5'
    }
  ]

  const LineBreak = () => {
    return (
      <div style={{
        height: 2,
        width: '100%',
        background: '#eee',
        margin: '30px 0'
      }}></div>
    )
  }

  return (
    <div className="App">
      <Repository
        title='Reacted'
        content='A React Native application for sharing and react on photos (with different emojis) with followers.'
        inProgress
        badges={badges}
        period='2020-'
      />

      <LineBreak />

      <Repository
        title='Portfolio'
        content='My portfolio for 2022'
        inProgress={false}
        badges={badges}
        period='2022'
      />
    </div>
  );
}

export default App;
