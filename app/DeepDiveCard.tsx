type DeepDiveCardProps = {
  image: string;
  alt: string;
  subheader: string;
  subheaderClass?: string;
  header: string;
  summary: string;
};

export const DeepDiveCard = ({
  image,
  alt,
  subheader,
  subheaderClass = "",
  header,
  summary,
}: DeepDiveCardProps) => (
  <div className="bg-white border border-[#a3da8d] rounded shadow flex flex-col items-start hover:shadow-lg transition-shadow duration-300 ">
    <img
      src={image}
      alt={alt}
      className="object-cover w-full h-56 mb-4"
      loading="lazy"
    />
    <div className="h-56 p-4 text-left">
      <p className={`uppercase tracking-wider text-xs mb-1 ${subheaderClass}`}>
        {subheader}
      </p>
      <h4 className="mb-2 text-xl font-bold">{header}</h4>
      <p className="text-gray-600">{summary}</p>
    </div>
  </div>
);
