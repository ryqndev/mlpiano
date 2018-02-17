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

function pN(note, delay){
    var num = 0;
    var vel = 127;
    MIDI.setVolume(num, 127);
    MIDI.noteOn(num, note, vel, delay);
    MIDI.noteOff(num, note, delay + 0.75);
}

function playMusic(){
    //var bass = setInterval(bassLine, 8000);
    bassLine();
    //pN(48, 1);
    //pN(50, 1.5);   
}

function bassLine(octave){
    
    
    
}
function chords(octave){
    
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