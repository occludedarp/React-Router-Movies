import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    //Joscelyns conditional logic for preventing duplicates appearing in saved
    if(
      savedList.find((savedMovie)=> {
        return movie.id === savedMovie.id;
      }) === undefined
    ) {
    //
      setSavedList( [...savedList, movie] ); //was outside of brackets prior to conditional logic
    }

  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route 
        exact
        path="/" 
        render={() => (
          <MovieList/>
        )} 
      />    
      <Route 
      
        path="/Movies/:id" 
        render={(props) => (
                          //added as part of stretch feature
          <Movie {...props} addToSavedList={addToSavedList}/>

        )}
       />
          
    </div>
  );
};

export default App;
