1 function addition(x,y){
    let sum = x + y
    return sum
  }
  console.log(addition(4 , 7))
  console.log(addition(-3 ,-7))
  console.log(addition(4 , 8))
  
   2 function integer(x){
    let result = x + 1
    return result 
  }
  console.log(integer(0))  
  console.log(integer(9))
  console.log(integer(-3))
  
   3 function ageConverter(ageInYear){
    let calcAge = ageInYear + (ageInYear*365)
  
  return calcAge
  }
  console.log(ageConverter(65))
  console.log(ageConverter(0))
  console.log(ageConverter(20))
  
   4 function powerCalculator(voltage, current){
    let power = voltage * current
    return power
  }
  console.log(powerCalculator(230, 10))
  console.log(powerCalculator(110, 3))
  console.log(powerCalculator(480, 20))
  
   5 function giveMesomething(something){
    let result = 'something' + ' ' +something 
    return result
  }
  console.log(giveMesomething('Bob Jane'))
  console.log(giveMesomething('something'))
  console.log(giveMesomething('is better than nothing'))
  
   6 function concatName(firstName, lastName){
    let fullName = "\" "+ lastName  + " , "+ firstName +  "\""
    return fullName
  }
  console.log(concatName("Johnny", "Bravo"))
  console.log(concatName("John", "Doe"))
  console.log(concatName("Mary", "Jane"))
  
   7 function numbers(num1, num2){
  let remainder = num1%num2
    return remainder
  }
  console.log(numbers(1,3))
  console.log(numbers(3,4))
  console.log(numbers(-9,45))
  
  
   8 function returnNagative(x){
    let negNumber = Math.abs(-x) 
    return negNumber
  }
  console.log(returnNagative(-4))
  console.log(returnNagative(-15))
  console.log(returnNagative(-10))
  console.log(returnNagative(0))
  
    9a function stringNumberConversion(number){
     let result = string(number) 
     return result
     
   }
   console.log(stringNumberConversion(4))
  
    9b function stringNumberConversion(valueInString){
     let result = Number(valueInString)
   return result
    }  
  
   console.log(stringNumberConversion('4'))
  
   10  function carPassenger(n){
     let result = Math.ceil(n / 5)
     
     return result
   }
  console.log(carPassenger(11))
  console.log(carPassenger(5))
  console.log(carPassenger(13))
  
   11 function numberArgs(){
    return arguments.length;
     
  };
  console.log(numberArgs('a','a','a'));
  console.log(numberArgs('19','6','7'));
  console.log(numberArgs('19','6','7','5'));
  
    15 function number(x){
     let squareRoot = Math.sqrt(x)
     return squareRoot
   } 
  console.log(number(4))
  console.log(number(9))
  console.log(number(25))
  
  
   14 function argType(x){
   let result = typeof(x)
    return result
  }
  console.log(argType('the man ran away'))
  console.log(argType('t'))
  console.log(type(1))
   13a function stuttering(innn){
    let result = ' innn... innccr... ' +(innn) + '?'
    return result
  }
  console.log(stuttering('incredible'))
  
   13b function stuttering(ennn){
      let result = 'ennn... enthhh... '+(ennn) + '?'
      return result
  }
  
  console.log(stuttering('enthusiastic'))
  
   13c function stuttering(outttt){
      let result = 'outssst... outtt... '+(outttt) + '?'
  }
  console.log(stuttering('outstanding'))
  
  
  
  
  12 function wordCharWord(character, second){
    let result =  character + ' ' + second + " " + character 
    return result
  }
  console.log(wordCharWord('#', 'hello world!'))
  
  console.log(wordCharWord('his', 'lets jump on code'))
  
  