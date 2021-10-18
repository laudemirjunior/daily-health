import styled from "styled-components";

export const Form = styled.form`
       
        display: flex;
        background-color: var(--white);
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 500px;
        width: 85vw;
        max-width: 375px;
        border-radius: 10px;
        box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);

        p{
            font-size: 13px;
            margin-top: 12px;
            text-align: center;
        }

        a{
            text-decoration:none;
        }

        button{
            margin-top: 20px;
        }

        .error{
            margin: 0 auto;
            font-size: 11px;
            width: 256px;
            height: 14px;
            color: red;
            padding-bottom: 18px;
        }
    

    @media screen and (min-width: 768px){

        width: 43.5vw;
        border-radius: 10px;
       
        p{
            font-size: 15px;
            margin-top: 16px;
        }

        .error{
            margin: 0 auto;
            font-size: 11px;
            height: 14px;
        }
        
    }
`
export const Poligon = styled.div`

    position: absolute;
    background-color: var(--background);
    left: 0px;
    z-index: -1;
    height: 100vh;
    width: 100vw;
    border-color: green;
    clip-path: polygon(0 0, 100% 0, 100% 125vw, 0 20%);
    @media screen and (min-width: 500px){
        clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 20%);
    }
    @media screen and (min-width: 768px){
        display: none;
    }    

`
export const Countainer = styled.div`

    z-index: 1;
    background-color: transparent;
    height: 100vh;
    width: 100vw;
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    input{
        background-color: white;
        border-radius: 6px;
    }

    h1{
        color: var(--white);
        font-style: normal;
        font-weight: bold;
        margin-bottom: 25px;
        margin-top: 20px;
        font-size: 57px;
    }
    
    @media screen and (min-width: 768px){

        background-color: var(--background);
        height: 100vh;
        width: 50vw;

        h1{
            margin-top: 50px;
            margin-bottom: 25px;
            font-size: 6.5vw;
            line-height: 98px;
        }
    }
`

export const Animate_div = styled.div`

    display: none;
     
    @media screen and (min-width: 768px){
        display: flex;
        background-color: var(--white);
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        width: 50vw;
    }
   
`