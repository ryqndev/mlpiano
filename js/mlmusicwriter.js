var c1 = [], c2 = [], c3 = [], c4 = [];
var noteOccurence = {
    "chord1": {},
    "chord2": {},
    "chord3": {},
    "chord4": {}
};
var artificialMelody = [];

//input will be the chord progression. 
//will be trained using melodies of different songs 
var chordInput = [[52, 56, 59], [59, 63, 66], [49,52, 56], [57, 61, 64]];
var melodyInput;
function analyzeDataSet(){
    divideMelodyIntoChords(Demons_ImagineDragons);
    //divideMelodyIntoChords(HeySoulSister_Train);
    //divideMelodyIntoChords(HowFarIllGo_Disney);
    y = [c1,c2,c3,c4];
    findOccurenceOfNote();
    //displayNoteOccurence();
    generateMelody();
    generateBeats();
}
function divideMelodyIntoChords(songData){
    for(let i = 0; i < songData['beats'].length; i++){
        var mel_beat = songData['beats'][i]%8;
        if(mel_beat < 2){
            c1.push(songData['melodyNotes'][i]);
        }else if(mel_beat >= 2 && mel_beat < 4){
            c2.push(songData['melodyNotes'][i]);
        }else if(mel_beat >= 4 && mel_beat < 6){
            c3.push(songData['melodyNotes'][i]);
        }else{
            c4.push(songData['melodyNotes'][i]);
        }
    }
}
//setup functions
function findOccurenceOfNote(){
    for(let i = 56; i <= 79; i++){
        noteOccurence["chord1"][i] = 0;
        noteOccurence["chord2"][i] = 0;
        noteOccurence["chord3"][i] = 0;
        noteOccurence["chord4"][i] = 0;
    }
    for(let i = 1; i < 5; i++){
        var name = 'c'+ i;
        var chordName = 'chord'+ i;
        for(let j = 0; j < window[name].length; j++){
            noteOccurence[chordName][window[name][j]] = noteOccurence[chordName][window[name][j]] + 1;
        }
    }
}
function generatedMelody(){
    var final = [];
    //how many chord progressions of melody???
    for(let k = 0; k < 6; k++){
        //for every chord
        for(let j = 1; j < 5; j++){
            var chordData = 'c'+ j;
            //every note
            for(let i = 0; i < 8; i++){
                final.push(window[chordData][Math.floor(Math.random()*window[chordData].length)]);
            }
        }
    }
    return final;
}
function generateMelody(){
    MathematicalMelody_MLPiano['melodyNotes'] = generatedMelody();
    console.log(MathematicalMelody_MLPiano['melodyNotes']);
    console.log(MathematicalMelody_MLPiano['beats']);
}
function generateBeats(){
    for(let i = 0; i < 41; i += 0.25){
        MathematicalMelody_MLPiano['beats'].push(i);
    }
}