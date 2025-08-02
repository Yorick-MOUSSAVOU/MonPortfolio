
function Hero ({id, path, img, name}){
    return(
        
        <div className="tooltip">
            <div className="tooltip-content">
                <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Allez...!</div>
            </div>
            <a href={path} className="badge badge-neutral border text-white rounded-0 font-bold cursor-pointer py-6" id={id}>
                <img src={img} height={24} width={24} alt="logo github" />
                {name}
            </a>
        </div>     
    )
}

export default Hero;