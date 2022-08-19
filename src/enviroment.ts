import React from 'react';
import axios from 'axios';

export const enviroment = axios.create({
    baseURL: 'http://localhost:3001/'
});
