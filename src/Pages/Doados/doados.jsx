import S from "./doados.module.scss"
import livro from "../../assets/livro.png"
import axios from 'axios'
import {useState,useEffect} from 'react'

export default function Doados() {

  const [livros, setLivros] = useState([])

  const getLivros = async () => {
    try{
        const response = await axios.get("https://api-livros-dy7z.onrender.com/livros")
        setLivros(response.data)
    } catch (error){
        console.error("Erro ao buscar livros:", error)
    }
  }

  
  useEffect(()=>{
      getLivros()
  },[])


  return (
    <section className={S.boxDoados}>
      <h2>LIVROS DOADOS</h2>
      <section className={S.boxBooks}>
        <article>
          <img src={livro} alt="imagem do livro o protagonista" />
          <h3>O protagonista</h3>
          <p>Susanne Andrade</p>
          <p>Ficção</p>
        </article>
        {livros.map((item)=>(
          <article key={item.id}>
            <img src={item.image_url} alt="" />
            <h3>{item.titulo}</h3>
            <p>{item.categoria}</p>
            <p>{item.autor}</p>
          </article>

        ))} 


      </section>
    </section>
  )
}
