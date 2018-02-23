window.onload = function () {
	MIDI.loadPlugin({
		soundfontUrl: "./soundfont/",
		instrument: "acoustic_grand_piano",
		onprogress: function(state, progress) {
			console.log(state, progress);
		},
		onsuccess: function() {
            playMusic();
		}
	});
};
var noteNum = {
    'c' : 0,
    'c#': 1,
    'db': 1,
    'd' : 2,
    'd#': 3,
    'eb': 3,
    'e' : 4,
    'fb': 4,
    'e#': 5,
    'f' : 5,
    'f#': 6,
    'gb': 6,
    'g' : 7,
    'g#': 8,
    'ab': 8,
    'a' : 9,
    'a#': 10,
    'bb': 10,
    'b' : 11,
    'cb': 11,
    'b#': 0,
};
var chordProgression;
var melody = {
    'notes':[]
};
var patternLength = 16;
var octave = 3;
var bps;

function pullMusicData(){
    bps = setBPM(song_data['bpm']);
    chordProgression = song_data['chordProgression'];
    
    for(i = 0; i < song_data['melodyNotes'].length; i++){
        melody['notes'].push([song_data['melodyNotes'][i], (song_data['beats'][i]+8)*bps]);
    }
}


function playMusic(){ 
    analyzeDataSet();
    //1. set tempo
    pullMusicData();
    //2. set chords
    //prebuiltchords();
    //chords(chordProgression);
    //3. set baseline
    bassLine(chordProgression);
    //4. set melody
    extractMelody();
    
    //5(?) add introduce verses/chorus/etc   
}
function extractMelody(){
    for(j = 0; j < melody['notes'].length; j++){
        pN(melody['notes'][j][0], melody['notes'][j][1]);
    }
}
function setBPM(bpm){
    var beats = (bpm/60);
    beats = 1.0/beats;
    return beats; 
}
function bassLine(chordProgression){
    for(j = 1; j <= patternLength; j++){
        for(i = 0; i < chordProgression.length; i++){
            type = chordProgression[i].substr(2,5);
            pO(parseInt(noteNum[chordProgression[i].substr(0,2).replace(/\s+/, "")])+ (octave-1)*12,  bps*2*i+ j*8*bps);
            //pO(parseInt(noteNum[chordProgression[i].substr(0,2).replace(/\s+/, "")])+ (octave-1)*12,  bps*2*i + bps/4 + j*8*bps);
            pO(parseInt(noteNum[chordProgression[i].substr(0,2).replace(/\s+/, "")])+ (octave-1)*12,  bps*2*i + bps/2 + j*8*bps);
            //pO(parseInt(noteNum[chordProgression[i].substr(0,2).replace(/\s+/, "")])+ (octave-1)*12,  bps*2*i + bps*(3/4) + j*8*bps);
            pO(parseInt(noteNum[chordProgression[i].substr(0,2).replace(/\s+/, "")])+ (octave-1)*12,  bps*2*i + bps + j*8*bps);
            //pO(parseInt(noteNum[chordProgression[i].substr(0,2).replace(/\s+/, "")])+ (octave-1)*12,  bps*2*i + bps*1.25 + j*8*bps);
            pO(parseInt(noteNum[chordProgression[i].substr(0,2).replace(/\s+/, "")])+ (octave-1)*12,  bps*2*i + bps*1.5 + j*8*bps);
            //pO(parseInt(noteNum[chordProgression[i].substr(0,2).replace(/\s+/, "")])+ (octave-1)*12,  bps*2*i + bps*1.75 + j*8*bps);
        }
    }
    
}
function strumPattern(){

}
//given a chord progression
function chords(chordProgression){
    for(j = 1; j <= patternLength; j++){
        for(i = 0; i < chordProgression.length; i++){
            type = chordProgression[i].substr(2,6);
            pC(type, parseInt(noteNum[chordProgression[i].substr(0,2).replace(/\s+/, "")])+ (octave+1)*12,  bps*2*i + j*8*bps);
            //console.log(type,parseInt(noteNum[chordProgression[i].substr(0,2).replace(/\s+/, "")])+ (octave+1)*12 );
        }
    }
}
//prebuilt chords and strum pattern for Riptide
function prebuiltchords(){  
    for(j = 1; j <= patternLength; j++){
        pC('min', 57, 0);
        pC('min', 57, bps/2 + j*8*bps);
        //measure 2
        pC('min', 57, bps + bps/4 + j*8*bps);
        pC('min', 57, bps + bps/2 + j*8*bps);
        pC('min', 57, bps + bps*(3/4) + j*8*bps);
        //measure 3
        pC('maj', 55, bps*2 + j*8*bps);
        pC('maj', 55, bps*2 + bps/2 + j*8*bps);
        //measure 4
        pC('maj', 55, bps*3 + bps/4 + j*8*bps);
        pC('maj', 55, bps*3 + bps/2 + j*8*bps);
        pC('maj', 55, bps*3 + bps*(3/4) + j*8*bps);
        //measure 5
        pC('maj', 48, bps*4 + j*8*bps);
        pC('maj', 48, bps*4 + bps/2 + j*8*bps);
        pC('maj', 48, bps*4 + bps*(3/4) + j*8*bps);
        //measure 6
        pC('maj', 48, bps*5 + bps/4 + j*8*bps);
        pC('maj', 48, bps*5 + bps/2 + j*8*bps);
        pC('maj', 48, bps*5 + bps*(3/4) + j*8*bps);
        //measure 7
        pC('maj', 48, bps*6 + j*8*bps);
        pC('maj', 48, bps*6 + bps/2 + j*8*bps);
        pC('maj', 48, bps*6 + bps*(3/4) + j*8*bps);
        //measure 8
        pC('maj', 48, bps*7 + bps/4 + j*8*bps);
        pC('maj', 48, bps*7 + bps/2 + j*8*bps);
        pC('maj', 48, bps*7 + bps*(3/4) + j*8*bps);
    }
}

//plays a chord given chord type, root note, and delay, will add inversions
function pC(type, note, delay){
    switch(type){
        case 'maj':
            pN(note, delay);
            pN(note+4, delay);
            pN(note+7, delay);
            break;
        case 'maj7':
            pN(note, delay);
            pN(note+4, delay);
            pN(note+7, delay);
            pN(note+11, delay);
            break;
        case 'min':
            pN(note, delay);
            pN(note+3, delay);
            pN(note+7, delay);
            break;
        case 'min7':
            pN(note, delay);
            pN(note+3, delay);
            pN(note+7, delay);
            pN(note+10, delay);
            break;
        case 'dim':
            pN(note, delay);
            pN(note+3, delay);
            pN(note+6, delay);
            break;
        case 'dim7':
            pN(note, delay);
            pN(note+3, delay);
            pN(note+6, delay);
            pN(note+9, delay);
        case 'aug':
            pN(note, delay);
            pN(note+4, delay);
            pN(note+8, delay);
            break;
        case 'aug7':
            pN(note, delay);
            pN(note+4, delay);
            pN(note+8, delay);
            pN(note+10, delay);
            break;
        default:
            console.log("chord type not recognized");
            break;
    }
}

//plays a perfect fifth given root note
function pF(note, delay){
    pN(note, delay);
    pN(note+7, delay);
}

//plays a perfect octave given root note
function pO(note, delay){
    pN(note, delay);
    pN(note+12, delay);
}

//plays a note
//default function called by all other play functions
function pN(note, delay){
    var num = 0;
    var vel = 127;
    MIDI.setVolume(num, 127);
    MIDI.noteOn(num, note, vel, delay);
    MIDI.noteOff(num, note, delay + 1);
}