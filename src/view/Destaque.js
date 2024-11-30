const Destaque = () => {
    return (
        <section  id="home" className="destaque container">
            <div className="destaque-conteudo">
                <div className="texto-destaque">
                    <h1>
                        CONHEÇA O <span className="destaque-texto">MELHOR</span> PETSHOP DA REGIÃO!
                    </h1>
                </div>
                <div className="imagem-destaque">
                    <img 
                        src="cachorro-destaque.png" 
                        alt="Cachorro destaque" 
                        className="destaque-imagem" 
                    />
                </div>
            </div>
        </section>
    );
};

export default Destaque;
