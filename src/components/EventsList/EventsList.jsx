import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getEvents } from '../../redux/events/operations';
import { selectEvents, selectIsLoading } from '../../redux/events/eventsSlice';
import { StyleCard, StyleCardText, StyleCardTitle, StyleEventsLi, StyleEventsListContainer, StyleEventsTitle, StyleEventsUl, StyleRegisterBtn } from './EventsList.styled';

export const EventsList = () => {
  const dispatch = useDispatch();
  const eventsItems = useSelector(selectEvents);
  console.log(...eventsItems);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <StyleEventsListContainer >
        <StyleEventsTitle>Events</StyleEventsTitle>
      <StyleEventsUl>
        {eventsItems.map(event => (
          <StyleEventsLi key={event.id}>
            <StyleCard>
                <StyleCardTitle>{event.title}</StyleCardTitle>
                <StyleCardText>{event.description}</StyleCardText>
                <StyleRegisterBtn>Register</StyleRegisterBtn>
                <button>View</button>
            </StyleCard>
            
          </StyleEventsLi>
        ))}
      </StyleEventsUl>
      {isLoading && <h1>Loading.....</h1>}
    </StyleEventsListContainer>
  );
};