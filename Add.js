S_totl = " "
T_Totl = " "
new_prize = " "
function Save_data(){
    User_name = document.getElementById("Name").value 
    Phone = document.getElementById("Num").value 
    Address = document.getElementById("Add").value 
    localStorage.setItem("Name",User_name)
    localStorage.setItem("Num",Phone)
    localStorage.setItem("Address",Address)
    window.open("visit.html")
}
function get_data(){
    Size = localStorage.getItem("Size")
    Toppings = localStorage.getItem("Toppings")
    Pizza = localStorage.getItem("Pizza")
    Qunty = localStorage.getItem("Quanity")
    console.log(Size,Toppings,Pizza,Qunty)
    if(Size == "CheeseBurst"){
        S_totl = 80
        document.getElementById("S_totl").innerHTML = "Cheese burst - 80"
        Siz_priz = 80
    }
    else if(Size == "New Hand Tossed"){
        S_totl = 50
        document.getElementById("S_totl").innerHTML = "New Hand Tossed-50"
        Siz_priz = 50
    }
    else{
        S_totl = 30
        document.getElementById("S_totl").innerHTML = "Fresh Pan Pizza-30"
        Siz_priz = 30
    }


    if(Toppings == "Grilled Mushroom"){
        T_Totl = 40
        document.getElementById("T-Totl").innerHTML = "Grilled Mushroom - 40"
        T_priz = 40
    }
    else if(Toppings == "Panner"){
        T_Totl = 30
        document.getElementById("T-Totl").innerHTML = "Panner - 30"
        T_priz = 30
    }
    else{
        T_Totl = 20
        document.getElementById("T_Totl").innerHTML = Toppings + T_Totl
        T_priz = 30
    }
    new_prize = 120 * Qunty
    document.getElementById("Pizza").innerHTML = Pizza +":- "+  new_prize
    Your_totl = T_priz + new_prize + Siz_priz
    document.getElementById("Your_totl").innerHTML = "Your Total is :-"+ Your_totl
}
