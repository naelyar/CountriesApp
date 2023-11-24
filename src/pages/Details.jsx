import React, { useEffect, useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { searchByCountry } from '../config'
import axios from 'axios'
import { Button } from '../components/Button'
import { Info } from '../components/Info'

export const Details = () => {
  
  const {name} = useParams()
  const navigate = useNavigate();
  const [country, setCountry] = useState(null)

  console.log(country);
  
  useEffect(() => {
    axios.get(searchByCountry(name)).then(
      ({data})=> setCountry(data[0])
    )
  },[name])
  return (
    <>
    <Button onClick={() => navigate(-1)}>
<IoArrowBack /> Back
      </Button>
      {country &&  <Info {...country} navigate={navigate}></Info>}
     
      </>
  )
}
