import { Hidden, makeStyles } from '@material-ui/core';
import React, { Component } from 'react';
import Filter from './Filter';
import Listing from './Listing';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    gridGap: '1.2rem',
    ...theme.container,
    marginTop: '1.5rem',
    marginBottom: '200px',
    paddingRight: '20px'
  },
  lblock: {
    gridRow: '1 / 2',
    gridColumn: '1 / 2',
  },
  rblock: {
    gridRow: '1 / 2',
    gridColumn: '2 / 3',
  }
}));

export default function ListingFilter(props) {
  const classes = useStyles();
  const { components } = props;

  const sectors = [
    {Link: '/', name: 'Technology', count: 14},
    {Link: '/', name: 'Engineering', count: 200},
    {Link: '/', name: 'Health', count: 13},
  ];

  const locations = [
    {Link: '/', name: 'Jobs in London', count: 14},
    {Link: '/', name: 'Jobs in Worcester', count: 200},
    {Link: '/', name: 'Jobs in Kent', count: 13},
  ];


  return (
    <div className={classes.root}>
      <div className={classes.lblock}>
        <Hidden smDown>
        <Filter title='Browse by Sector' items={sectors} />
        <Filter title='Browse by Location' items={locations} />
        </Hidden>
      </div>
      <div className={classes.rblock}>
        {components.map((comp) => (
          comp
        ))}
      </div>
    </div>
  )
}
