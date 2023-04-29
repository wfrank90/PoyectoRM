import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;

  return (
    <div className={styles.mainDiv}>
      {characters.map((char) => {
        return (
          <Card
            key={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={() => window.alert("Emular cierre de terjeta")}
          />
        );
      })}
    </div>
  );
}