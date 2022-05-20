import { badges } from '../badges';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Repository from './Repository';
import Stack from './Stack';

function App() {
  const LineBreak = (props) => {
    return (
      <div style={{
        height: 2,
        width: '100%',
        background: '#eee',
        margin: props.gap ? `${props.gap}px 0` : '20px 0'
      }}></div>
    )
  }

  return (
    <div className="App">
      <div>
        <Header />

        <Repository
          title='Reacted'
          content='A React Native application for sharing and react on photos (with different emojis) with followers.'
          inProgress
          badges={[
            badges.node,
            badges.react_native,
            badges.mongo_db,
            badges.redux
          ]}
          period='2020-'
          link='https://github.com/belismau/Login'
        />

        <LineBreak />

        <Repository
          title='Portfolio'
          content='Portfolio for showing my work (this website).'
          inProgress={false}
          badges={[
            badges.javascript,
            badges.react_js,
            badges.ui_design
          ]}
          period='2022'
          link='https://github.com/belismau/Loginnn'
        />

        <Footer />
      </div>
    </div>
  );
}

export default App;
