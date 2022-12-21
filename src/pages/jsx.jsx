import Layout from "../components/Layout"

export default function Jsx (){
    const titulo = <h1>JSX é um conceito Central</h1>
    function subtitulo() {
        return <h2>{'É muito Legal0'.toUpperCase()}</h2>
    }
    return (
        <Layout titulo="Entendo o JSX ">
             
        <div>
            {titulo}
            {subtitulo()}
            <p>
                {JSON.stringify({nome: 'João', idade: 30})}
            </p>
        </div>
        </Layout>
    )
}