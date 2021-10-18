import styled from 'styled-components'
import background from '../../images/background-home.png'

export const Container = styled.div`


    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction:column;

    .background{
        width:100%;
        height:53vh;
        background:var(--background);
        clip-path: polygon(0 0, 100% 0, 100% 17%, 0% 100%);    
    }
    
    .name_page{
        width:218px;
        height:181px;
        font-size:1.5rem;
        position: absolute;
        left: 29px;
        top: 69px;

    }

    .description{
        position: absolute;
        width: 286px;
        height: 84px;
        font-size:1.63rem;
        left: 30px;
        top: 284px;

    }

    @media (min-width:1100px){
        width: 100vw;
        height: 100vh;
        .background{
            width:1037px;
            height:1090px;
            background:url(${background}) no-repeat;
            background-size:contain;
            clip-path:none;
            margin-left:15%;
        }
        .name_page{
            width: 324px;
            height: 267px;
            font-size:2rem;
        }
        .description{
            position:absolute;
            left:75%;
        }
    }
`

