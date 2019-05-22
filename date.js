var date = function date(){
	this.closestToIndex = function(dateToCompare, datesArray){
		var index = 0;
		var min = Math.abs(dateToCompare-datesArray[0]);
		for(var i=1; i<datesArray.length; i++){
			var diff = Math.abs(dateToCompare-datesArray[i]);
			if(diff < min){
				index = i;
			}
		}
		return index;
	}
	this.closestTo = function(dateToCompare, datesArray){
		return datesArray[this.closestToIndex(dateToCompare, datesArray)];
	}
	this.compareAsc = function(date1, date2){
		if(date1-date2 < 0){
			return -1;
		}
		else if(date1-date2 > 0){
			return 1;
		}
		return 0;
	}
	this.compareDesc = function(date1, date2){
		return this.compareAsc(date2, date1);
	}
	console.log("git hook123456789")
}