
function displayNoteOccurence(){
    displayChord1();
    displayChord2();
    displayChord3();
    displayChord4();
}
function displayChord1(){
    var noteName1 = Object.keys(noteOccurence['chord1']);
    var noteFrequency1 = Object.values(noteOccurence['chord1']);
    
    var ctx1 = document.getElementById("chord1Notes").getContext('2d');
    var myChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: noteName1,
            datasets: [{
                label: '# Chord 1/Note Occurence',
                data: noteFrequency1,
                backgroundColor: '#8c7efc'
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 10,
                        stepSize: 1,
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}
function displayChord2(){
    var noteName2 = Object.keys(noteOccurence['chord2']);
    var noteFrequency2 = Object.values(noteOccurence['chord2']);
    
    var ctx2 = document.getElementById("chord2Notes").getContext('2d');
    var chart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: noteName2,
            datasets: [{
                label: '# Chord 2/Note Occurence',
                data: noteFrequency2,
                backgroundColor: '#ff9554'
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 10,
                        stepSize: 1,
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}
function displayChord3(){
    var noteName3 = Object.keys(noteOccurence['chord3']);
    var noteFrequency3 = Object.values(noteOccurence['chord3']);
    
    var ctx3 = document.getElementById("chord3Notes").getContext('2d');
    var chart3 = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: noteName3,
            datasets: [{
                label: '# Chord 3/Note Occurence',
                data: noteFrequency3,
                backgroundColor: '#85e27c'
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 10,
                        stepSize: 1,
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}
function displayChord4(){
    var noteName4 = Object.keys(noteOccurence['chord4']);
    var noteFrequency4 = Object.values(noteOccurence['chord4']);
    var ctx4 = document.getElementById("chord4Notes").getContext('2d');
    var chart4 = new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: noteName4,
            datasets: [{
                label: '# Chord 4/Note Occurence',
                data: noteFrequency4,
                backgroundColor: '#89e4ed'
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 10,
                        stepSize: 1,
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}