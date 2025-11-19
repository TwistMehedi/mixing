import React from "react";

const Features = () => {
  return (
    <div className="px-4">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 mb-6">
        <h1 className="text-2xl font-bold">Featured Products</h1>

        <p className="text-gray-500 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          consectetur deserunt est tempore, minima dicta. Esse doloribus
          molestias tenetur provident!
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {/* Card Template */}
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="card bg-base-100 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body there
                are title and actions parts
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Features;
