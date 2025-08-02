

function Projet ({titre, lien, description, image, id}){
    return(
        <div className="card bg-base-100 image-full w-96 shadow-sm" id={id}>
            <figure className="max-h-56 overflow-hidden">
                <img
                src={image}
                alt={titre}
                className="object-cover w-full"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{titre}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                <a href={lien} target="_blank" rel="noopener noreferrer">
                <div className="tooltip">
                    <div className="tooltip-content">
                        <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Cliquez</div>
                    </div>
                        <button className="btn bg-sky-900 text-white">Voir</button>
                    </div>
                </a>
                </div>
            </div>
        </div>

    )
}

export default Projet;