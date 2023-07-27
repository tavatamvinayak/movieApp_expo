import { View, Text, FlatList, ScrollView } from 'react-native'
import {  useContext, useState } from 'react';
import MovieContext from '../store/MovieContext';
import Rows from './Rows';

const HomeList = () => {
    const {
        MoviePoster,
        TrandingNow,
        TopRated,
        ActionMovies,
        ComedyMovies,
        HorrorMovies,
        RomanceMovies,
        Document,
      } = useContext(MovieContext)
    //   console.warn(MoviePoster)
  return (
    <ScrollView>
      <Rows title="MoviePoster" movies={MoviePoster} />
      <Rows title="Tranding Now" movies={TrandingNow} />
      <Rows title="TopRated" movies={TopRated} />
      <Rows title="ActionMovies" movies={ActionMovies} />
      <Rows title="ComedyMovies" movies={ComedyMovies} />
      <Rows title="HorrorMovies" movies={HorrorMovies} />
      <Rows title="RomanceMovies" movies={RomanceMovies} />
      <Rows title="Documentaries" movies={Document} />
         
     
    </ScrollView>
  )
}

export default HomeList