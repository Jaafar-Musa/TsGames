import React from 'react'
import { useParams, useHistory} from "react-router-dom"
import Games from '../model/Games'


const GameRoutes:React.FC = () => {
    const history = useHistory()
    let {id} = useParams<{id:string}>()
    let comp:string | null = null;
    for(let i in Games){
        let r = Games[i].title
        let rl = r.replace(/\s/g,"").replace(Games[i].title[0],Games[i].title[0].toLowerCase())
        console.log(rl);
        if(rl === id){
            comp = r.replace(/\s/g,"")
        }
    }
    if(comp){
        let Game = require(`./../pages/${comp}`)
        return <Game.default/>
    }else{
        history.push("/");
        return null
    }
}

export default GameRoutes
