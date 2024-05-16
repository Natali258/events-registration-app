import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getEvents } from '../../redux/events/operations';
import { selectEvents, selectIsLoading } from '../../redux/events/eventsSlice';
import { StyleBtnUl, StyleCard, StyleCardText, StyleCardTitle, StyleEventsLi, StyleEventsListContainer, StyleEventsTitle, StyleEventsUl, StyleRegisterBtn, StyleViewBtn } from './EventsList.styled';

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
                <StyleBtnUl>
                  <li><StyleRegisterBtn>Register</StyleRegisterBtn></li>
                  <li><StyleViewBtn>View</StyleViewBtn></li>
                </StyleBtnUl>
            </StyleCard>
            
            
          </StyleEventsLi>
        ))}
      </StyleEventsUl>
      {isLoading && <h1>Loading.....</h1>}
    </StyleEventsListContainer>
  );
};