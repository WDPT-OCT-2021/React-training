import React from 'react';

const Greetings = (props) => {
  //   const languages = {
  //     de: 'hallo',
  //     en: 'hello',
  //     es: 'hola',
  //     fr: 'bonjour',
  //   };

  let greetWord;

  switch (props.lang) {
    case 'de':
      greetWord = 'hallo';
      break;
    case 'fr':
      greetWord = 'bonjour';
      break;
    case 'es':
      greetWord = 'hola';
      break;
    default:
      greetWord = 'hello';
      break;
  }

  return (
    <div>
      {/* <p>{languages[props.lang] || 'Hi'}</p> */}
      <p>
        {greetWord} {props.children}
      </p>
    </div>
  );
};

export default Greetings;
