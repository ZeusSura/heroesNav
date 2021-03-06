import {heroes} from '../data/Heroes'

export const getHeroesByPublisher = (publisher)=>{

    const  validPublisher  = ['Marvel Comics','DC Comics']
    if(!validPublisher.includes(publisher))
    {
        throw new Error(`El tipo de publisher ${publisher} no es valido`)
    }
    return heroes.filter(hero=> hero.publisher === publisher)
}