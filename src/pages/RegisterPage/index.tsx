import * as S from "./styled";
import { Footer } from "../../components/Footer";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

interface IRegisterFormData {
    nome: string;
    email: string;
    password: string;
    identidadeGenero: string;
    orientacaoSexual: string;
    etnia: string;
    deficiencia: string;
    religiao: string;
    statusSocioeconomico: string;
    idade: string;
    statusMarital: string;
    nacionalidade: string;
    rendaFamiliar: string;
    nivelEducacao: string;
    experienciaMigracaoRefugio: string;
}

export const RegisterPage = () => {

    const { register, handleSubmit } = useForm<IRegisterFormData>();

    const navigate = useNavigate();

    const onSubmit = async (data: IRegisterFormData) => {
        const { email, password } = data;
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <S.Container>
            <S.DivTitle>
                <h1>Corp Solutions</h1>
            </S.DivTitle>
            <S.DivLogin>
                <S.RegisterContainer>
                    <h2>Registre-se</h2>
                    <S.Form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Nome:</label>
                            <input {...register("nome")} type="text" />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input {...register("email")} type="email" />
                        </div>
                        <div>
                            <label>Senha:</label>
                            <input {...register("password")} type="password" />
                        </div>
                        <div>
                            <label>Identidade de Gênero:</label>
                            <select {...register("identidadeGenero")} defaultValue="">
                                <option value="">Selecione...</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                                <option value="naoBinarioTransgenero">Não-binário/Transgênero</option>
                                <option value="generoFluido">Gênero fluido</option>
                                <option value="agenero">Agênero</option>
                                <option value="outroIdentidadeGenero">Outro</option>
                                <option value="prefiroNaoDizerIdentidadeGenero">Prefiro não dizer</option>
                            </select>
                        </div>
                        <div>
                            <label>Orientação Sexual:</label>
                            <select {...register("orientacaoSexual")} defaultValue="">
                                <option value="">Selecione...</option>
                                <option value="heterossexual">Heterossexual</option>
                                <option value="homossexual">Homossexual</option>
                                <option value="bissexual">Bissexual</option>
                                <option value="pansexual">Pansexual</option>
                                <option value="assexual">Assexual</option>
                                <option value="queer">Queer</option>
                                <option value="demissexual">Demissexual</option>
                                <option value="polissexual">Polissexual</option>
                                <option value="outroOrientacaoSexual">Outro</option>
                                <option value="prefiroNaoDizerOrientacaoSexual">Prefiro não dizer</option>
                            </select>
                        </div>
                        <div>
                            <label>Etnia:</label>
                            <select {...register("etnia")} defaultValue="">
                                <option value="">Selecione...</option>
                                <option value="branca">Branca</option>
                                <option value="negra">Negra</option>
                                <option value="indigena">Indígena</option>
                                <option value="parda">Parda</option>
                                <option value="amarelaMestico">Amarela Mestiço(a)</option>
                                <option value="arabe">Árabe</option>
                                <option value="latino">Latino(a)</option>
                                <option value="outroEtnia">Outro grupo étnico específico</option>
                                <option value="prefiroNaoDizerEtnia">Prefiro não dizer</option>
                            </select>
                        </div>
                        <div>
                            <label>Condição de Pessoa com Deficiência (PCD):</label>
                            <select {...register("deficiencia")} defaultValue="">
                                <option value="">Selecione...</option>
                                <option value="deficienciaFisica">Deficiência física</option>
                                <option value="deficienciaVisual">Deficiência visual</option>
                                <option value="deficienciaAuditiva">Deficiência auditiva</option>
                                <option value="deficienciaIntelectual">Deficiência intelectual</option>
                                <option value="transtornoAutista">Transtorno do espectro autista (TEA)</option>
                                <option value="outroDeficiencia">Outro</option>
                                <option value="prefiroNaoDizerDeficiencia">Prefiro não dizer</option>
                            </select>
                        </div>
                        <div>
                            <label>Religião:</label>
                            <select {...register("religiao")} defaultValue="">
                                <option value="">Selecione...</option>
                                <option value="cristao">Cristão</option>
                                <option value="judaico">Judaico</option>
                                <option value="islamico">Islâmico</option>
                                <option value="budista">Budista</option>
                                <option value="hinduista">Hinduísta</option>
                                <option value="sikh">Sikh</option>
                                <option value="outroReligiao">Outro</option>
                                <option value="nenhum">Nenhum</option>
                                <option value="prefiroNaoDizerReligiao">Prefiro não dizer</option>
                            </select>
                        </div>
                        <div>
                            <label>Status Socioeconômico:</label>
                            <select {...register("statusSocioeconomico")} defaultValue="">
                                <option value="">Selecione...</option>
                                <option value="baixaRenda">Baixa renda</option>
                                <option value="classeMedia">Classe média</option>
                                <option value="altaRenda">Alta renda</option>
                                <option value="prefiroNaoDizerSocioeconomico">Prefiro não dizer</option>
                            </select>
                        </div>
                        <div>
                            <label>Idade:</label>
                            <select {...register("idade")} defaultValue="">
                                <option value="">Selecione...</option>
                                <option value="menorDe18">Menor de 18 anos</option>
                                <option value="18a24">18-24</option>
                                <option value="25a34">25-34</option>
                                <option value="35a44">35-44</option>
                                <option value="45a54">45-54</option>
                                <option value="55a64">55-64</option>
                                <option value="65OuMais">65 ou mais</option>
                                <option value="prefiroNaoDizerIdade">Prefiro não dizer</option>
                            </select>
                        </div>
                        <div>
                            <label>Status Marital:</label>
                            <select {...register("statusMarital")} defaultValue="">
                                <option value="">Selecione...</option>
                                <option value="solteiro">Solteiro(a)</option>
                                <option value="casado">Casado(a)</option>
                                <option value="divorciado">Divorciado(a)</option>
                                <option value="viuvo">Viúvo(a)</option>
                                <option value="uniaoEstavel">União Estável</option>
                                <option value="outroStatusMarital">Outro</option>
                                <option value="prefiroNaoDizerStatusMarital">Prefiro não dizer</option>
                            </select>
                        </div>
                        <div>
                            <label>Nacionalidade:</label>
                            <select {...register("nacionalidade")} defaultValue="">
                                <option value="">Selecione...</option>
                                <option value="nacionalidade">Nacionalidade</option>
                                <option value="estrangeiro">Estrangeiro(a)</option>
                                <option value="prefiroNaoDizerNacionalidade">Prefiro não dizer</option>
                            </select>
                        </div>
                        <div>
                            <label>Renda Familiar:</label>
                            <select {...register("rendaFamiliar")} defaultValue="">
                                <option value="">Selecione...</option>
                                <option value="menosDe1000">Menos de R$ 1.000</option>
                                <option value="1000a2000">R$ 1.000 - R$ 2.000</option>
                                <option value="2001a3000">R$ 2.001 - R$ 3.000</option>
                                <option value="3001a5000">R$ 3.001 - R$ 5.000</option>
                                <option value="5001a10000">R$ 5.001 - R$ 10.000</option>
                                <option value="acimaDe10000">Acima de R$ 10.000</option>
                                <option value="prefiroNaoDizerRenda">Prefiro não dizer</option>
                            </select>
                        </div>
                        <div>
                            <label>Nível de Educação:</label>
                            <select {...register("nivelEducacao")} defaultValue="">
                                <option value="">Selecione...</option>
                                <option value="ensinoFundamental">Ensino Fundamental</option>
                                <option value="ensinoMedio">Ensino Médio</option>
                                <option value="graduacao">Graduação</option>
                                <option value="posGraduacao">Pós-graduação</option>
                                <option value="outroNivelEducacao">Outro</option>
                                <option value="prefiroNaoDizerEducacao">Prefiro não dizer</option>
                            </select>
                        </div>
                        <div>
                            <label>Experiência de Migração ou Refúgio:</label>
                            <select {...register("experienciaMigracaoRefugio")} defaultValue="">
                                <option value="">Selecione...</option>
                                <option value="migrante">Migrante</option>
                                <option value="refugiado">Refugiado</option>
                                <option value="filhoDeImigranteRefugiado">Filho(a) de imigrante/refugiado</option>
                                <option value="outroExperienciaMigracaoRefugio">Outro</option>
                                <option value="prefiroNaoDizerMigracaoRefugio">Prefiro não dizer</option>
                            </select>
                        </div>
                        <input type="submit" value="Enviar" />
                        <Button text="VOLTAR" to={"/login"}/>
                    </S.Form>
                </S.RegisterContainer>
                <Footer />
            </S.DivLogin>
        </S.Container>
    );
};