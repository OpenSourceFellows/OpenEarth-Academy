export const OpenEarthAcademyPromo = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center py-16">
        <h2 className=" text-3xl md:text-4xl font-bold mb-6">
          Join OpenEarth Academy for $50
        </h2>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image - left side */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/images/IMG_44502.jpeg"
            alt="Group with kayaks on beach"
            className=" shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Benefit List - right side */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibol mb-8">What are the benefits?</h2>
          <ul className="space-y-6 text-left">
            <li className="flex gap-4 items-start">
              <span className="mt-1 text-green-400 text-xl">🎓</span>
              <span>
                <span className="font-semibold text-green-300">
                  Gain new knowledge
                </span>{" "}
                and skills through our self-guided curriculum that covers
                in-depth climate tech topics.
              </span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-1 text-purple-300 text-xl">🧑‍💻</span>
              <span>
                Get access to remote mentor opportunities with climate
                technologists across 14 countries.
              </span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-1 text-yellow-300 text-xl">🌱</span>
              <span>
                Receive invites to local nature event opportunities like group
                hikes, paddles, and restoration activities led by Indigenous
                communities.
              </span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-1 text-pink-400 text-xl">💡</span>
              <span>
                <span className="font-semibold text-pink-200">
                  Support 120+ Indigenous organizations:
                </span>{" "}
                Your support for OpenEarth Academy makes the development and
                implementation of climate technology accessible for 120+
                Indigenous environmental groups.
              </span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="mt-1 text-red-300 text-xl">🤝</span>
              <span>
                Make an impact with our growing community of environmental
                partners, industry collaborations, and passionate volunteers.
              </span>
            </li>
          </ul>
          <button className="mt-8 bg-gray-400 hover:bg-blue-800 text-white text-lg font-semibold  px-8 py-3 shadow">
            Get updates
          </button>
        </div>
      </div>
    </section>
  );
};

export default OpenEarthAcademyPromo;
