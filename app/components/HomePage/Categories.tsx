const Categories = () => {
  const categories = [
    {
      name: "Electronics",
      img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      name: "Fashion",
      img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      name: "Furniture",
      img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      name: "Gadgets",
      img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
  ];

  return (
    <div className="relative px-4 py-20">

       <div className="text-center mb-6 max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          View our range of categories
        </h1>
        <p className="text-sm sm:text-base text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          adipisci ipsam provident laborum.
        </p>
      </div>
      {/* Left Arrow */}
      <button className="btn btn-circle absolute left-0 top-1/2 -translate-y-1/2 z-10">
        ❮
      </button>

      {/* Right Arrow */}
      <button className="btn btn-circle absolute right-0 top-1/2 -translate-y-1/2 z-10">
        ❯
      </button>

      {/* Scrollable Category Cards */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-3">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="min-w-[250px] card bg-base-100 shadow-sm relative"
          >
            <figure className="relative">
              <img src={cat.img} className="h-48 w-full object-cover" />

              {/* Category Title Overlay */}
              <h1 className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-md text-xl font-bold">
                {cat.name}
              </h1>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
