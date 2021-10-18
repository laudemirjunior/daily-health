import styled from 'styled-components'

export const Content = styled.div`
        height:100vh;
        width:100%;

        .content{
            background: var(--background);
            box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
            position: absolute;
            width: 92%;
            height:88%;
            left: 14px;
            top: 63px; 
        }
        .cabecalho{
            margin: 33px 24px 24px;
            width: 267px;
            height: 47px;
            font-size: 18px;
        }
        .text{
            width: 84%;
            height: 85%;
            border:3px solid black;
        }
        @media (min-width:769px){
            .content{
                position: relative;
                top: 10%;
                left: 15%;
                width: 72%;
                height: 69%;
            }
            
            
        }
    
`
