function press(event){
    console.log("The '" +event.key+"' key is pressed.");
}


document.addEventListener("keydown",function(event){
    if(event.code === "KeyA") {
        press(event);
        let audio = document.createElement("AUDIO");
        audio.src = "white_keys/A.mp3";
        audio.play();
    } else if(event.code === "KeyS") {
        press(event);
        let audio = document.createElement("AUDIO");
        audio.src = "white_keys/S.mp3";
        audio.play();
    } else if(event.code === "KeyD") {
        press(event);
        let audio = document.createElement("AUDIO");
        audio.src = "white_keys/D.mp3";
        audio.play();
    } else if(event.code === "KeyF") {
        press(event);
        let audio = document.createElement("AUDIO");
        audio.src = "white_keys/F.mp3";
        audio.play();
    } else if(event.code === "KeyG") {
        press(event);
        let audio = document.createElement("AUDIO");
        audio.src = "white_keys/G.mp3";
        audio.play();
    } else if(event.code === "KeyH") {
        press(event);
        let audio = document.createElement("AUDIO");
        audio.src = "white_keys/H.mp3";
        audio.play();
    } else if(event.code === "KeyJ") {
        press(event);
        let audio = document.createElement("AUDIO");
        audio.src = "white_keys/J.mp3";
        audio.play();
    }
    //BLACK KEYS
    else if(event.code === "KeyW") {
        press(event);
        let audio = document.createElement("AUDIO");
        audio.src = "black_keys/W.mp3";
        audio.play();
    } else if(event.code === "KeyE") {
        press(event);
        let audio = document.createElement("AUDIO");
        audio.src = "black_keys/E.mp3";
        audio.play();
    } else if(event.code === "KeyT") {
        press(event);
        let audio = document.createElement("AUDIO");
        audio.src = "black_keys/T.mp3";
        audio.play();
    } else if(event.code === "KeyY") {
        press(event);
        let audio = document.createElement("AUDIO");
        audio.src = "black_keys/Y.mp3";
        audio.play();
    } else if(event.code === "KeyU") {
        press(event);
        let audio = document.createElement("AUDIO");
        audio.src = "black_keys/U.mp3";
        audio.play();
    } else {
        console.log("Error")
    }
});