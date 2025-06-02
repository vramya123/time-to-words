// expecting time to be a string in the format like '8:15' or '12:30'
/*


- '0:00' > 'midnight'
- '12:00' > 'midday'
- '2:00' > 'two o'clock'
- '2:03' > 'three past two'
- '2:11' > 'eleven past two'
- '2:15' > 'quarter past two' 
- '2:30' > 'half past two'
- '2:33' > 'twenty seven to three'
- '2:40' > 'twenty to three'
- '2:45' > 'quarter to three' 
- '2:55' > 'five to three'
*/

const stringLiterals  = {
     15 : "quarter",
     30 : "half",
     5 : "five",
     27 : "twenty seven",
     3: "three",
     2: "two",
     0 : "midnight",
     12 : "midday"
}
//2:33
//2  33 (60-33 = 27)
function convertTimeToWords(time) {

   const splitTime = time.split(":")
   let hour = splitTime[0]
   let  minute = splitTime[1]
   let wordFormat =''
   if(Number(minute) > 30){
       const newMinTime = 60 - Number(minute)
       if(stringLiterals[newMinTime]){
           wordFormat = stringLiterals[newMinTime]
       }else{
           throw new Error("String literal not defined for number")
       }
       //increment first half
      hour = Number(hour)+1
      hour = stringLiterals[hour]

      return `${wordFormat} to ${hour}`
  //'2:15' > 'quarter past two' 
   }else if (Number(minute) < 30){
     let min = Number(minute)
      hour = Number(hour)
      hour = stringLiterals[hour]
     if( minute === "00"){
        return `${hour}`
     }else{
      if(stringLiterals[min]){
           wordFormat = stringLiterals[min]
       }else{
           throw new Error("String literal not defined for number")
       }

      return `${wordFormat} past ${hour}`
     }

   }else{

   }

  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }

  return 'half past eight';
}

module.exports = { convertTimeToWords };