import React from 'react';

function MadeGoal(props){
    return (<><h1>GOAL!!!!!</h1></>)
}

function MissedGoal(props){
    return (<><h1>MISSED GOAL!!!!!</h1></>)

}
function Goal(props){
    const isGoal = props.isGoal;
    return(<>
    
    {isGoal ?<MadeGoal></MadeGoal>:<MissedGoal></MissedGoal>}
    
    </>);

}

export default Goal;