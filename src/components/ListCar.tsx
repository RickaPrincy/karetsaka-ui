interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  imageUrl: string;
}

const cars: Car[] = [
  {
    id: 1,
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    imageUrl: "https://i.pinimg.com/564x/79/8b/04/798b0446000b72ba17ae4f5e32a77643.jpg",
  },
  {
    id: 2,
    brand: "Honda",
    model: "Civic",
    year: 2019,
    imageUrl: "https://i.pinimg.com/564x/79/8b/04/798b0446000b72ba17ae4f5e32a77643.jpg",
  },
  {
    id: 3,
    brand: "Ford",
    model: "Focus",
    year: 2018,
    imageUrl: "https://i.pinimg.com/564x/79/8b/04/798b0446000b72ba17ae4f5e32a77643.jpg",
  },
  {
    id: 4,
    brand: "Ford",
    model: "Focus",
    year: 2018,
    imageUrl: "https://i.pinimg.com/564x/79/8b/04/798b0446000b72ba17ae4f5e32a77643.jpg",
  },
  {
    id: 5,
    brand: "Ford",
    model: "Focus",
    year: 2018,
    imageUrl: "https://i.pinimg.com/564x/79/8b/04/798b0446000b72ba17ae4f5e32a77643.jpg",
  },
];
export function ListCar() {
  return (
    <div>
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold">Car List</h1>
        <p>Explore our cars you might like</p>
      </div>
      <div className="carousel carousel-center space-x-4 rounded-box">
        {cars.map((car: Car) => (
          <div key={car.id} className="carousel-item flex flex-col items-center">
            <img 
              src={car.imageUrl} 
              alt={car.model} 
              className="w-72 h-48 object-cover rounded-md" 
            />
            <h2 className="text-lg font-semibold mt-2 text-center">
              {car.brand} {car.model} ({car.year})
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
