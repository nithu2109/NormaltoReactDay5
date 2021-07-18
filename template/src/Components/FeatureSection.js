import React from 'react';

function FeatureSection() {
    return (
        <div className="bg-success text-center">
           <p className="display-4 text-white p-4">Discover our amazing  app about Fruits!</p>
      <p className="text-white">
      Fruit, the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. Thus, apricots, bananas, and grapes, as well as bean pods, corn grains, tomatoes, cucumbers, and (in their shells) acorns and almonds, are all technically fruits. Popularly, however, the term is restricted to the ripened ovaries that are sweet and either succulent or pulpy. 
      </p>
      <div className="row  p-4">
        <div className="col-6 text-right">
          <button className="btn btn-warning btn-lg">Play Store</button>
        </div>
        <button className="btn btn-warning btn-lg" >App Store</button>
        <div className="col-6 text-center"></div>
      </div>
        </div>
    );
}

export default FeatureSection;