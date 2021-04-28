const watch = document.querySelector('.watch');

const ticks = ()=>{
    const now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    //console.log(`${hours} : ${minutes} :  ${seconds}`);
    const html = `
        <span>${hours}</span> : 
        <span>${minutes}</span> : 
        <span>${seconds}</span> 

    `;
    watch.innerHTML = html;
}; 

setInterval(ticks, 1000);