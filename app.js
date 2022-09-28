const canvas = document.getElementById('canvas');
const button = document.getElementById('button');



const randomcolor = () =>{
    let value = '0123456789ABCDEF';
    let hashtag = '#';
  for(let i = 0; i <6;i++){
    hashtag = hashtag + value[Math.floor(Math.random() *16)];

  }

  canvas.style.backgroundColor = hashtag;
console.log(hashtag);
}




button.addEventListener('click',randomcolor)







