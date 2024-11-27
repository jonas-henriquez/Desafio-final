import S from "./inicio.module.scss"
import read from '../../assets/read.png'
import network from '../../assets/network.png'
import balance from '../../assets/balance.png'
import transform from '../../assets/transform.png'


export default function inicio() {
  return (
    <main>
      <section className={S.post}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={S.devoDoar}>
        <div>
          <h2>Por que devo doar?</h2>
        </div>
        <section className={S.boxCard}>
          <article>
            <img src={network} alt="imagem de pessoas se conectando" />
            <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
          </article>
          <article>
            <img src={read} alt="imagem de uma pessoa lendo" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </article>
          <article>
            <img src={transform} alt="imagem de varias pessoas unidas por uma causa" />
            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
          </article>
          <article>
            <img src={balance} alt="imagem de uma balança" />
            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
          </article>
        </section>
      </section>
    </main>
  )
}