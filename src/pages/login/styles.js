import styled from "styled-components";

export const Form = styled.form`
       
        display: flex;
        background-color: var(--white);
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 85vw;
        width: 85vw;
        border-radius: 10px;
        box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);

        p{
            font-size: 13px;
            margin-top: 12px;
        }

        a{
            text-decoration:none;
        }

        button{
            margin-top: 16px;
        }
    

    @media screen and (min-width: 768px){
        display: flex;
        background-color: var(--white);
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 33vw;
        max-height: 300px;
        width: 43.5vw;
        max-width: 400px;
        border-radius: 10px;
    
       
        p{
            font-size: 15px;
            margin-top: 16px;
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
            /* line-height: 98px; */
        }

        nav{
            color: var(--white);
            font-style: normal;
            font-weight: bold;
            margin-bottom: 0;
            width: 100%;
            height: 7%;
            font-size: 7vw;
            line-height: 50px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            background-color: var(--bar);

            h3{
                margin-left: 5px;   
            }
        }
      
 @media screen and (min-width: 768px){
        clip-path: none;
        display: flex;
        background-color: var(--background);
        /* justify-content: center; */
        align-items: center;
        flex-direction: column;
        height: 100vh;
        width: 50vw;

        h1{
            color: var(--white);
            font-style: normal;
            font-weight: bold;
            margin-top: 75px;
            margin-bottom: 50px;
            font-size: 6.5vw;
            line-height: 98px;
        }

        nav{
            margin-bottom: 50px;
            width: 90%;
            height: 15%;
            font-size: 2vw;
            text-align: end;
            background-color: var(--background);
            box-shadow: none;
            line-height: 98px;

            h3{

            }
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