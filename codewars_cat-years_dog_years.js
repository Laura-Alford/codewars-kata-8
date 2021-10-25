const humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    let catYears=0;
    let dogYears=0;
    
    for (let a =1; a<= humanYears; a++) {
      if (a===1) {
        catYears +=15;
        dogYears +=15;
      }
      else if (a===2) {
        catYears +=9;
        dogYears +=9;
      }
      else {
        catYears +=4;
        dogYears +=5;
      }
    }  
    
    return [humanYears,catYears,dogYears];
  }
