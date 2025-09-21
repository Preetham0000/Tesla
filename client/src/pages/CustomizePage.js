import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { teslaModels } from '../data/teslaModels';

const getModelByParam = (param) => teslaModels.find(m => m.name.toLowerCase().replace(/ /g, '-') === param) || teslaModels[0];

const CustomizePage = () => {
  const { modelName } = useParams();
  const model = getModelByParam(modelName);
  const [selected, setSelected] = useState({
    battery: 0,
    color: 0,
    wheels: 0,
    interior: 0
  });

  const updateOption = (category, idx) => setSelected(s => ({ ...s, [category]: idx }));

  const total = model.basePrice +
    model.options.battery[selected.battery].price +
    model.options.color[selected.color].price +
    model.options.wheels[selected.wheels].price +
    model.options.interior[selected.interior].price;

  return (
    <div className="customize-layout">
      <div className="customize-image">
        <img className="car-image" src={model.options.color[selected.color].imageUrl} alt={model.name} />
        <div className="image-overlay">
          <span id="selected-model">{model.name}</span>
        </div>
      </div>
      <div className="customize-options">
        <div className="options-header">
          <h2>Customize Your {model.name}</h2>
          <div className="price-display">
            <span className="price-label">Total Price</span>
            <span className="price-value">${total.toLocaleString()}</span>
          </div>
        </div>
        {['battery', 'color', 'wheels', 'interior'].map(category => (
          <div className="option-group" key={category}>
            <div className="option-title">{category.charAt(0).toUpperCase() + category.slice(1)}</div>
            <div className={category === 'color' ? 'option-list color-options' : 'option-list'}>
              {model.options[category].map((option, idx) => (
                <div
                  className={`option-item${selected[category] === idx ? ' selected' : ''}`}
                  key={option.name || option.type}
                  onClick={() => updateOption(category, idx)}
                >
                  <input
                    type="radio"
                    name={category}
                    checked={selected[category] === idx}
                    readOnly
                    className="option-radio"
                  />
                  {category === 'color' && (
                    <div className={`color-swatch color-${option.name.toLowerCase().includes('white') ? 'white' : option.name.toLowerCase().includes('blue') ? 'blue' : option.name.toLowerCase().includes('red') ? 'red' : 'silver'}`}></div>
                  )}
                  <div className="option-info">
                    <div className="option-name">{option.name || option.type}</div>
                    <div className="option-price">{option.price > 0 ? `+$${option.price.toLocaleString()}` : 'Included'}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className="btn btn--primary btn--full-width" onClick={() => alert('Order placed! (Demo)')}>Order Now</button>
      </div>
    </div>
  );
};

export default CustomizePage;
