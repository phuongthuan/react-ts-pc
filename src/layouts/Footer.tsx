import * as React from 'react';

interface Props {

};

const Footer: React.FC<Props> = () => {
  return (
    <footer>
      <ul>
        <li><a href="http://fb.com/thuannp95" target="_blank" rel="noopener noreferrer">facebook</a></li>
        <li><a href="http://github.com/phuongthuan" target="_blank" rel="noopener noreferrer">github</a></li>
        <li><a href="http://twitter.com/thuannp95" target="_blank" rel="noopener noreferrer">twitter</a></li>
      </ul>
    </footer>
  );
}

export default Footer;