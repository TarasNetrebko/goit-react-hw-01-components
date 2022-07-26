import PropTypes from 'prop-types';
import { randomColor } from 'utils';
import { Item, List, Section, Label } from "./Statistics.styled"

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
