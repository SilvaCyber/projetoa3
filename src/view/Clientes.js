const Clientes = () => {
    return (
        <section id="clientes" className="clientes container">
        <div className="cliente">
            <img src="cliente1-imagem.png" alt="" />
            <div className="cliente-conteudo">
                <h2>Atendimento diferenciado!</h2>
                <p>"Jamais fui atendido dessa forma em um local, muito menos o meu cão! kkkkkkkkk"</p>
                <p>Ficamos muito felizes com o tratamento, desde a recepção, até os especialistas</p>
            </div>
        </div>

        <div className="cliente">
            <img src="cliente2-imagem.png" alt="" />
            <div className="cliente-conteudo">
                <h2>Excelente</h2>
                <p>"Resgatei um gato da rua e adotei. Ele estava meio 'selvagem'. Após a castração, ele melhorou muito!"</p>
            </div>
        </div>

        <div className="cliente">
            <img src="cliente3-imagem.png" alt="" />
            <div className="cliente-conteudo">
                <h2>Showw</h2>
                <p>"Assinei o plano ouro e digo: está valendo cada centavo, recomendo bastante!"</p>
            </div>
        </div>

        <div className="cliente">
            <img src="cliente4-imagem.png" alt="" />
            <div className="cliente-conteudo">
                <h2>Muito bom</h2>
                <p>"Excepcional o serviço de adestramento, até então, 3 sessões realizadas e o meu gato já está com o comportamento muito melhor!"</p>
            </div>
        </div>
    </section>        
    );
};

export default Clientes;
