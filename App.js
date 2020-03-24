import React from 'react';
import {SafeAreaView, Text, ScrollView} from 'react-native';
import {Deck} from './components/Deck';
import {Card, Button} from 'react-native-elements';

const DATA = [
  {
    id: 1,
    text: 'Card #1',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
  },
  {
    id: 2,
    text: 'Card #2',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
  },
  {
    id: 3,
    text: 'Card #3',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 4,
    text: 'Card #4',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
  },
  {
    id: 5,
    text: 'Card #5',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg',
  },
  {
    id: 6,
    text: 'Card #6',
    uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg',
  },
  {
    id: 7,
    text: 'Card #7',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg',
  },
  {
    id: 8,
    text: 'Card #8',
    uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg',
  },
];
const App = () => {
  const renderCard = item => {
    return (
      <Card title={item.text} image={{uri: item.uri}}>
        <Text style={{padding: 10}}>Sample Text</Text>
      </Card>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Deck
          data={DATA}
          renderCard={renderCard}
          // renderNoMoreCard={}
          // onSwipeLeft={}
          // onSwipeRight={}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
