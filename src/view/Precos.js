const Precos = () => {
    return (
        <section id="mensalidades" className="precos container">
            <h2>JUNTE-SE A CENTENAS DE CLIENTES SATISFEITOS!</h2>
            <div className="planos">
                <div className="plano">
                    <h3>Pata Platina</h3>
                    <p>R$399,00/mês</p>
                    <ul>
                        <li>4 banho e tosa por mês</li>
                        <li>Avaliação veterinária mensal</li>
                        <li>Atividades recreativas</li>
                        <li>Adestramento avançado</li>
                        <li>Desconto de 15% na loja</li>
                    </ul>
                    <button>Assinar</button>
                </div>
                <div className="plano">
                    <h3>Pata Azul</h3>
                    <p>R$299,00/mês</p>
                    <ul>
                        <li>3 banho e tosa por mês</li>
                        <li>Avaliação veterinária semestral</li>
                        <li>Adestramento básico</li>
                        <li>Desconto de 5% na loja</li>
                    </ul>
                    <button>Assinar</button>
                </div>
                <div className="plano">
                    <h3>Pata Verde</h3>
                    <p>R$299,00/mês</p>
                    <ul>
                        <li>2 banho e tosa por mês</li>
                        <li>Avaliação veterinária anual</li>
                        <li>Adestramento (experimental)</li>
                        <li>Desconto de 2% na loja</li>
                    </ul>
                    <button>Assinar</button>
                </div>
            </div>
        </section>
    );
};

export default Precos;
