import './App.css';

import React, { useState, useEffect } from 'react';

const App = () => {

  const person = {
    fullName: 'Djibril SOW',
    bio: "Je suis un développeur web ASP.NET/JAVA | Angular/React/NodeJS. Je maîtrise plusieurs langages informatiques et je suis capable de travailler sur différentes plateformes et en équipe. Je suis également autonome, disponible et capable d'intervenir sur toutes les étapes d'un projet informatique et d'apprendre très rapidement de nouvelles technologies.",
    imgSrc: 'https://media.licdn.com/dms/image/C4E03AQEEavGd452dBg/profile-displayphoto-shrink_400_400/0/1661770568868?e=1712188800&v=beta&t=0Ohtj5QudjkFWnTFNZ637Xnrv4p9zor3F8cQl5FAXjo',
    profession: 'Développeur FullStack',
  };

  const [show, setShow] = useState(false);
  const [timeValue, setTimeValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeValue((prevTimeValue) => prevTimeValue + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div className='App'>
      <button onClick={handleShow}>Afficher profile</button>
      {show && (
        <div>
          <h2>{person.fullName}</h2>
          <p>{person.bio}</p>
          <img src={person.imgSrc} alt="Person" />
          <p>Profession: {person.profession}</p>
        </div>
      )}
      <p>Interval de temps: {timeValue} seconds</p>
    </div>
  );
};

export default App;

