let bill= document.getElementById('bill-input')
let selectTipBtn= document.getElementsByClassName('btn-tip-percent')
let tipCustom= document.getElementById('custom-tip')
let main= document.getElementById('main')
let tipAmount= document.getElementById('result-tip-amount')
let totalPerPerson= document.getElementById('result-total-bill')
let tip=0
let numberOfPeople= document.getElementById('quantity-people')
let btnReset= document.getElementById('btn-reset')
for(let i=0;i<selectTipBtn.length; i++){
    selectTipBtn[i].addEventListener('click', function(){
        for(let i=0;i<selectTipBtn.length;i++){
            selectTipBtn[i].classList.remove('selecte')
        }
        tip= 0
       this.classList.toggle('selecte')
       tip= this.value /100
       return tip
       
    })
}
let peoples
numberOfPeople.addEventListener('blur', function(){
     peoples=numberOfPeople.value
     console.log(peoples)
    return peoples
})
let billInput
bill.addEventListener('blur', function(){
    billInput=bill.value
    console.log(billInput)
   return billInput
})
tipCustom.addEventListener('blur',function(){
   tip= this.value/100
   
})

let titlePeople= document.getElementById('titlePeople')
setInterval(function(){
    if(billInput>0 ){
        if(peoples>0){
let billWichTip= billInput*(tip+1)
    let onlyTip= billWichTip-billInput
  tipAmount.value= onlyTip/peoples

  totalPerPerson.value= billWichTip /peoples
  titlePeople.classList.remove('cant-be-zero-label') 
  numberOfPeople.classList.remove('cant-be-zero') 
        }else{
            numberOfPeople.classList.add('cant-be-zero') 
            titlePeople.classList.add('cant-be-zero-label') 
        }
 

    }else{
        tipAmount.value= "0.00"

  totalPerPerson.value= "0.00"
    }
   
 
},1)

btnReset.addEventListener('click',function(){
  bill.value= ''
   document.getElementById('quantity-people').value= ''
   document.getElementById('bill-input').value=''
   document.getElementById('custom-tip').value= null
   tipAmount.value= "0.00"
  totalPerPerson.value= "0.00"
  billInput=0
})