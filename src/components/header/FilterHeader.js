import styled from 'styled-components';

export function FilterHeader() {
  return (
    <FilterContainer>
      <FilterRow>
        <FilterGroup>
          <FilterLabel>Status</FilterLabel>
          <FilterSelect>
            <option value="">All</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Gender</FilterLabel>
          <FilterSelect>
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </FilterSelect>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Species</FilterLabel>
          <FilterSelect>
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
          <FilterInput type="text" placeholder="Search name..." />
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Type</FilterLabel>
          <FilterInput type="text" placeholder="Character type..." />
        </FilterGroup>

        <ButtonGroup>
          <ApplyButton>Apply</ApplyButton>
          <ResetButton>Reset</ResetButton>
        </ButtonGroup>
      </FilterRow>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FilterRow = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-end;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
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
`;

const FilterLabel = styled.label`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
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
`;
const ButtonGroup = styled.div`
  display: flex;
  width: 180px;
  height: 40px;
  gap: 4px;
`;

const ApplyButton = styled.button`
  flex: 1;
  height: 100%;
  background: #263750;
  color: #fff;
  border: 1px solid #83bf46;
  border-radius: 5px 5px 5px 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  margin: 0;
  padding: 0;

  &:hover {
    background: #6da336;
  }
`;

const ResetButton = styled.button`
  flex: 1;
  height: 100%;
  background: #263750;
  color: #fff;
  border: 1px solid #e04041;
  border-radius: 5px 5px 5px 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  margin: 0;
  padding: 0;

  &:hover {
    background: #e04041;
  }
`;
