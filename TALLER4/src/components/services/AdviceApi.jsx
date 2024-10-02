import React, { useState, useEffect } from 'react';
import Cards from "./../Cards";


const AdviceApi = () => {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState(null);

  // Función para obtener una nueva frase desde la API
  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="advice-card">
      <Cards advice={advice} adviceId={adviceId} />
      <div className="simbol">
        <img src="/src/img/pattern-divider-mobile.svg" alt="Pause" />
      
      </div>
      <button className="circle" onClick={fetchAdvice}>
      <img src="/src/img/icon-dice.svg" alt="Pause" />
      </button>
    </div>
  );
};

export default AdviceApi;