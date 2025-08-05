export const OpenEarthAcademyPromo = () => {
  return (
    <section className="py-20">
      <div className="container py-16 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-bold  md:text-4xl">
          Join OpenEarth Academy for $50
        </h2>
      </div>
      <div className="container flex flex-col items-center gap-12 mx-auto md:flex-row">
        {/* Image - left side */}
        <div className="flex justify-center w-full md:w-1/2 md:justify-start">
          <img
            src="/images/IMG_44502.jpeg"
            alt="Group with kayaks on beach"
            className="object-cover w-full max-w-md shadow-lg "
          />
        </div>

        {/* Benefit List - right side */}
        <div className="w-full md:w-1/2">
          <h2 className="mb-8 text-3xl font-semibol">What are the benefits?</h2>
          <ul className="space-y-6 text-left">
            <li className="flex items-start gap-4">
              <span className="mt-1 text-xl text-green-400">🎓</span>
              <span>
                <span className="font-semibold text-green-300">
                  Gain new knowledge
                </span>{" "}
                and skills through our self-guided curriculum that covers
                in-depth climate tech topics.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 text-xl text-purple-300">🧑‍💻</span>
              <span>
                Get access to remote mentor opportunities with climate
                technologists across 14 countries.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 text-xl text-yellow-300">🌱</span>
              <span>
                Receive invites to local nature event opportunities like group
                hikes, paddles, and restoration activities led by Indigenous
                communities.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 text-xl text-pink-400">💡</span>
              <span>
                <span className="font-semibold text-[#f56565]">
                  Support 120+ Indigenous organizations:
                </span>{" "}
                Your support for OpenEarth Academy makes the development and
                implementation of climate technology accessible for 120+
                Indigenous environmental groups.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 text-xl text-red-300">🤝</span>
              <span>
                Make an impact with our growing community of environmental
                partners, industry collaborations, and passionate volunteers.
              </span>
            </li>
          </ul>
          <button className="px-8 py-3 mt-8 text-lg font-semibold text-white bg-gray-400 shadow hover:bg-blue-800">
            Get updates
          </button>
        </div>
      </div>
    </section>
  );
};

export default OpenEarthAcademyPromo;
