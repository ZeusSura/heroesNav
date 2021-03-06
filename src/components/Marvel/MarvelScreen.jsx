import { Typography } from '@material-ui/core'
import React from 'react'
import HeroesList from '../Heroes/HeroesList'

const MarvelScreen = () => {
    return (
        <div>
             <Typography align="center" color="primary" variant="h2">MARVEL</Typography>
             <HeroesList
             publisher="Marvel Comics"
             />
        </div>
    )
}

export default MarvelScreen
