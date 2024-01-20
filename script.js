const Daily = document.getElementById('Daily');
const Weekly = document.getElementById('Weekly');
const Monthly = document.getElementById('Monthly');


async function getData() {
    let response = await fetch ('data.json');
    let finialResult = await response.json() ;
    return finialResult ;
}



document.addEventListener('DOMContentLoaded',async()=>
{
try{
    const data = await getData()
    Daily.addEventListener('click',()=>{
    const dailyCurrentValues = data.map(item => item.timeframes.daily.current);
    const dailypreviousValues = data.map(item => item.timeframes.daily.previous);
    outCurrentWork.innerHTML =` ${dailyCurrentValues[0]}Hrs`;
    outprevousWork.innerHTML = `previous-${dailypreviousValues[0]}hrs`;
    outCurrentExcercise.innerHTML =` ${dailyCurrentValues[3]}Hrs`;
    outprevousExcercise.innerHTML = `previous-${dailypreviousValues[3]}hrs`;
    outCurrentPlay.innerHTML =` ${dailyCurrentValues[1]}Hrs`;
    outprevousPlay.innerHTML = `previous-${dailypreviousValues[1]}hrs`;
    outCurrentStudy.innerHTML =` ${dailyCurrentValues[2]}Hrs`;
    outprevousStudy.innerHTML = `previous-${dailypreviousValues[2]}hrs`;
    outCurrentSocial.innerHTML =` ${dailyCurrentValues[4]}Hrs`;
    outprevousSocial.innerHTML = `previous-${dailypreviousValues[4]}hrs`;
    outCurrentselfCare.innerHTML =` ${dailyCurrentValues[5]}Hrs`;
    outprevousselfCare.innerHTML = `previous-${dailypreviousValues[5]}hrs`;
    Weekly.style.color = '';
    Daily.style.color = 'white';
    Monthly.style.color = '';    
    })

    Weekly.addEventListener('click',()=>{
        const weeklyCurrentValues = data.map(item => item.timeframes.weekly.current);
        const weeklypreviousValues = data.map(item => item.timeframes.weekly.previous);

     outCurrentWork.innerHTML =` ${weeklyCurrentValues[0]}Hrs`;
     outprevousWork.innerHTML = `previous-${weeklypreviousValues[0]}hrs`;
     outCurrentExcercise.innerHTML =` ${weeklyCurrentValues[3]}Hrs`;
    outprevousExcercise.innerHTML = `previous-${weeklypreviousValues[3]}hrs`;
    
    outCurrentPlay.innerHTML =` ${weeklyCurrentValues[1]}Hrs`;
    outprevousPlay.innerHTML = `previous-${weeklypreviousValues[1]}hrs`;
    outCurrentSocial.innerHTML =` ${weeklyCurrentValues[4]}Hrs`;
    outprevousSocial.innerHTML = `previous-${weeklypreviousValues[4]}hrs`;
    outCurrentStudy.innerHTML =` ${weeklyCurrentValues[2]}Hrs`;
    outprevousStudy.innerHTML = `previous-${weeklypreviousValues[2]}hrs`;
    outCurrentselfCare.innerHTML =` ${weeklyCurrentValues[5]}Hrs`;
    outprevousselfCare.innerHTML = `previous-${weeklypreviousValues[5]}hrs`;
    Weekly.style.color = 'white';
    Daily.style.color = '';
    Monthly.style.color = '';

    })

    Monthly.addEventListener('click',()=>{
    const monthlyCurrentValues = data.map(item => item.timeframes.monthly.current);
    const monthlypreviousValues = data.map(item => item.timeframes.monthly.previous);
    outCurrentWork.innerHTML =` ${monthlyCurrentValues[0]}Hrs`;
    outprevousWork.innerHTML = `previous-${monthlypreviousValues[0]}hrs`;
    outCurrentExcercise.innerHTML =` ${monthlyCurrentValues[3]}Hrs`;
    outprevousExcercise.innerHTML = `previous-${monthlypreviousValues[3]}hrs`;
    outCurrentPlay.innerHTML =` ${monthlyCurrentValues[1]}Hrs`;
    outprevousPlay.innerHTML = `previous-${monthlypreviousValues[1]}hrs`;
    outCurrentSocial.innerHTML =` ${monthlyCurrentValues[4]}Hrs`;
    outprevousSocial.innerHTML = `previous-${monthlypreviousValues[4]}hrs`;
    outCurrentStudy.innerHTML =` ${monthlyCurrentValues[2]}Hrs`;
    outprevousStudy.innerHTML = `previous-${monthlypreviousValues[2]}hrs`;
    outCurrentselfCare.innerHTML =` ${monthlyCurrentValues[5]}Hrs`;
    outprevousselfCare.innerHTML = `previous-${monthlypreviousValues[5]}hrs`;
    Monthly.style.color = 'white';
    Daily.style.color = '';
    Weekly.style.color = '';

    })

//work
    const outputWork = document.getElementById('titleWork');
    const outCurrentWork = document.getElementById('currentWork');
    const outprevousWork = document.getElementById('previousWork');
    const firsttitle =data[0].title;
    outputWork.innerHTML = firsttitle ;
//excerce
    const outputExcerce = document.getElementById('titleExcerce');
    const outCurrentExcercise = document.getElementById('currentExcercise');
    const outprevousExcercise = document.getElementById('previousExcercise');
    const fourth =data[3].title;
    outputExcerce.innerHTML=fourth;
//play
    const outputPlay = document.getElementById('titlePlay');
    const outCurrentPlay = document.getElementById('currentPlay');
    const outprevousPlay = document.getElementById('previousPlay');
    const second =data[1].title;
    outputPlay.innerHTML=second;
//Social
    const outputSocial = document.getElementById('titleSocial');
    const outCurrentSocial = document.getElementById('currentSocial');
    const outprevousSocial = document.getElementById('previousSocial');
    const fifth =data[4].title;
    outputSocial.innerHTML=fifth;
 //study
    const outputStudy = document.getElementById('titleStudy');
    const outCurrentStudy = document.getElementById('currentStudy');
    const outprevousStudy = document.getElementById('previousStudy');
    const Third =data[2].title;
    outputStudy.innerHTML=Third;
//selfCare
    const outputselfCare = document.getElementById('titleselfCare');
     const outCurrentselfCare = document.getElementById('currentselfCare');
    const outprevousselfCare = document.getElementById('previousselfCare');
    const sixth =data[5].title;
    outputselfCare.innerHTML=sixth;
}catch(e)
{
    console.log("error",e)
}})