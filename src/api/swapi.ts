import axios from 'axios'

export const fetchPeople = (page, pageSize) => {
  return axios.get(`https://swapi.dev/api/people/?page=${page}&limit=${pageSize}`)
}

export const fetchSpaceships = (page, pageSize) => {
  return axios.get(`https://swapi.dev/api/starships/?page=${page}&limit=${pageSize}`)
}

export const fetchPlanets = (page, pageSize) => {
  return axios.get(`https://swapi.dev/api/planets/?page=${page}&limit=${pageSize}`)
}
