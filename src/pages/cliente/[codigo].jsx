import Layout from "../../components/Layout";
import {  useRouter } from "next/router";
import { useEffect } from "react";

export default function ClienteProCodigo(){
    const router = useRouter()
    
    useEffect(() => {
        console.log(router.query.codigo)

    }, [])
    return(
        <Layout titulo = "Navegação Dinâmica">
            <span>
              Código = {router.query.codigo}
            </span>

        </Layout>
    )
}