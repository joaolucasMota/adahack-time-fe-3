import { Button } from "../Button";
import { InputComponent } from "../Input";
import * as S from "./styled";
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  nome: string;
  anonimo: boolean;
  descricao: string;
  nivelInclusao: string;
  nivelDiversidade: string;
  apoioPCDs: boolean;
}

export const FeedbackForm: React.FC = () => {
  const [dadosFormulario, setDadosFormulario] = useState<FormData>({
    nome: '',
    anonimo: false,
    descricao: '',
    nivelInclusao: 'regular',
    nivelDiversidade: 'regular',
    apoioPCDs: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    // Verificando se o tipo do elemento é um checkbox
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
  
    setDadosFormulario(prevDados => ({
      ...prevDados,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Dados do formulário:", dadosFormulario);
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <label>
          <div>
              Nome:
          </div>
          <InputComponent type="text" value={dadosFormulario.nome} onChange={handleChange} />
        </label>
        <label>
          Anônimo:
          <input type="checkbox" name="anonimo" checked={dadosFormulario.anonimo} onChange={handleChange} />
        </label>
        <label>
          <div>
           Descrição do Feedback:
          </div>
          <textarea name="descricao" value={dadosFormulario.descricao} onChange={handleChange} />
        </label>
        <label>
          Nível de Inclusão:
          <select name="nivelInclusao" value={dadosFormulario.nivelInclusao} onChange={handleChange}>
            <option value="alto">Alto</option>
            <option value="regular">Regular</option>
            <option value="baixo">Baixo</option>
          </select>
        </label>
        <label>
          Nível de Diversidade:
          <select name="nivelDiversidade" value={dadosFormulario.nivelDiversidade} onChange={handleChange}>
            <option value="alto">Alto</option>
            <option value="regular">Regular</option>
            <option value="baixo">Baixo</option>
          </select>
        </label>
        <label>
          Apoio a PCDs:
          <input type="checkbox" name="apoioPCDs" checked={dadosFormulario.apoioPCDs} onChange={handleChange} />
        </label>
        <Button text="Enviar" to={""} />
      </S.Form>
    </S.Container>
  );
};