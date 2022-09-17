import styled from 'styled-components'
import { GiTrashCan, GiCheckMark } from "react-icons/gi";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ToDoList = styled.div`
    background-color: #FFF;
    padding: 20px;
    border-radius: 5px;

`
export const InputTask = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    
    input{
        width: 300px;
        height: 40px;
        border: 2px solid #C3C3C3;
        border-radius: 4px;
        padding-left: 10px;
    }
    button{
        width: 130px;
        height: 40px;
        background: #8052EC;
        border-radius: 5px;
        border: none;
        font-weight: 900;
        font-size: 17px;
        line-height: 2px;
        color: #FFFFFF;
        cursor: pointer;
        &:hover{
            opacity: 0.8;
        }
        &:active{
            opacity: 0.6;
        }
    }
`
export const Task = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: ${props => props.isFinished ? "#E8FF8B" : "#E4E4E4"};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin-bottom: 20px;
`
export const Trash = styled(GiTrashCan)`
    cursor: pointer;
`
export const Check = styled(GiCheckMark)`
    cursor: pointer;
`
