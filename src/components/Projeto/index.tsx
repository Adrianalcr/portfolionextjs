import Carousel from 'react-elastic-carousel';
import TitulosSec from '../TitulosSec';
import ProjetosItens from './ProjetosItens';
import { Container } from './styles';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
    { ItemPadding: [0, 10]}
  ];

function Projetos() {
    return (
        <>
            <Container data-aos="fade-up">
                <TitulosSec titulo1="Portifólio" descricao1="Projetos" />
                <section>
                    <Carousel  breakPoints={breakPoints}>
                        <ProjetosItens skills="Cliente1" titulo2="www.seucliente.com.br" />
                        <ProjetosItens skills="Cliente2" titulo2="www.seucliente.com.br" />
                        <ProjetosItens skills="Cliente3" titulo2="www.seucliente.com.br" />
                        <ProjetosItens skills="Cliente4" titulo2="www.seucliente.com.br" />
                        <ProjetosItens skills="Cliente5" titulo2="www.seucliente.com.br" />
                        <ProjetosItens skills="Cliente6" titulo2="www.seucliente.com.br" />
                    </Carousel>
                </section>                
            </Container>
        </>
    )
}
export default Projetos;