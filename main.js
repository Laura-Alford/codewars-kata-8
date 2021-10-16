function periodIsLate(last, today, cycleLength){

    const period = new Date(last);
    period.setDate(period.getDate() + cycleLength);
    
    if (period >= today)
      return false
    else {
      return true
    }

}
