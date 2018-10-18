import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FilterItem } from './filterItem';
import { filterShape } from '../propTypes';
import styles from './filterList.scss';

const cx = classNames.bind(styles);

export const FilterList = ({ filters, activeFilterId, onSelectFilter, onRemoveFilter }) => (
  <div className={cx('filter-list')}>
    {filters.map((filter) => (
      <div key={filter.id} className={cx('item')}>
        <FilterItem
          name={filter.name}
          description={filter.description}
          active={filter.id === activeFilterId}
          share={filter.share}
          onClick={() => onSelectFilter(filter.id)}
          onRemove={() => onRemoveFilter(filter.id)}
        />
      </div>
    ))}
  </div>
);
FilterList.propTypes = {
  filters: PropTypes.arrayOf(filterShape),
  activeFilterId: PropTypes.string,
  onSelectFilter: PropTypes.func,
  onRemoveFilter: PropTypes.func,
};
FilterList.defaultProps = {
  filters: [],
  activeFilterId: null,
  onSelectFilter: () => {},
  onRemoveFilter: () => {},
};
