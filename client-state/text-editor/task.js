const editor = document.getElementById('editor');
    
    document.addEventListener('keydown', () => {
    localStorage.text = editor.value;
    console.log(localStorage.text)
    }) 
    
 editor.value= localStorage.getItem('text')
