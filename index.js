const icon = document.querySelector('.icon');
const id = document.querySelector('.id');
const quote = document.querySelector('.quote');

icon.addEventListener('click' , () => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then ( data = (datas) => {
        id.innerHTML = `Advice #${datas.slip.id}`
        const breakString = (str, limit) => {
            let brokenString = '';
            for(let i = 0, count = 0; i < str.length; i++){
               if(count >= limit && str[i] === ' '){
                  count = 0;
                  brokenString += '\n';
               }else{
                  count++;
                  brokenString += str[i];
               }
            }
            return brokenString;
         }
        quote.innerText = `"${breakString(datas.slip.advice, 35)}"`
    })
})