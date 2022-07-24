import PropTypes from 'prop-types';
import styled from 'styled-components';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table class="transaction-history">
      <THead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </THead>

      <TBody>
        {transactions.map(({ id, type, amount, currency }) => (
            <TrItem key={id}>
            <Td>{(type.charAt(0).toUpperCase() + type.slice(1))}</Td>
            <TdAmount>{amount}</TdAmount>
            <Td>{currency}</Td>
          </TrItem>
        ))}
      </TBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired
}
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