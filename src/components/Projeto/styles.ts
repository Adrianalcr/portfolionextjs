import styled from "styled-components";

export const Container = styled.section`
    width: 100%;

    > section{
        width: 100%;
        margin-top: 7rem;
        display: flex;
        gap: 1.5rem;

        padding-bottom: 8rem;
        border-bottom: 3px solid ${({ theme }) => theme.primary}; 
        
        @media(max-width: 1000px){
            gap: 1rem;
        }

        @media(max-width: 700px){
            flex-direction: column;
            margin-top: 5rem;
            gap: 2rem;
        }
    }

`;

export const ItemContainer = styled.div`
    > div{
        background: ${({ theme }) => theme.gradient};
        padding: 1.5rem;
        padding-top: 2rem;
        height: 20rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: center;
        justify-content: center;

        transition: 0.5s;

        img {
            width: 100%;
            height: auto;
            align-items: center;
            object-fit: contain;
        }

        h1{
            color: ${({ theme }) => theme.primary};
            font-size: 2rem;
            margin-bottom: 1.5rem;
        }

        p{
            color: ${({ theme }) => theme.textLight};
            font-size: 1rem;
            font-weight: 300;
        }
    }

    &:hover > div {
        filter: brightness(1.3);
        transform: translateY(-20px);
    }

    &:nth-child(even) > div{
        margin-top: 4rem;
    }


    @media(max-width: 1000px){
        > div{
            height: 15rem;
            padding-top: 1rem;

            h1{
                font-size:  1.2rem;
                margin-bottom: 1rem;
                text-align: center;
            }
    
            p{
                font-size:  0.9rem;
                text-align: center;
            }
        }

    }

    @media(max-width: 700px){
        &:nth-child(even) > div{
            margin-top: 0;
        }

        &:hover > div {
            transform: translateY(0);
        }

        > div{
            height: auto;
            padding: 2rem;

            h1{
                font-size:  2rem;
            }
    
            p{
                font-size:  1rem;
            }
        }
    }
`;