import React from 'react';

const SocialHandles = () => {
  return (
    <div style={{ marginTop: 20 }}>
      <a
        href="https://www.linkedin.com/in/lou-gomes-neto/"
        target="_blank"
        rel="noopener noreferrer"
        className="fa fa-linkedin"
      ></a>
      <a
        href="https://twitter.com/BurgerFries23"
        target="_blank"
        rel="noopener noreferrer"
        className="fa fa-twitter"
      ></a>
      <a
        href="https://github.com/LouNeto"
        target="_blank"
        rel="noopener noreferrer"
        className="fa fa-github"
      ></a>
      <a
        href="https://gitlab.com/Lou_Neto"
        target="_blank"
        rel="noopener noreferrer"
        className="fa fa-gitlab"
      ></a>
      {/* <a href="cvLouNetoEng.pdf" className="fa fa-file-pdf-o" download></a> */}
    </div>
  );
};

export default SocialHandles;
