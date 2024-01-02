const img = document.getElementById('images');

let toggle = true;
img.addEventListener ('click', function() {

    toggle = !toggle;
    if(toggle) {
        img.src = 'img\\Inu.png';
    }else{
        img.src = 'img\\InuNaked.png';  
    };


})
