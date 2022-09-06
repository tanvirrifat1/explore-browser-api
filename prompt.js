console.log('adf jlk gh ')
// alert('ki khbr dosto')

const showAlert = () =>{
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
        alert('ki khbr dsto')
    }
}

const askSomething = () =>{
   const decision = confirm('are you come to PicNic');
   console.log(decision);
   if(decision === true){
    console.log('500 tk bkas kor')
   }
   else{
    console.log('dure giya mor')
   }
}

const getUserInfo = () =>{
  const name = prompt('tell us your name')
  console.log(name)
  if(!! name){
    console.log('welcome here', name)
  }
}
