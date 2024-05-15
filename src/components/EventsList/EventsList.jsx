import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getEvents } from '../../redux/events/operations';
import { selectEvents, selectIsLoading } from '../../redux/events/eventsSlice';

export const EventsList = () => {
  const dispatch = useDispatch();
  const eventsItems = useSelector(selectEvents);
  console.log(...eventsItems);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <div >
        <p>Events</p>
      <ul>
        {eventsItems.map(event => (
          <li key={event.id}>
            <div>
                <p>{event.title}</p>
                <p>{event.description}</p>
                <button>Register</button>
                <button>View</button>
            </div>
            
          </li>
        ))}
      </ul>
      {isLoading && <h1>Loading.....</h1>}
    </div>
  );
};