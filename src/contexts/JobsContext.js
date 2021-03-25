import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';


export const JobsContext = createContext();

export const JobsProvider = props => {

  const [jobs, setJobs] = useState({});

  useEffect(() => {

    axios
      .get(`http://localhost/Trait-Up-Backend/public/api/jobs`)
      
      .then((response) => {
        const {data} = response;
        let result = JSON.parse(data["jobs"])
        const newJobsData = {};

        result.forEach((job) => {
          newJobsData[job.id] = {
            id: job.id,
            type: job.type,
            url: job.url,
            created_at: job.created_at,
            company: job.company,
            location: job.location,
            title: job.title,
            description: job.description,
            how_to_apply: job.how_to_apply,
            company_logo: job.company_logo
          }
        });
        setJobs(newJobsData);

      });

  }, []);


  return (
    <JobsContext.Provider value={jobs}>
      {props.children}
    </JobsContext.Provider>
  );

};