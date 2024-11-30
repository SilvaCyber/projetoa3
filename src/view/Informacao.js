const Informacao = () => {
    return (
        <section className="informacao container">
            <div className="informacao-conteudo">
                <img 
                    src="gato-informacao.png" 
                    alt="Gato ilustrativo" 
                    className="gato-imagem" 
                />
                <div className="informacao-exclamacao">
                    <p>!</p>
                </div>
                <div className="texto-box">
                    <p>
                        A castração de pets é essencial para o controle populacional, prevenindo o abandono e o sofrimento
                        de animais. Além de promover a saúde, reduzindo riscos de doenças e problemas prostáticos, a
                        castração melhora o comportamento, diminuindo agressividade e a vontade de fugir em busca de
                        parceiros. Também contribui para um ambiente mais harmonioso e pode resultar em economia a longo
                        prazo, evitando gastos com filhotes indesejados e tratamentos de saúde. Castrar seu animal é uma
                        escolha responsável que beneficia tanto o pet quanto a sociedade.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Informacao;