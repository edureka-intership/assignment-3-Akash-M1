//1. Create a JavaScript restaurantManager class with the following properties:
class restaurantManager{
    restaurantList;
    printAllRestaurantNames(){
        restaurantList.forEach(element => {
            console.log(element.name);
        });
    }
    filterRestaurantByCity(city){
        restaurantList.filter(element => element.city == city);
    }
}

//2. Please find order details for Punjabi Tadka restaurant in Delhi as:

var orderData = {
    'Below 500': 20, 
    '500-1000': 29, 
    '1000-1500': 30, 
    '1500-2000': 44, 
    'Above 2000': 76 
};

//a. Calculate the total number of orders placed for the restaurant?.
var ordervalues=Object.values(orderData);
sum=0;
ordervalues.forEach(element =>{
    sum+=element;
});
console.log("Total number of orders placed = ",sum);

//b. Calculate the number of order proportion options.
console.log("Total number of order proportions",Object.keys(orderData).length);


//c. Calculate the percentage of each proportion in below format:
var percdata=[];
var i=1;
Object.keys(orderData).forEach(element =>{
    var dataobj={};
    dataobj.id=i;
    dataobj.order=element;
    dataobj['order percentage']=(orderData[element]/sum)*100;
    dataobj.restaurant="Punjabi Tadka";
    percdata.push(dataobj);
});
console.log(percdata);