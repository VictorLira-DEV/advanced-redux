import { ReactNode } from 'react';
import classes from './Card.module.css';

interface props {
  children: ReactNode;
  className?: string;
}

const Card = (props: props) => {
  return (
    <section
      className={`${classes.card} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </section>
  );
};

export default Card;
