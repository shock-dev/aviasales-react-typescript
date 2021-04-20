import React, { useEffect } from 'react';
import Logo from './components/Logo';
import Filters from './components/Filters';
import Tabs from './components/Tabs';
import TicketList from './components/TicketList';
import { tabs } from './resources/tabs';
import { filters } from './resources/filters';
import { useDispatch } from 'react-redux';
import { fetchTickets } from './store/tickets/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  return (
    <div className="app">
      <Logo />
      <div className="container main">
        <Filters data={filters} />
        <div className="main__inner">
          <Tabs data={tabs} />
          <TicketList />
        </div>
      </div>
    </div>
  );
};

export default App;
