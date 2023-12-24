let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let blur = document.getElementById("blur");
let hue = document.getElementById("hue");
let img = document.getElementById("img");

function resetValue() {
    img.style.filter = 'none';
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    blur.value = '0';
    hue.value = '0';
}

window.onload = function() {
    var download = document.getElementById("download");
    var reset = document.querySelector("span");
    var imgBox = document.querySelector(".img-box");

    download.style.display = 'none';
    reset.style.display = 'none';
    imgBox.style.display = 'none';
};

document.getElementById("upload").onchange = function() {
    resetValue();
    var download = document.getElementById("download");
    var reset = document.querySelector("span");
    var imgBox = document.querySelector(".img-box");
    var file = new FileReader();

    download.style.display = 'block';
    reset.style.display = 'block';
    imgBox.style.display = 'block';

    file.onload = function() {
        img.src = file.result;
    };

    file.readAsDataURL(this.files[0]);
};

var filters = document.querySelectorAll("ul li input");
filters.forEach(filter => {
    filter.addEventListener('input', function() {
        var saturate = document.getElementById("saturate").value;
        var contrast = document.getElementById("contrast").value;
        var brightness = document.getElementById("brightness").value;
        var sepia = document.getElementById("sepia").value;
        var blur = document.getElementById("blur").value;
        var hue = document.getElementById("hue").value;

        img.style.filter = `
            saturate(${saturate}%)
            contrast(${contrast}%)
            brightness(${brightness}%)
            sepia(${sepia}%)
            blur(${blur}px)
            hue-rotate(${hue}deg)
        `;
    });
});

document.getElementById("download").addEventListener("click", function() {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    context.filter = img.style.filter;
    context.drawImage(img, 0, 0);

    var link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'filtered_image.png';
    link.click();
});