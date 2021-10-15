import styled from 'styled-components'
import background from '../../images/background-home.png'
export const Container = styled.div`
    @media (min-width:1024px){
         nav{
            background:var(--bar);
            height: 50px;
        }
    }
       

`
export const Content = styled.div`
    @media (min-width:1024px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1336px;

        .background{
            background: url(${background}) no-repeat center;
            background-size: contain;
            width: 1037px;
            height: 1090px;
        }
    }
        .name_page{
            width: 424px;
            height: 367px;
            font-size: 84px;
            font-weight: bold;
        }

        .inicio{
            width: 286px;
            height: 84px;
            font-size: 26px;
            font-weight: 400px;
        }

        .login_sign{
            display: flex;
            flex-direction: column;
            margin-top: 30px;
        }

        .login_sign span{
            font-size: 22px;
        }

        
`
