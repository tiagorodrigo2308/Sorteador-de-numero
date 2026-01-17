function ganerateNumber(){

    const min = Math.ceil(document.querySelector(".input-right").value)
    const max = Math.floor(document.querySelector(".input-left").value)

   const  result = Math.floor(Math.random() * (max - min)) + min;

   alert(result)
}

