import styled from 'styled-components';
import { Logo } from './Logo';
import { FilterHeader } from './FilterHeader';

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <FilterHeader />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #1a2b3c;

  /* Планшет 950px - лого сверху, фильтрация снизу */
  @media (max-width: 950px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;
