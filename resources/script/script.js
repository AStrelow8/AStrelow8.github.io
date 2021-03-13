function numberGenerator() {
    return Math.floor(Math.random()*256);
}

document.getElementById('self').addEventListener('click', function() {
    document.getElementById('about').style.color = 'rgb(' + numberGenerator() + ',' + numberGenerator() + ',' + numberGenerator() + ')';
    document.getElementById('projects').style.color = 'rgb(' + numberGenerator() + ',' + numberGenerator() + ',' + numberGenerator() + ')';
    document.getElementById('contact').style.color = 'rgb(' + numberGenerator() + ',' + numberGenerator() + ',' + numberGenerator() + ')';
    //document.querySelectorAll('#contact .methods a').style.color = 'rgb(' + numberGenerator() + ',' + numberGenerator() + ',' + numberGenerator() + ')';
})