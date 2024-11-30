const Recursos = () => {
    return (
        <section id="sobre" className="recursos container">
            <div className="recurso-conteudo">
                <div className="recurso">
                    <h2>1. PARA TODOS</h2>
                    <p>
                        Por aqui, atendemos todos os pets, do maior ao menor! Cuidaremos dele de acordo com suas características, 
                        que são únicas.
                    </p>
                </div>
                <div className="recurso">
                    <h2>2. PRODUTOS ÚNICOS</h2>
                    <p>
                        Selecionamos produtos eco-friendly, desde ração orgânica até acessórios feitos de materiais recicláveis. 
                        Cada compra contribui para um mundo mais sustentável :)
                    </p>
                </div>
                <div className="recurso">
                    <h2>3. ATENDIMENTO PERSONALIZADO</h2>
                    <p>
                        Por aqui atendemos o seu pet com o maior cuidado possível! Nós o avaliamos e daremos tudo o que ele 
                        precisa, um verdadeiro paraíso para os animais!
                    </p>
                </div>
            </div>
            <div className="recurso-imagem">
                <img 
                    src="cachorro-recurso.png" 
                    alt="Cachorro ilustrativo" 
                    className="cachorro-imagem" 
                />
            </div>
        </section>
    );
};

export default Recursos;
