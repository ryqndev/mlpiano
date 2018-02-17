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

var bps = 1;

function pN(note, delay){
    var num = 0;
    var vel = 127;
    MIDI.setVolume(num, 127);
    MIDI.noteOn(num, note, vel, delay);
    MIDI.noteOff(num, note, delay + 1);
}

function playMusic(){
    setBPM(102);
    var bass = setInterval(chords, bps*8000);
    //chords();
   
    //chords(3);
    //pN(48, 1);
    //pN(50, 1.5);   
}
function setBPM(bpm){
    bps = (bpm/60);
    bps = parseFloat(1.0/bps);
}

function bassLine(octave){
    
    
    
}
function chords(){
    gC('min', 57, 0);
    gC('maj', 55, bps*2);
    gC('maj', 48, bps*4);
    gC('maj', 48, bps*6);
}

function gC(type, note, delay){
    switch(type){
        case 'maj':
            pN(note, delay);
            pN(note+4, delay);
            pN(note+7, delay);
            break;
        case 'min':
            pN(note, delay);
            pN(note+3, delay);
            pN(note+7, delay);
            break;
        case 'dim':
            pN(note, delay);
            pN(note+3, delay);
            pN(note+6, delay);
            break;
        case 'aug':
            break;
        default:
            console.log("chord type not recognized");
            break;
    }
}
function pF(note, delay){
    pN(note, delay);
    pN(note+7, delay);
}
function pO(note, delay){
    pN(note, delay);
    pN(note+12, delay);
}