import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import AddCardButton from '../components/AddCardButton';
import { fetchCards, deleteCard, likeCard } from '../services/api';

function CardPage() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCards = async () => {
      try {
        const data = await fetchCards();
        setCards(data);
      } catch (error) {
        console.error('Failed to load cards', error);
      } finally {
        setLoading(false);
      }
    };
    loadCards();
  }, []);

  const handleDelete = async (cardId) => {
    try {
      await deleteCard(cardId);
      setCards(cards.filter(card => card.id !== cardId));
    } catch (error) {
      console.error('Failed to delete card', error);
    }
  };

  const handleLike = async (cardId) => {
    try {
      const updatedCard = await likeCard(cardId);
      setCards(cards.map(card => 
        card.id === cardId ? updatedCard : card
      ));
    } catch (error) {
      console.error('Failed to like card', error);
    }
  };

  if (loading) return <div>Загрузка карточек...</div>;

  return (
    <div className="card-page">
      <h2>Мои карточки</h2>
      <AddCardButton />
      <CardList 
        cards={cards} 
        onDelete={handleDelete} 
        onLike={handleLike} 
      />
    </div>
  );
}

export default CardPage;