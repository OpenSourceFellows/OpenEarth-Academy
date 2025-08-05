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
  <div className="bg-white border border-green-500 rounded shadow flex flex-col items-start">
    <img
      src={image}
      alt={alt}
      className="mb-4 w-full h-40 object-cover"
      loading="lazy"
    />
    <div className="p-4 text-left">
      <p className={`uppercase tracking-wider text-xs mb-1 ${subheaderClass}`}>
        {subheader}
      </p>
      <h4 className="text-xl font-bold mb-2">{header}</h4>
      <p className="text-gray-600">{summary}</p>
    </div>
  </div>
);
