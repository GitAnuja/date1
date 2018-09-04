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
}