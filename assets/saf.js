function check(){
	var ad= document.book_tickets.ad.value;
    console.log("total"); 
    var ikigali= document.book_tickets.tickets_quantity.value;
    console.log("total"); 
};
var price=1000;
if (ad == 0) {
        price = price *2;
    }
        console.log("price")
    
    document.getElementById("total_price").innerHTML = "HERE IS YOUR TOTAL PRICE: " + price ;
    console.log("price")
	    };