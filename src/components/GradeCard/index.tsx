import React from 'react';
import './styles.scss';

interface gradeCardProps {
  name: string;
  duration: number
}

const GradeCard: React.FC<gradeCardProps> = (props) => {
  const { name, duration } = props;

  return (
    <>
      <li className="grade-card__container">
        <span aria-label="Nome do curso">{name}</span>
        <span aria-label="Duração">{duration} horas</span>
      </li>
    </>
  );
}

export default GradeCard;