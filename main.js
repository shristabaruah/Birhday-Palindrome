function reverseStr(str){
    var listOfChars =str.split('');
    var revereseListOfChars = listOfChars.reverse();
    var reversedStr = revereseListOfChars.join('');
    return reversedStr;
    // return str.split('').reverse().join(''); (In one line)
}

function IsPalindrome(str){
    var reverse = reverseStr(str);
    return str===reverse;
}
    function convertDateToStr(date){
        var dateStr = { day:'',month:'',year:''};

        if(date.day < 10){
            dateStr.day = '0'+ date.day;
        }else{
            dateStr.day = date.day.toString();
        }

        if(date.month < 10){
            dateStr.month = '0'+ date.month;
        }else{
            dateStr.month = date.month.toString();
        }
            dateStr.year = date.year.toString();
             return dateStr;
        

    }

    var date = {
        day:5,
        month:9,
        year:2020

    }
    console.log(convertDateToStr(date));


    function getAllDateFormats(date){
        var dateStr = convertDateToStr(date);

        var ddmmyyy =dateStr.day + dateStr.month +dateStr.year;
        var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
        var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
        var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
        var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
        var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
        return [ddmmyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd];
    }

    function checkPalindromeForAllDateFormats(date){
        var listOfPalindrome = getAllDateFormats(date);
        var flag = false;

        for( var i = 0; i < listOfPalindrome.length; i++){
            if(IsPalindrome(listOfPalindrome[i])){
                flag = true;
                break;

            }
            
        }
        return flag;
    }
    function IsLeapYear(year){
        if(year % 400 ===0){
            return true;
        }
        if (year % 100 === 0){
            return false;
        }
        if(year % 4 === 0){
            return true;
        }
        return false;
    }


    function getNextDate(date){
        var day =date.day +1;
        var month = date.month;
        var year = date.year;

        var daysInmonth = [31,28,31,30,31,30,31,31,30,31,30,31];


        if(month === 2){
            if(IsLeapYear(year)){
                if(day > 29){
                    day = 1;
                    month++;
                }
            }else{
                if(day > 28){
                    day = 1;
                    month++;
                }

            }

        }
        else{
            if(day > daysInmonth[month-1]){
                day = 1 ;
                month++;
            }
        }
        if(month > 12){
            month = 1;
            year++;
        }
        return{
            day: day,
            month : month,
            year : year
        }

    }

    function getNextPalindromeDate(date){
        var cntr = 0;
        var nextdate  = getNextDate(date);

        while(1){
            cntr++;
            var isPalindrome = checkPalindromeForAllDateFormats(nextdate);
            if(isPalindrome){
                break;
            }
             nextdate =getNextDate(nextdate);
        }
        return [cntr,nextdate];

    }
        var date = {
        day: 31,
        month: 12,
        year:2020
    };

    var dateInput = document.querySelector('#date');
    var button = document.querySelector('#btn');
    var resultel = document.querySelector('#result');

      function clickhandler(e){
          var bdayStr = dateInput.value;
          if(bdayStr !== ''){
              var listofdate = bdayStr.split('-');
              var date ={
                  day : Number(listofdate[2]),
                  month : Number(listofdate[1]),
                  year : Number(listofdate[0])
              };
              var isPalindrome = checkPalindromeForAllDateFormats(date);
              if(isPalindrome){
                  resultel.innerText =' Yay! Your Birthday is Palindrome!!'
              }else{
                  var [cntr,nextdate] = getNextPalindromeDate(date);
                  resultel.innerText = `The next Palindrome date is  ${nextdate.day}-${nextdate.month}-${nextdate.year} , you missed it by ${cntr} days`
              }
          }

      }
    button.addEventListener('click',clickhandler);
     