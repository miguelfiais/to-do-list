import styled from 'styled-components'
import { FaRegCheckSquare, FaTrash} from "react-icons/fa";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    h1{
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 36px;
        line-height: 42px;
        text-align: center;
        letter-spacing: -0.045em;
        color: #333333;
        margin-bottom: 40px;
    }
    @media (max-width: 620px) {
        h1{
            font-size: 24px;
        }
    }
`
export const ToDoList = styled.div`
    max-width: 600px;
    width: 100%;
    background-color: #FFF;
    padding: 20px;
    border-radius: 5px;

`
export const InputTask = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    input{
        width: 80%;
        height: 56px;
        border: 1px solid #BDBDBD;
        border-radius: 12px;
        padding-left: 10px;
    }
    button{
        width: 20%;
        height: 56px;
        background: #2F80ED;
        box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
        border-radius: 12px;
        border: none;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
        cursor: pointer;
        &:hover{
            opacity: 0.8;
        }
        &:active{
            opacity: 0.6;
        }
    }
    @media (max-width: 620px) {
        gap: 10px;
        input, button{
            height: 40px;
        }
        button{
            font-weight: 500;
            font-size: 12px;
        }
    }
`
export const Task = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    text-decoration: ${props => props.isFinished ? "line-through" : "none"};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
`
export const Trash = styled(FaTrash)`
    width: 20px;
    height: 20px;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`
export const Check = styled(FaRegCheckSquare)`
    width: 20px;
    height: 20px;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
`

