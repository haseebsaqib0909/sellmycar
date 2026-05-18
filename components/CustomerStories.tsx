import Image from "next/image";

const stories = [
  {
    name: "Sarah Mitchell",
    location: "Manchester",
    sold: "2019 Ford Fiesta",
    price: "£8,450",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "I had been quoted £7,200 by my local dealer. SellMyCar offered £1,200 more and collected the car the next morning. Painless.",
  },
  {
    name: "James Patel",
    location: "London",
    sold: "2021 BMW 3 Series",
    price: "£24,850",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "The valuation came back in under a minute. By Tuesday lunchtime the BMW had been collected and the money was in my account.",
  },
  {
    name: "Priya Shah",
    location: "Birmingham",
    sold: "2018 Volkswagen Polo",
    price: "£9,200",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "I was nervous about selling online but their team called within an hour to walk me through everything. So easy.",
  },
];

function Quote() {
  return (
    <svg
      className="w-8 h-8 text-brand/15"
      fill="currentColor"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
    </svg>
  );
}

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.176 0l-3.366 2.446c-.784.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

export default function CustomerStories() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <p className="text-sm font-semibold text-brand uppercase tracking-widest mb-3">
            Customer stories
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 text-balance tracking-tight">
            Real sellers. Real prices. Real fast.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Thousands of UK drivers have sold their cars with us. Here&apos;s what three of them
            had to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {stories.map((story) => (
            <article
              key={story.name}
              className="bg-white rounded-2xl p-7 shadow-sm ring-1 ring-slate-200/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              <div className="flex items-start justify-between mb-2">
                <StarRow />
                <Quote />
              </div>

              <p className="text-slate-700 leading-relaxed text-base mb-6 flex-1">
                &ldquo;{story.quote}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-5 border-t border-slate-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white shadow-md shrink-0">
                  <Image
                    src={story.photo}
                    alt={`${story.name} portrait`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-slate-900 text-sm leading-tight">
                    {story.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {story.location} &middot; sold {story.sold}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-slate-400 leading-tight">Got paid</p>
                  <p className="text-base font-extrabold text-brand leading-tight">
                    {story.price}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
