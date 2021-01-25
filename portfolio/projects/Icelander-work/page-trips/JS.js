



window.addEventListener('load', function(){
    document.getElementById('container-content').classList.add('active');
    document.getElementById('sign-right').classList.add('active');
    
    document.querySelectorAll('.container-content div').forEach(link => {
        link.classList.add('fade');
    });
});


