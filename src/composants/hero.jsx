function Hero({ id, path, img, name }) {
  const isExternal = path.startsWith("http") || path.startsWith("mailto:");

  return (
    <div className="tooltip">
      <div className="tooltip-content mb-2">
        <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Allez...!</div>
      </div>

      <a
        href={path}
        id={id}
        className="badge badge-neutral border text-white rounded-0 font-bold cursor-pointer py-6 flex items-center gap-2"
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        <img src={img} height={24} width={24} alt={`logo ${name}`} />
        {name}
      </a>
    </div>
  );
}

export default Hero;
