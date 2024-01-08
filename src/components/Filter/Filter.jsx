import { FilterLabel, FilterField } from 'components/Filter/Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(state => state.filter.value);
  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value.trim()));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterField
        type="text"
        value={filterName}
        onChange={changeFilter}
      ></FilterField>
    </FilterLabel>
  );
};
