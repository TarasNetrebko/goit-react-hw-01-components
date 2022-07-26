import styled from 'styled-components';

const Table = styled.table`
    min-width: 516px;
    margin-top: 50px;
    background-color: white;
    border-collapse: collapse;
    border-radius: 5px;
`
const THead = styled.thead`
    width: 100%;
    background-color: #56c8e1;
    color: white;
`
const TBody = styled.tbody`
    width: 100%;
`
const Tr = styled.tr`
    margin: 0;
    padding: 0;
`
const Th = styled.th`
    width: calc(100% / 3);
    margin: 0;
    padding: 10px;
    padding-left: 40px;
    text-align: start;
    border: 1px solid white;
`
const TrItem = styled.tr`
    &:nth-child(2n) {
        background-color: #E5E5E5;
    }
`
const Td = styled.td`
width: calc(100% / 3);
    padding: 10px;
    padding-left: 40px;
    text-align: start;
    color: #7a7a7a;
    border: 1px solid #ebebeb;
`
const TdAmount = styled.td`
    padding: 10px;
    padding-right: 50px;
    text-align: start;
    color: #7a7a7a;
    border: 1px solid #ebebeb;
    text-align: end;
`
export { Table, THead, TBody, Tr, Th, TrItem, Td, TdAmount };