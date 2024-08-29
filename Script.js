function toggleTheme() {
    const body = document.body;
    const currentTheme = body.style.background;

    if (currentTheme === 'linear-gradient(to right, #ff7e5f, #feb47b)') {
        body.style.background = 'linear-gradient(to right, #2b2b2b, #4f4f4f)';
        document.querySelector('.container').style.background = '#333';
        document.querySelector('button').style.background = '#555';
        document.querySelector('button').style.color = '#fff';
        document.querySelector('button').style.borderColor = '#777';
    } else {
        body.style.background = 'linear-gradient(to right, #ff7e5f, #feb47b)';
        document.querySelector('.container').style.background = '#fff';
        document.querySelector('button').style.background = '#ff7e5f';
        document.querySelector('button').style.color = '#fff';
        document.querySelector('button').style.borderColor = '#ff7e5f';
    }
}
