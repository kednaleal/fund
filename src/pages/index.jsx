import Layout from '../components/Layout'
import Link from 'next/link'
import Navegador from '../components/Navegador'

export default function Inicio(){
  return(
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'

    }}>
      <Navegador texto="Estiloso" destino="/estiloso" />
      <Navegador texto =" JSX" destino="/jsx" cor="crimson" />
      <Navegador texto = "Navegação #01" destino= "/navegacao/ " cor="green" />
      <Navegador texto = "Navegação Dinâmica" destino = "/cliente/123" cor="pink"/>
      <Navegador texto = "Componente com Estado" destino = "/estado" cor="yellow"/>
      <Navegador texto = "Integração com API" destino = "/integracao" cor="blue"/>
        
    </div>
  )
}

