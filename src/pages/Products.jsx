import React from 'react'
import NavBar from '../components/NavBar'
import Section from '../components/Section';
import Lavender from '../assets/Lavender.jpg';
import Mint from '../assets/Mint.jpg';
import Rosemary from '../assets/Rosemary.jpg';
import Thyme from '../assets/Thyme.jpg';
import LemonBalm from '../assets/LemonBalm.jpg';
import Sage from '../assets/Sage.jpg';
import AloeVera from '../assets/AloeVera.jpg';
import Basil from '../assets/Basil.jpg';
import Chamomile from '../assets/Chamomile.jpg';
import Echinacea from '../assets/Echinacea.jpg'
import Peppermint from '../assets/Peppermint.jpg';
import Ginger from '../assets/Ginger.jpg';
import Rose from '../assets/Rose.jpg';
import Orchid from '../assets/Orchid.jpg';
import Tulip from '../assets/Tulip.jpg';
import Sunflower from '../assets/Sunflower.jpg';
import Daisy from '../assets/Daisy.jpg';
import Marigold from '../assets/Marigold.jpg';
import Footer from '../components/Footer';
import CartIcon from '../components/CartIcon';
const Products = () => {
  const aromaticPlants = [
    {
      name: 'Lavender',
      id: 'Lavender',
      description: 'A fragrant plant that soothes the mind.',
      cost: 15.99,
      image: Lavender
    },
    {
      name: 'Mint',
      id:'Mint',
      description: 'A refreshing plant for culinary uses.',
      cost: 12.99,
      image: Mint
    },
    {
      name: 'Rosemary',
      id:'Rosemary',
      description: 'A woody herb known for its aromatic leaves.',
      cost: 10.99,
      image: Rosemary
    },
    {
      name: 'Thyme',
      id: 'Thyme',
      description: 'A versatile herb with a strong, earthy aroma.',
      cost: 11.99,
      image: Thyme
    },
    {
      name: 'Lemon Balm',
      id: 'LemonBalm',
      description: 'A lemon-scented herb known for its calming effects.',
      cost: 14.99,
      image: LemonBalm
    },
    {
      name: 'Sage',
      id: 'Sage',
      description: 'An aromatic herb with a slightly peppery flavor.',
      cost: 13.99,
      image: Sage
    }
  ];
  const medicinalPlants = [
    {
      name: 'Aloe Vera',
      id: 'AloeVera',
      description: 'A plant known for its healing properties.',
      cost: 18.99,
      image: AloeVera
    },
    {
      name: 'Basil',
      id: 'Basil',
      description: 'An aromatic plant used for its medicinal benefits.',
      cost: 14.99,
      image: Basil
    },
    {
      name: 'Chamomile',
      id: 'Chamomile',
      description: 'A daisy-like plant used for making calming tea.',
      cost: 12.49,
      image: Chamomile
    },
    {
      name: 'Echinacea',
      id: 'Echinacea',
      description: 'A flowering plant often used to boost the immune system.',
      cost: 16.99,
      image: Echinacea
    },
    {
      name: 'Peppermint',
      id: 'Peppermint',
      description: 'A plant used for its cooling sensation and medicinal properties.',
      cost: 13.49,
      image: Peppermint
    },
    {
      name: 'Ginger',
      id: 'Ginger',
      description: 'A plant used for its anti-inflammatory properties.',
      cost: 17.99,
      image: Ginger
    }
  ];
  const ornamentalPlants = [
    {
      name: 'Rose',
      id: 'Rose',
      description: 'A classic flower known for its beauty and fragrance.',
      cost: 19.99,
      image: Rose
    },
    {
      name: 'Orchid',
      id: 'Orchid',
      description: 'An exotic flower with intricate patterns and colors.',
      cost: 22.99,
      image: Orchid
    },
    {
      name: 'Tulip',
      id: 'Tulip',
      description: 'A vibrant flower that symbolizes spring.',
      cost: 14.49,
      image: Tulip
    },
    {
      name: 'Sunflower',
      id: 'Sunflower',
      description: 'A bright, cheerful flower that follows the sun.',
      cost: 12.99,
      image: Sunflower
    },
    {
      name: 'Daisy',
      id: 'Daisy',
      description: 'A simple yet elegant flower with a yellow center.',
      cost: 10.99,
      image: Daisy
    },
    {
      name: 'Marigold',
      id: 'Marigold',
      description: 'A vibrant orange flower often used in festivals.',
      cost: 11.99,
      image: Marigold
    }
  ];
  
  
  return (
    <div
    className='products'
    >
      <NavBar />
      <div
      className='products-page-intro'
      >
        <h1>
          Welecome to the store...
        </h1>
        <h2>
          Explore our wide range of plants:
        </h2>
      </div>
      <div
      className="storeContent"
      >
              <Section sectionTitle="Aromatic Plants" plants={aromaticPlants} />
              <Section sectionTitle="Medicinal Plants" plants={medicinalPlants} />
              <Section sectionTitle="Ornamental Plants" plants={ornamentalPlants} />
      </div>
      <Footer />
      <CartIcon/>
    </div>
  )
}

export default Products
