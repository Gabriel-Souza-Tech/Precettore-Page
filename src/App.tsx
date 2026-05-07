import React from 'react';
import AppRoutes from './routes';
import WhatsappFloatButton from './components/WhatsappFloatButton';

const App: React.FC = () => {
  return (
    <>
      <AppRoutes />
      <WhatsappFloatButton />
    </>
  );
};

export default App;
