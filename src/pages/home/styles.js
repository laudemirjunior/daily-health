import styled from 'styled-components'
import background from '../../images/background-home.png'
<<<<<<< HEAD
export const Background = styled.div`
    width: 100vw;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width:1024px){
        .container {
            max-width: 1366px;
            width: 100%;
            height: 100%;
            background:url(${background}) no-repeat;
            background-size:contain;
            margin-bottom:3%;
            
          }

          .name_page{
            width: 224px;
            height: 367px;
            margin:25px 7px;
        }
          
    }
    
    
    .name_page span{
        font-weight: bold;
        font-size:50px;
        line-height: 70px;
    }

    .description{
        width: 386px;
        height: 84px;
        margin-right:10%;
        margin-bottom:20%;
        font-size: 26px;
        line-height: 35px;
    }
    .btns{
        margin-top:20%;
    }

    

`
=======
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
>>>>>>> 7ecb4e40943efa78ff131fa874839af2d523975c
