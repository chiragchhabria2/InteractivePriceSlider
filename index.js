/* - 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month */

let pageViews = document.getElementById("pageviews")
let priceBar = document.getElementById("pricebar")
let toggleSwitch = document.getElementById("toggle")
let amount = document.getElementById("amount")
let pricePoints = [8.00 , 12.00 ,16.00 ,24.00 , 36.00]
let pricePointsCopyArray = [...pricePoints]
let pageViewsArray = [[10000 , "10K"] ,[50000 , "50K"] , [100000 , "100K"] , [500000 , "500K"] ,[1000000 , "1M"] ]

// for recording last value passed in setValue 
let lastNumPassed = 0

pageViews.textContent = ` ${  pageViewsArray[0][1]} PAGEVIEWS`
    amount.textContent = pricePoints[0].toFixed(2)
document.getElementById("pricebar").oninput = function() {
 
  if(priceBar.value < pricePoints[0])
  {
    priceBar.value = pricePoints[0]
    setValue(0)
  }
  
    for (let i = 1; i < pricePoints.length; i++) {
      if (priceBar.value > pricePoints[i-1] &&
        priceBar.value < pricePoints[i]) {
          priceBar.value = pricePoints[i]
          setValue(i)
          
        
      }
      
    }
    let tempValue = (this.value-this.min)/(this.max-this.min)*100
    let slider = window.getComputedStyle(pricebar , "::webkit-slider-runnable-track")
    
    this.style.background = `linear-gradient(to right, var(--Bar-Progress) 0%, var(--Bar-Progress) ${tempValue}%, var(--Empty-Slider-Bar) ${tempValue}%, var(--Empty-Slider-Bar) 100%)`
  };

toggleSwitch.addEventListener("click"  , function() {
  
  
  if (toggleSwitch.checked == true)
  {
    for (let i = 0; i < pricePoints.length; i++) {
      pricePoints[i] -= pricePoints[i] * 25 / 100
      setValue(lastNumPassed)
    }
   
  }
  else {
    pricePoints = [...pricePointsCopyArray]
    setValue(lastNumPassed)
  }
})


function setValue(num) {
  
  pageViews.textContent = `${pageViewsArray[num][1]} PAGEVIEWS`
  amount.textContent = pricePoints[num].toFixed(2)
  lastNumPassed = num 
}










