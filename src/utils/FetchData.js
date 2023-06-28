import axios from 'axios';
import {useEffect, useState} from 'react';
import config from '../Config';

const FetchData = async context => {
  try {
    const response = await axios.get(config.apiUrl, {
      headers: {
        'X-Api-Key': config.apiKey,
      },
      params: {
        query: context,
      },
    });
    
    return response.data;
  } catch (error) {
    console.log(error);
    setError(error.code);
  }
}

export default FetchData;
