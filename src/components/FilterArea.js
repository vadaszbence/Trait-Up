import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useTheme} from '@material-ui/core/styles';
import {Grid, useMediaQuery} from '@material-ui/core';
import SearchForm from "./SearchForm";
import SearchForm2 from "./SearchForm2";
import jobModel from "../models/jobModel";


const useStyles = makeStyles((theme) => ({
  demo: {
    height: 80,
    marginTop: 40,
    marginBottom: 40,
    [theme.breakpoints.up("lg")]: {
      width: 600,
    },
  },
}));





const FilterArea = ({handleOnTypeFilter, clearJob, handleOnLocationFilter, clearLocation, jobs}) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  const locations = jobModel.useStoreState(state => state.uniqueLocations);


  return (
    <Grid container justify="center">
      <Grid
        container
        className={!isMobile ? classes.demo : classes.mobileDemo}
        alignItems="center"
        justify="center"
        style={{borderRadius: 20}}
      >
        <Grid className={isMobile ? classes.typeSearch : ''} item lg={4}>
          <div className={isMobile ? classes.search : ''}>
            <SearchForm onTypeFilter={handleOnTypeFilter}
                        jobs={jobs} clear={clearJob}/>
          </div>
        </Grid>

        <Grid item lg={4}>
          <SearchForm2 onLocationFilter={handleOnLocationFilter} locations={locations} clear={clearLocation}/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default FilterArea;