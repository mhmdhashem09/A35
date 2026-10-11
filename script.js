function calculateTicket(){
    var name=document.getElementById("name").value;
    var age=Number(document.getElementById("age").value);
    var tickets=Number(document.getElementById("tickets").value);

    if (name==="" || age<=0 || tickets<=0){
        document.getElementById("result").innerHTML=
        "Please enter a name, a valid age and at least 1 ticket";
        return;
    }

    var price;
    if (age<=12){
        price=5;
    } 
    else if (age<=17){
        price=7;
    }
    else {
        price=10;
    }

    var total=price*tickets;
    document.getElementById("result").innerHTML=
    "<h2>"+name+"'s Ticket </h2>"+
    "Price per ticket: $"+price+"<br>"+
    "Number of tickets: "+tickets+"<br>"+
    "Total: $"+total;
}

function clearTicket(){
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("tickets").value="";
    document.getElementById("results").innerHTML="";
}