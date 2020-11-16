import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'Edie',
      company: 'Wecode',
      theme: 'light',
      title: 'Front-end Developer',
      email: 'edie.spak1er@gamil.com',
      message: 'Be positive',
      fileName: 'edie',
      fileURL: 'edie.png'
    },
    {
      id: '2',
      name: 'Edie2',
      company: 'Wecode',
      theme: 'light',
      title: 'Front-end Developer',
      email: 'edie.spak1er@gamil.com',
      message: 'Be positive',
      fileName: 'edie',
      fileURL: 'edie.png'
    },
    {
      id: '3',
      name: 'Edie3',
      company: 'Wecode',
      theme: 'light',
      title: 'Front-end Developer',
      email: 'edie.spak1er@gamil.com',
      message: 'Be positive',
      fileName: 'edie',
      fileURL: 'edie.png'
    }

  ])
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards}/>
        <Preview cards={cards}/>
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
