import PropTypes from 'prop-types';
import { Table, THead, TBody, Tr, Th, TrItem, Td, TdAmount } from "./TransactionHistory.styled"

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
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