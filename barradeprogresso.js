function update() {
    var element = document.getElementById('myprogressbar');
    var width = 1;
    var identity = setInterval(scene, 10);

    function scene() {
        if (width >= 100) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';

        }


    }
}