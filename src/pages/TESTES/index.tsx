// import { EmpresaProps } from "../../@types/types";
// import { useEffect, useState } from "react";
// import { BASE_URL } from "../../util/api";
// import * as S from "./styled";
// import axios from "axios";

// import { NewFeedbackButton } from "../../components/NewFeedbackButton";
// import { SectionHeader } from "../../components/SectionHeader";
// import { Header } from "../../components/Header";
// import { Footer } from "../../components/Footer";
// import { CompanyCard } from "../../components/CompanyCard";
// import { Button } from "../../components/Button";
// import { InputComponent } from "../../components/Input";
// import { TagComponent } from "../../components/TagComponent";
// import { CardVagas } from "../../components/CardVagas";

// export const TestComponentPage = () => {

//     const [CompanyData, setCompanyData] = useState<EmpresaProps[]>([]);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await axios.get(BASE_URL);
//                 setCompanyData(response.data);
//             } catch (error) {
//                 console.log("Erro na requisição:", error);
//             }
//         } 
//         fetchData();
//     }, [CompanyData]);

//     return (
//         <>
//             <Header />
//             <SectionHeader 
//                 page="settings"
//                 mainText="Página de Testes"
//                 subText="Página onde esta é testado os componentes criados"
//             />
//             <br />
//             <S.PageContainer>
//                 <p>Hello World</p>
//             </S.PageContainer>
//             <br />
//             {CompanyData.slice(0, 3).map(empresa => <CompanyCard key={empresa.nome} empresa={empresa} />)}
//             <br />
//             <TagComponent variant="PCDs" textSize="medium" text="Está empresa possui vagas para PCDs" />
//             <br />
//             <NewFeedbackButton />
//             <br />
//             <Button text="Texto do botão" to="/" />
//             <InputComponent type="password"/>
//             <InputComponent type="email"/>
//             <InputComponent type="text"/>
//             <br />
//             { CompanyData.slice(0, 1).map( empresa => empresa.vagas.map( vagas => <CardVagas vaga={vagas} /> ) )}
//             <Footer />
//         </>
//     )
// }
