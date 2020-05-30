const height = document.forms["box"]
height.addEventListener("submit",function(e){
    e.preventDefault();
    const feet = height.querySelector('input[type="number"]').value * 30.48
    const inches = height.querySelector('input[type="number"]:nth-child(2)#inches').value * 2.54
    document.getElementById('output').innerHTML=  Math.floor(feet + inches) + 'cm'

})

