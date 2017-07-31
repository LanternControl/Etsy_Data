// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
    let avgPrice = 0;
    for( let i = 0; i < data.length; i++) { 
       avgPrice = avgPrice + data[i].price;
    } console.log(avgPrice/data.length);
}




// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:
    let between = [];
    for (let i = 0; i < data.length; i++ ) {
    if ( data[ i ].price >= 14 && data[i].price <= 18){
        between.push(data[ i ].title)
    } 
    }   console.log(between);
    
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
        let currency = [];
        for (let i= 0; i < data.length; i++){
        if (data[ i ].currency_code == "GBP"){
            currency += data[i].title + " costs " + data[i].price + " pounds."

        }
        }console.log(currency)
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
    let mats = [];
    for (let i= 0; i < data.length; i++) {
    if( data[ i ].materials.includes("wood") ) {
        mats.push(data[ i ].title + " is made of wood")
    }
}
    console.log(mats);
}


// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.
function question5 () {
  // Answer:
    let bushel = [];
    for (let i = 0; i< data.length; i++) {
        if (data[i].materials.length >= 8) {
            bushel.push(data[i].title + " has " + data[i].materials.length + " materials.")
            for (let j = 0; j < data[i].materials.length; j++)
                bushel.push(data[ i ].materials[j])
        }
    }
    console.log(bushel);
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
    let sellers=[];
    for (let i=0; i < data.length; i++){
        if (data[i].who_made == "i_did"){
            sellers.push(data[i].title);
}
}   console.log(sellers.length + " items were made by their sellers.");
}
    
