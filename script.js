let n= +prompt('Son kiriting')
while (isNaN(n)||n=='') {
    n=+prompt('Son kiritishingiz kerak')
}
let simvol= "[*]";
for (let i = 0; i < n; i++) {
    let temp = '';
  for (let k = 0; k < n; k++) {
      if (i==0||i==n-1||k==0||k==n-1||i==k) {
          temp+=simvol
      }else{
          temp+='   ';
      }


  }  
  
  console.log(temp) 
}

function random(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}
console.log(random(1,10));

let son=+prompt('Misollar sonini kiriting')
function misol(son) {
    for (let i = 0; i < son; i++) {
    let n1 =random(1,10);
        let n2 = random(1,10);
        let javob;
        let sign = random(1,4);
        if (sign==1) {
            sign = '+';
            javob = n1+n2;
        } else if(sign==2){
            sign = '-';
            javob = n1-n2;
        } else if(sign==3){
            sign = '*';
            javob = n1*n2;
        } else if(sign==4){
            sign = '/';
            javob = n1/n2;
        }
        
        let anwerUser = prompt(`${n1} ${sign} ${n2} = `);
        alert(anwerUser==javob?`Sizning javobingiz togri ${anwerUser}`:`Sizning javobingiz notogri: ${anwerUser}. Togri javob: ${javob}` )
    }
   
}
misol(son)