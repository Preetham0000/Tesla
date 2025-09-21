import React from 'react';
import { Link } from 'react-router-dom';
import { teslaModels } from '../data/teslaModels';

const ModelsPage = () => (
  <div className="models-section">
    <h2 className="section-title">Tesla Models</h2>
    <div className="models-grid">
      {teslaModels.map((model) => (
        <div className="model-card" key={model.name}>
          <img src={model.imageUrl} alt={model.name} className="model-image" />
          <div className="model-info">
            <h3 className="model-name">{model.name}</h3>
            <p className="model-description">{model.description}</p>
            <div className="model-price">Starting at ${model.basePrice.toLocaleString()}</div>
            <Link to={`/customize/${model.name.toLowerCase().replace(/ /g, '-')}`} className="btn btn--primary">
              Customize {model.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ModelsPage;
