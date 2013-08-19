var array_fact={};
  function calc_fact(num) {
    var fact=1;
    if(array_fact[num])return array_fact[num];
    for (var i = 1; i <=num; i++) {
        fact *= i;

    }
    array_fact[num]=fact;
    return fact;
}

var result_array=[];
function find_sum_fact(number){

   var res=0;
   arr=number.toString().split('');
   for(var i=0;i<arr.length;i++){
   	numObj = Number(arr[i]);
   	res+=calc_fact(numObj);
   	if(res==number){
   		result_array.push(number);
   		}
   }
   return res;
}
function get_number(){
	for(var i=100;;i++){
		find_sum_fact(i);
	}
	console.log(result_array);
}
