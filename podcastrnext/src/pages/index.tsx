//qualquer projeto react
// SPA single page application
// import { useEffect } from "react"

//only next
// SSR server side rendering
//getServerSideProps

//SSG static side generation -> versão estática para todos que acessarem pós uma primeira vez em um intervalo de tempo x
//getStaticProps

export default function Home(props) {
  //usando aqui ele n tem index do google, ou seja, ele precisa carregar os dados quando o user entrar (SPA)
  // useEffect(() => {
  //   fetch('http://localhost:3333/episodes')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }, []) // [] faz ele disparar uma única vez quando aparecer em tela

  console.log(props.episodes)

  return (
    <h1>Index</h1>
  )
}

//nome default da function => pega as propriedades do servidor
//executa sempre que alguém entra na home
// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3333/episodes')
//   const data = await response.json()

//   return {
//     props: {
//       episodes: data
//     }
//   }
// }

//executa só a primeira vez que alguém entrar na página, após isso ele mantém os dados de forma estática
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data
    },
    revalidate: 60 * 60 * 8 // intervalo entre a atualização de dados
  }
}