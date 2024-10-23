var data = [{
    start: 0,		
    duration: 15,	
    title: "Exercise"
}, {
    start: 25,		
    duration: 30,	
    title: "Travel to work"
}, {
    start: 30,		
    duration: 30,	
    title: "Plan day"
}, {
    start: 60,		
    duration: 15,	
    title: "Review yesterday's commits"
}, {
    start: 100,		
    duration: 15,	
    title: "Code review"
}, {
    start: 180,		
    duration: 90,	
    title: "Have lunch with John"
}, {
    start: 360,		
    duration: 30,	
    title: "Skype call"
}, {
    start: 370,		
    duration: 45,	
    title: "Follow up with designer"
}, {
    start: 400,		
    duration: 30,	
    title: "Push up branch"
}
];

var schedule = document.getElementById('schedule');
var hours = 11; 

for (let i = 0; i < hours; i++) {
    var hourLabel = document.createElement('div');
    hourLabel.className = 'hour-label';

    if(i>4){    
        hourLabel.innerText = (i-12) + 8 +':00';
    }
    else{
        hourLabel.innerText = i + 8 +':00';
    }
    
    schedule.appendChild(hourLabel);
}

var timeChart = document.createElement('div');
timeChart.className = 'time-chart';
schedule.appendChild(timeChart);



for(let j = 0 ; j<data.length ; j++){

    var graph = document.createElement('div');
    graph.className = 'graph'+(j+1)+' graph';
    graph.innerText = data[j].title;
    if((j<data.length-1 && (data[j+1].start - data[j].start) < data[j].duration)){
        
        if(data[j+1].start - data[j].start >= 15){
            graph.style.marginLeft = '0%';
            graph.style.width = '50%';
        }
        else{
        graph.style.marginLeft = '50%';
        graph.style.zIndex = '2';
        }
    }
 
    //----
    graph.style.top = data[j].start + 'px';
    graph.style.height = data[j].duration + 'px';
    timeChart.appendChild(graph);
    //----
}


var minDiv = document.createElement('div');
minDiv.className = 'minDiv'; 
schedule.appendChild(minDiv);
for (let i = 0; i < hours; i++) {
    var hourMin = document.createElement('div');
    hourMin.className = 'hour-min-label';
    if(i>4){    
        hourMin.innerText = (i-12) + 8 +':30';
    }
    else{
        hourMin.innerText = i + 8 +':30';
    }
    
    minDiv.appendChild(hourMin);
}
