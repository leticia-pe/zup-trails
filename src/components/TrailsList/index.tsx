import React from 'react';
import { TrailResume } from '../../model/trails';
import Card from '../Card';
import './styles.scss';

interface trailsListProps {
  trails: TrailResume[] | [];
}

const trailsList: React.FC<trailsListProps> = ({
  trails
}: trailsListProps) => {

  return (
    <>
      {trails && Boolean(trails.length) && (
        <ul className="trails-list__container">
          {trails?.map((trail, key) => {
            return (
              <Card
                key={key}
                trail={trail} />
            );
          })}
        </ul>
      )}
    </>
  );
}

export default trailsList;