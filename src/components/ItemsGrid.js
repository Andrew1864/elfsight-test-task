import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Popup } from './popup';
import { useData } from './providers';
import { Card } from './Card';

const defaultPopupSettings = {
  visible: false,
  content: {}
};

export function ItemsGrid() {
  const { characters } = useData();
  const [popupSettings, setPopupSettings] = useState(defaultPopupSettings);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.keyCode === 27 || event.key === 'Escape') {
        setPopupSettings({
          visible: false,
          content: {}
        });
      }
    };

    if (popupSettings.visible) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscKey);
    } else {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscKey);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [popupSettings.visible]);

  function cardOnClickHandler(props) {
    setPopupSettings({
      visible: true,
      content: { ...props }
    });
  }

  if (!characters.length) {
    return null;
  }

  return (
    <Container>
      {characters.map((props, index) => (
        <Card
          key={index}
          onClickHandler={() => cardOnClickHandler(props)}
          {...props}
        />
      ))}
      {popupSettings.visible && (
        <Popup settings={popupSettings} setSettings={setPopupSettings} />
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  gap: 30px;
`;
