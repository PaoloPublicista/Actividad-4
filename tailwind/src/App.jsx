import React from 'react';
import './index.css';
import braisImage from './assets/brais.webp';
import nicolasImage from './assets/nicolas.webp';
import romualdImage from './assets/romuald.webp';

function App() {
  return (
    <div className="max-w-1720 mx-auto p-4 text-center">
            <h1 style={{ fontSize: '4rem', marginBottom: '2rem', marginTop: '1rem', marginLeft:'6rem' }}>Mis YouTubers Favoritos</h1>
      <table style={{ width: '80%', borderCollapse: 'separate', backgroundColor: '#00FFFF', border: '1px solid #000', marginLeft: '6rem', marginBotton: '6rem' }}>
        <thead>
          <tr>
            <th style={{ fontSize:'2rem', padding: '8px', textAlign: 'center', border: '1px solid #000' }}>Imagen</th>
            <th style={{ fontSize:'2rem', padding: '8px', textAlign: 'center', border: '1px solid #000' }}>Nombre</th>
            <th style={{ fontSize:'2rem', padding: '8px', textAlign: 'center', border: '1px solid #000' }}>País</th>
            <th style={{ fontSize:'2rem', padding: '8px', textAlign: 'center', border: '1px solid #000' }}>Reseña</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #000' }}><img src={braisImage} alt="Brais Moure" style={{ width: '100%', height: 'auto' }} /></td>
            <td style={{ fontSize: '2rem', padding: '8px', textAlign: 'center', border: '1px solid #000' }}>Brais Moure</td>
            <td style={{ fontSize: '2rem', padding: '8px', textAlign: 'center', border: '1px solid #000' }}>España</td>
            <td style={{ fontSize: '2rem', padding: '8px', textAlign: 'center', border: '1px solid #000' }}>Ingeniero de software desde 2010. Actualmente trabaja como desarrollador freelance full-stack. Además, crea contenido formativo y divulga sobre programación y desarrollo de software en redes como @mouredev. Fundador de la empresa Moure.dev</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #000' }}><img src={romualdImage} alt="Romuald Fons" style={{ width: '100%', height: 'auto' }} /></td>
            <td style={{ fontSize: '2rem', padding: '8px', textAlign: 'center', border: '1px solid #000' }}>Romuald Fons</td>
            <td style={{ fontSize: '2rem', padding: '8px', textAlign: 'center', border: '1px solid #000' }}>España</td>
            <td style={{ fontSize: '2rem', padding: '8px', textAlign: 'center', border: '1px solid #000' }}>Fundador del holding BIGSEO, Best 100 Influencer (Forbes 2021), Top Business Influencer (Eshow 2022) y reconocido como uno de los marketers más influyentes a nivel internacional. Hace más de 10 años que Romuald Fons ayuda a empresas y emprendedores a mejorar sus negocios con marketing digital, impulsando la mayor comunidad de SEO de habla hispana del mundo y formando a más de 1 millón de personas en sus redes sociales.</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #000' }}><img src={nicolasImage} alt="Nicolás Schürmann Lindemann" style={{ width: '100%', height: 'auto' }} /></td>
            <td style={{ fontSize: '2rem', padding: '8px', textAlign: 'center', border: '1px solid #000' }}>Nicolás Schürmann Lindemann</td>
            <td style={{ fontSize: '2rem', padding: '8px', textAlign: 'center', border: '1px solid #000' }}>Chile</td>
            <td style={{ fontSize: '2rem', padding: '8px', textAlign: 'center', border: '1px solid #000' }}>Es un Youtuber Chileno, ingeniero de software desde hace 8 años, trabajar con PHP nodeJS, react y react native. Es el fundador de la empresa de desarrollo de software Hola Mundo</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  );
}

export default App;