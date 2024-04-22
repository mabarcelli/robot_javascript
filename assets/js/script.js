import { robots } from './robots.js';


const{series, id, name, weapon,avatar}=robots[0];

console.log(series);
console.log(id);
console.log(name);
console.log(weapon);
console.log(avatar);


function getRobotById(id="009"){
    return robots.find(function(robot){
        return robot.id === id
    });
}
console.log(getRobotById("019"));
function getRobotBySeries (serie){
    return robots.filter(function(robot){
        return robot.series === series;
    });
}

console.log(getRobotBySeries(3));