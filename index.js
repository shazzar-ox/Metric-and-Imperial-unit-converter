const numberEl = document.querySelector('#number-el')
const convertBtn = document.querySelector('#convert-btn')
const displayLength = document.querySelector('#display-length')
const displayVolume = document.querySelector('#display-volume')
const displayKilograms = document.querySelector('#display-kilograms')

let  data = ''




convertBtn.addEventListener('click', function()
{
   data = numberEl.value

   if (data)
   {
    let meterTofeet = (data * 3.281).toFixed(3) 
    let feetToMeter = (data / 3.281).toFixed(3) 
    let litreToGallon = (data * 0.264).toFixed(3) 
    let gallonToLitre = (data / 0.264).toFixed(3)
    let kilosToPounds = (data * 2.204).toFixed(3)
    let poundsToKilos = (data / 2.204).toFixed(3)
 
     displayLength.textContent = `${data} 
                                 meters = ${meterTofeet} feet | 
                                 ${data} feet = 
                                 ${feetToMeter} meters`
     displayVolume.textContent =  `${data} meters = 
                                 ${litreToGallon} feet |
                                 ${data} feet = ${gallonToLitre} meters`
     displayKilograms.textContent =  `${data} meters = 
                                 ${kilosToPounds} feet | 
                                 ${data} feet = ${poundsToKilos} meters`
   }
   else {
    
   }
   
})

