import './App.css';
import Gallery from './components/Gallery';

function App() {
  const imageUrls = [
    'https://picsum.photos/200/300?random=1',
    'https://picsum.photos/200/300?random=2',
    'https://picsum.photos/200/300?random=3',
  ];

  return (
    <div>
      <h1>Mi galería en React</h1>
      <Gallery images={imageUrls} />
    </div>
  );
}

export default App;
