import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";

type Cliente = {
    nome: string;
    idade: number;
    uf: string;
}

type Estado = {
    sigla: string;
}

function Form() {

        const [estados, setEstados] = useState<Estado[]>([]);

        const [cliente, setClient] = useState<Cliente>({
            nome: "",
            idade: 0,
            uf: "PB"
        });

        useEffect(() =>{
            axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
            .then(response => setEstados(response.data))
        }, [])


        function handNameChange(event: React.ChangeEvent<HTMLInputElement>){
            
            setClient({...cliente, nome: event.target.value});

        }

        function handAgeChange(event: React.ChangeEvent<HTMLInputElement>){
            setClient({...cliente, idade: parseInt(event.target.value) });
        }

        function handUFChange(event: React.ChangeEvent<HTMLSelectElement>) {
            setClient({...cliente, uf: event.target.value});
        }

    function btnSalvarClick(){
    alert(
        'Nome: ' + cliente.nome + '\n' +
        'Idade: ' + cliente.idade + '\n' +
        'UF: ' + cliente.uf + '\n\n' +
        'Dados Salvos com Sucesso!'
        )}
     return (
        <>
        <Header title="Formulário" />
                <div>
                <form>
                    <fieldset>
                        <legend>
                            <h2>Dados de Cadastro</h2>
                        </legend>
                        <div>
                            <label>Nome:
                                <input type="text" id="name" onChange={handNameChange} value={cliente.nome}/>
                            </label>
                        </div>
                        <div>
                            <label>Idade:
                                <input type="number" id="idade" onChange={handAgeChange} value={cliente.idade}/>
                            </label>
                            <div>
                            <label>UF:
                                <select id="uf" onChange={handUFChange} value={cliente.uf}>
                                    {
                                        estados.map(estado => (<option value={estado.sigla}>{estado.sigla}</option>))
                                    }
                                </select>
                            </label>
                        </div>
                        </div>
                        <button type="button" onClick={btnSalvarClick}>Salvar Cadastro</button>
                    </fieldset>
                </form>
        </div>
        </>

     )
}

export default Form;