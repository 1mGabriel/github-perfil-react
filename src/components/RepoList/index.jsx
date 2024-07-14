import React, { useEffect, useState } from "react";

import styles from "./ReposList.module.css";

const ReposList = ({nomeUsuario}) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((res) => res.json())
      .then((resJson) => {
        setRepos(resJson);
      });
  }, [nomeUsuario]);

  return (
    <>
      <div className="container">
        <ul className={styles.list}>
          {repos.map((repositorio) => (
            <li className={styles.listItem} key={repositorio.id}>
              <p className={styles.itemName}><b>Nome:</b>{repositorio.name}</p>
              <p className={styles.itemLanguage}>
                <b>Linguagem:</b>{repositorio.language}
              </p>
              <a
                className={styles.itemLink}
                target="_blank"
                href={repositorio.html_url}
              >
                Visitar no gitHub
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ReposList;
