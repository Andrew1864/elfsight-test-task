import styled from 'styled-components';
import { useState } from 'react';
import { useData } from '../providers/DataProvider';

export function FilterHeader() {
  const { setApiURL } = useData();
  const [filters, setFilters] = useState({
    status: '',
    gender: '',
    species: '',
    name: '',
    type: ''
  });

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value
    }));
  };

  const applyFilters = () => {
    console.log('Apply filters clicked');

    const baseURL = 'https://rickandmortyapi.com/api/character/';
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value.trim()) {
        params.append(key, value);
      }
    });

    const filteredURL = params.toString()
      ? `${baseURL}?${params.toString()}`
      : baseURL;

    console.log('Filtered URL:', filteredURL);
    setApiURL(filteredURL);
  };

  const resetFilters = () => {
    setFilters({
      status: '',
      gender: '',
      species: '',
      name: '',
      type: ''
    });

    const baseURL = 'https://rickandmortyapi.com/api/character/';
    setApiURL(baseURL);
  };

  return (
    <FilterContainer>
      <FilterRow>
        <FilterGroup>
          <FilterLabel>Status</FilterLabel>
          <FilterSelect
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
          >
            <option value="">All</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Gender</FilterLabel>
          <FilterSelect
            value={filters.gender}
            onChange={(e) => handleFilterChange('gender', e.target.value)}
          >
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Species</FilterLabel>
          <FilterSelect
            value={filters.species}
            onChange={(e) => handleFilterChange('species', e.target.value)}
          >
            <option value="">All</option>
            <option value="human">Human</option>
            <option value="alien">Alien</option>
            <option value="humanoid">Humanoid</option>
            <option value="robot">Robot</option>
            <option value="animal">Animal</option>
            <option value="mythological">Mythological</option>
          </FilterSelect>
        </FilterGroup>
      </FilterRow>

      <FilterRow>
        <FilterGroup>
          <FilterLabel>Name</FilterLabel>
          <FilterInput
            type="text"
            placeholder="Search name..."
            value={filters.name}
            onChange={(e) => handleFilterChange('name', e.target.value)}
          />
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Type</FilterLabel>
          <FilterInput
            type="text"
            placeholder="Character type..."
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
          />
        </FilterGroup>

        <ButtonGroup>
          <ApplyButton onClick={applyFilters}>Apply</ApplyButton>
          <ResetButton onClick={resetFilters}>Reset</ResetButton>
        </ButtonGroup>
      </FilterRow>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  /* Для планшета 950px - фильтрация занимает всю ширину */
  @media (max-width: 950px) {
    width: 100%;
  }
`;

const FilterRow = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-end;
  flex-wrap: wrap;

  /* Планшет 950px - переносим элементы на новую строку если не помещаются */
  @media (max-width: 950px) {
    justify-content: center;
    width: 100%;
  }

  /* Мобильная версия - колонка */
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 180px;

  /* Планшет 950px - сохраняем размер 180px */
  @media (max-width: 950px) {
    width: 180px;
  }

  /* Мобильная версия - увеличиваем до 240px */
  @media (max-width: 530px) {
    width: 240px;
  }
`;

const FilterLabel = styled.label`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;

  @media (max-width: 530px) {
    font-size: 16px;
  }
`;

const FilterSelect = styled.select`
  height: 40px;
  padding: 0 10px;
  border: 1px solid #83bf46;
  border-radius: 5px;
  background: #263750;
  color: #fff;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #83bf46;
    box-shadow: 0 0 5px rgba(131, 191, 70, 0.5);
  }

  /* Планшет 950px - сохраняем размер */
  @media (max-width: 950px) {
    width: 180px;
  }

  /* Мобильная версия - увеличиваем до 240px */
  @media (max-width: 530px) {
    width: 240px;
    font-size: 16px;
  }
`;

const FilterInput = styled.input`
  height: 40px;
  padding: 0 10px;
  border: 1px solid #83bf46;
  border-radius: 5px;
  background: #263750;
  color: #fff;
  font-size: 14px;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    border-color: #83bf46;
    box-shadow: 0 0 5px rgba(131, 191, 70, 0.5);
  }

  /* Планшет 950px - сохраняем размер */
  @media (max-width: 950px) {
    width: 180px;
  }

  /* Мобильная версия - увеличиваем до 240px */
  @media (max-width: 530px) {
    width: 240px;
    font-size: 16px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  width: 180px;
  height: 40px;
  gap: 4px;

  /* Планшет 950px - сохраняем размер */
  @media (max-width: 950px) {
    width: 180px;
  }

  /* Мобильная версия - увеличиваем до 240px */
  @media (max-width: 530px) {
    width: 240px;
  }
`;

const ApplyButton = styled.button`
  flex: 1;
  height: 100%;
  background: #263750;
  color: #fff;
  border: 1px solid #83bf46;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  margin: 0;
  padding: 0;

  &:hover {
    background: #6da336;
  }

  @media (max-width: 530px) {
    font-size: 16px;
  }
`;

const ResetButton = styled.button`
  flex: 1;
  height: 100%;
  background: #263750;
  color: #fff;
  border: 1px solid #e04041;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  margin: 0;
  padding: 0;

  &:hover {
    background: #e04041;
  }

  @media (max-width: 530px) {
    font-size: 16px;
  }
`;
