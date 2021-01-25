



window.addEventListener('load', function(){
    document.getElementById('container-content').classList.add('active');
    document.getElementById('sign-left').classList.add('active');
    
    document.querySelectorAll('.container-content div').forEach(link => {
        link.classList.add('fade');
    });
});

