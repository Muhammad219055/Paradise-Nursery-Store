import React from 'react';
import ProductCard from './ProductCard';

const Section = ({ sectionTitle, plants }) => {
  return (
    <div className="section">
      <h2>{sectionTitle}</h2>
      <div className="plant-cards">
        {plants.map((plant, index) => (
          <ProductCard key={index} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default Section;
