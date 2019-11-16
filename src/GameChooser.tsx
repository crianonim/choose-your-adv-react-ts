import React, { useState, useEffect } from 'react'
interface Props {
    url:String
}
interface GameItem {
    id:number,
    scenarioTitle:string
}
const GameChooser: React.FC<Props> = ({url}) => {
    const [gamesList,setGamesList]=useState<Array<GameItem>|null>(null)
    useEffect(()=>{
        fetch(url+'/getGames')
        .then(res=>res.json())
        .then(json=>setGamesList(json.games))
        .catch(console.log)
    },[])
    return (
        <div>
            <ul>
                {gamesList && gamesList.map(gi=><li onClick={()=>{console.log(gi.id,"chosen")}} key={gi.id}>{gi.id+":"+gi.scenarioTitle}</li>)}
            </ul>
        </div>
    );
}
export default GameChooser;