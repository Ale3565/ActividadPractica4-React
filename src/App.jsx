import './App.css';

import Gallery from './components/Gallery';
import Navbar from './components/Navbar';

function App() {
  const imageUrls = [
    'https://picsum.photos/400/600?random=1',
    'https://picsum.photos/400/600?random=2',
    'https://picsum.photos/400/600?random=3',
    'https://picsum.photos/400/600?random=4',
    'https://picsum.photos/400/600?random=5',
    'https://picsum.photos/400/600?random=6',
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Navbar />

      <div
        className="relative h-screen w-full bg-cover bg-center flex items-center justify-center mt-16"
        style={{
          backgroundImage: `url('https://i.pinimg.com/1200x/17/4b/77/174b77c13dd4b36bc8376940135d280b.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-opacity-60 bg-gray"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Explora el Mundo</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Con nuestra galería de imágenes, podrás explorar y admirar lo fascinante del mundo,
            capturando su belleza, diversidad y magia a través de cada imagen. ¡Sumérgete en una
            experiencia visual única!
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4">
        <div className="text-center py-10">
          <h2 className="font-bold text-4xl mb-4 text-gray-800">Mi galería en React</h2>
        </div>

        <Gallery images={imageUrls} />

        <div className="text-center py-10 mt-16">
          <h2 className="font-bold text-2xl md:text-3xl mb-4 text-gray-700">
            ¡Gracias por visitar nuestra galería!
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Cada imagen ha sido cuidadosamente seleccionada para ofrecer la mejor experiencia
            visual. Explora, descubre y encuentra la inspiración perfecta para tu próximo proyecto.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
