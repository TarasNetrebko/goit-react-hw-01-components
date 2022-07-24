import PropTypes from 'prop-types';
import styled from 'styled-components';
import { randomColor } from 'utils';

export const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <h2>{title.toUpperCase()}</h2>}
      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id} style={{ backgroundColor: randomColor() }}>
              <Label>{label}</Label>
              <span>{percentage}</span>
            </Item>
          );
        })}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

const Item = styled.li`
  width: calc(100% / 5);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 0;
`;
const List = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  width: 100%;
`;
const Section = styled.section`
  margin-top: 50px;
  background-color: #99cde6;
  width: 516px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 4px 11px 3px rgba(0,0,0,0.66);
`;
const Label = styled.span`
  margin-bottom: 5px;
`;
