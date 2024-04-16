import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { InputComponent } from "../../components/Input";
import { Container, DivLogin, DivTitle, Divider, LoginContainer, NewAccount, RememberPassword, StyledInputComponent, Bottom } from "./styled";


export const LoginPage = () => {


    return (
        <Container>
            <DivTitle>
                <h1>Corp Solutions</h1>
            </DivTitle>


            <DivLogin>
                <LoginContainer>

                    <h2>Boas vindas</h2>
                    <StyledInputComponent type="email" placeholder="Email:" />
                    <InputComponent type="password" placeholder="Senha:" />
                    <RememberPassword>
                        <a>Esqueci minha senha</a>
                    </RememberPassword>
                    <Button text="ENTRAR" to={""} />
                    <Divider />

                    <NewAccount>
                        <h3>
                            Ainda não possui conta?
                        </h3>

                        <p>
                            É fácil, clique no botão a baixo e crie sua conta:
                        </p>

                        <Button text="Criar conta" to="/register" />
                    </NewAccount>

                </LoginContainer>

                <Bottom>
                    <Footer />
                </Bottom>

            </DivLogin>

        </Container>
    );
};