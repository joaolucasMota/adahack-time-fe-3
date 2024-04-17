import * as S from "./styled";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { useNavigate } from "react-router-dom";

interface ILoginProps{
    email: string;
    password: string;
}

export const LoginPage = () => {

    const { register, handleSubmit } = useForm<ILoginProps>();
    const navigate = useNavigate();

    const onSubmit = async (data: ILoginProps) => {
        const { email, password } = data;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/home');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <S.Container>
            <S.DivTitle>
                <h1>Corp Solutions</h1>
            </S.DivTitle>
            <S.DivLogin>
                <S.LoginContainer>
                    <h2>Boas vindas</h2>
                    <S.Form onSubmit={handleSubmit(onSubmit)}>
                        <S.Input type="email" placeholder="Email:" {...register("email")} />
                        <S.Input type="password" placeholder="Senha:" {...register("password")} />
                        <S.RememberPassword>
                            <a>Esqueci minha senha</a>
                        </S.RememberPassword>
                        <input value="ENTRAR" type="submit" />
                    </S.Form>
                    <S.Divider />
                    <S.NewAccount>
                        <h3>
                            Ainda não possui conta?
                        </h3>
                        <p>
                            É fácil, clique no botão a baixo e crie sua conta:
                        </p>
                        <Button text="Criar conta" to="/register" />
                    </S.NewAccount>
                </S.LoginContainer>
                <Footer />
            </S.DivLogin>
        </S.Container>
    );
};