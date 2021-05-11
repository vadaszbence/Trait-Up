import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from "axios";
import {BASE_URL} from "../constants";
import {Grid} from "@material-ui/core";
import JobCard from "./JobCard";
import Typography from "@material-ui/core/Typography";

function Features() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      borderBottom: 'none',
    },
    paper: {
      padding: theme.spacing(10),
      margin: 'auto',
      width: '100%',
      minHeight: '100vh',
      borderBottom: 'none',
      borderTop: 'none',
      background: '#F6F6F6',
      display: 'flex',
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [newJobs, setNewJobs] = useState([]);

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${BASE_URL}/Trait-Up-Backend/public/api/jobs`,
        )
      .then((response) => {
        let firstTen = JSON.parse(response.data.jobs).slice(0, 10);
        setNewJobs(firstTen);
        setLoading(false);
      });
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Paper className={classes.paper} width="15%">
        <Typography className={classes.welcomeWord} gutterBottom variant="h4">
          New positions for you
        </Typography>
        {newJobs.map((job) => (
          <Grid key={job.id} item xs={5}>
              <JobCard job={job} key={job.id}/>
          </Grid>
        ))}
      </Paper>
    </div>
  );
}


export default Features
