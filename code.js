//page load glob of code


$(document).ready(
    function(){
        // find the button with jquery

        // assign function to run when the button is clicked

        $("button").click(code);
    }
);

function code(){
    //let totalPizza = parseFloat( prompt("How many Pizza's will you order"));

    let totalPizza = parseFloat( $("input#totalPizza").val() );

    //let totalToppings = parseFloat(prompt("What is the amount of total toppings?"));

    let totalToppings = parseFloat( $("input#totalToppings").val() );

    //let totalPeople = parseFloat(prompt("How many of you are there total?"));

    let totalPeople = parseFloat( $("input#totalPeople").val() );

    let totalCost = (totalPizza * 15) + (totalToppings * 1.25);

    let costPerPerson = totalCost / totalPeople;

    let displayCPP = costPerPerson.toFixed(2);

    //alert(`The cost will be $${displayCPP} per person.`)
    $("#displayCPP").text(displayCPP);

}