//initialization
let count=0;

const values =document.querySelector('#value');
const btns= document.querySelectorAll('.btn');


 btns.forEach( function(btn){
      btn.addEventListener('click',function  (e) {
            const styles= e.currentTarget.classList;
            if(styles.contains('increase')){
                count++;
                } else if(styles.contains('decrease')){
                    count--;
                }else{
                    count=0;
                }
               values.textContent= count;
      });
 });