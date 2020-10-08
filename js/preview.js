var loadFile = function(event) {
    let eventvalue = event.target.value.split('.').pop(); // split and takes the last part
    console.log(eventvalue);
    if((eventvalue === "jpg") || (eventvalue === "jpeg") || (eventvalue === "png") || (eventvalue === "gif") || (eventvalue === "svg")){ //if image
        document.getElementById('preview').innerHTML = `<img id="output" src="img/arrow.png" alt="your image">`; //image
    }else{  //else video
        document.getElementById('preview').innerHTML = `<video id="output" autoplay loop></video>`; //video
    }
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
    }
};

// preview by Jannick Nielsen / lolerswger.com™