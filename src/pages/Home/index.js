import React from 'react';
import Menu from '../../components/Menu';
import initialData from '../../data/initial_data.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function App() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={initialData.categorias[0].videos[0].titulo}
        url={initialData.categorias[0].videos[0].url}
        videoDescription="Only for PotterHeads"
      />

      <Carousel
        ignoreFirstVideo
        category={initialData.categorias[0]}
      />

      <Carousel
        category={initialData.categorias[1]}
      />

      <Carousel
        category={initialData.categorias[2]}
      />

      <Carousel
        category={initialData.categorias[3]}
      />

      <Carousel
        category={initialData.categorias[4]}
      />

      <Footer />

    </div>
  );
}

export default App;
