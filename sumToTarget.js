/*Prompt: Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together, give the target number. 
For example: answer([1,2,3], 4)should return [1,3]*/


//Input values
const numArray = [1, 2, 3];
const target = 4;

/*
* Sum to target
* @param numArray an array of numbers
* @param target represents target sum of two numbers
* @return an array of two numbers if found to add to target, 0 otherwise
*/
const sumToTarget = (numArray, target) => {
	
	//Initialize final array to be returned
	let addends = [];

	//Outer iterator
	let i = 0;

	//Outer while loop
	while(i < numArray.length - 1){

		//Inner iterator
		let j = i+1;

		//Inner while loop
		while(j < numArray.length){

			//Check to see if current nums add to target
			if(numArray[i] + numArray[j] === target){
				addends.push(numArray[i]);
				addends.push(numArray[j]);
				return addends;
			}

			j++;
		}

		i++;
	}

	//Return 0 if no pairs add to target
	return 0;
}

sumToTarget(numArray, target);