function donwloadCV(){
    var link = document.createElement('a');
    link.href='assets/cv/cv-joekim.pdf';
    link.download='cv-joekim.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.remove(link);
}
var button = document.querySelectorAll('.btn-about');

button.forEach(function(button){
    button.addEventListener('click',donwloadCV);
});