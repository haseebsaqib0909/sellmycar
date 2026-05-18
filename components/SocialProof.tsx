import Image from "next/image";

const recentlySold = [
  {
    year: 2022,
    make: "BMW",
    model: "3 Series 320d M Sport",
    price: "£24,850",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80",
    location: "London",
  },
  {
    year: 2020,
    make: "Audi",
    model: "A3 Sportback 35 TFSI",
    price: "£18,400",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=600&q=80",
    location: "Manchester",
  },
  {
    year: 2019,
    make: "Ford",
    model: "Fiesta ST-Line 1.0",
    price: "£8,450",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&q=80",
    location: "Birmingham",
  },
  {
    year: 2021,
    make: "Mercedes",
    model: "C-Class C220d AMG Line",
    price: "£28,900",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=600&q=80",
    location: "Leeds",
  },
  {
    year: 2020,
    make: "Nissan",
    model: "Qashqai Tekna 1.3",
    price: "£15,800",
    image: "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?auto=format&fit=crop&w=600&q=80",
    location: "Glasgow",
  },
  {
    year: 2018,
    make: "Volkswagen",
    model: "Polo Match 1.0",
    price: "£9,200",
    image: "https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?auto=format&fit=crop&w=600&q=80",
    location: "Liverpool",
  },
  {
    year: 2022,
    make: "Toyota",
    model: "Yaris Hybrid Design",
    price: "£17,650",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
    location: "Bristol",
  },
  {
    year: 2017,
    make: "Vauxhall",
    model: "Corsa SRi 1.4",
    price: "£6,500",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80",
    location: "Sheffield",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline stat */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-4">
            Live activity
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 leading-tight tracking-tight text-balance">
            Over{" "}
            <span className="text-brand">250,000</span>{" "}
            cars sold and counting
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            See what we&apos;ve paid for cars just like yours in the last seven days.
          </p>
        </div>

        {/* Sold cars grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {recentlySold.map((car, i) => (
            <article
              key={`${car.year}-${car.model}-${i}`}
              className="group bg-white rounded-2xl overflow-hidden ring-1 ring-slate-200/60 hover:ring-brand/20 hover:shadow-lg transition-all duration-200"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={car.image}
                  alt={`${car.year} ${car.make} ${car.model}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full text-xs font-bold text-slate-700">
                  Sold
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-slate-500 mb-1">
                  {car.year} &middot; {car.location}
                </p>
                <h3 className="font-bold text-slate-900 text-sm leading-tight line-clamp-1">
                  {car.make} {car.model}
                </h3>
                <p className="text-xl font-extrabold text-brand mt-2 leading-none">
                  {car.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
