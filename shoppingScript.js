obj = [{
    Catagory: "Fruit",
    Name: "Apple",
    MRP: 01,
    Quantity: 0
}, {
    Catagory: "Fruit",
    Name: "Pineapple",
    MRP: 02,
    Quantity: 0
}, {
    Catagory: "Fruit",
    Name: "grapes",
    MRP: 03,
    Quantity: 0
}, {
    Catagory: "Fruit",
    Name: "Banana",
    MRP: 04,
    Quantity: 0
}, {
    Catagory: "Fruit",
    Name: "Orange",
    MRP: 05,
    Quantity: 0
}, {
    Catagory: "Vegetable",
    Name: "Patato",
    MRP: 06,
    Quantity: 0
}, {
    Catagory: "Vegetable",
    Name: "tamato",
    MRP: 07,
    Quantity: 0
}, {
    Catagory: "Vegetable",
    Name: "Beans",
    MRP: 08,
    Quantity: 0
}, {
    Catagory: "Vegetable",
    Name: "Chilly",
    MRP: 09,
    Quantity: 0
}, {
    Catagory: "Vegetable",
    Name: "Carrot",
    MRP: 10,
    Quantity: 0
}];




function showContent() {
    //document.getElementById("searchResult").innerHTML = "";
    inputValue = document.getElementById("inputContent").value; //getting input value
    console.log(inputValue);

    //creating table heading
    trFirst = document.createElement("tr");
    thName = document.createElement("th");
    thCategory = document.createElement("th");
    thMRP = document.createElement("th");
    thQuantity = document.createElement("th");

    txtName = document.createTextNode("Name");
    txtCategory = document.createTextNode("Category");
    txtMRP = document.createTextNode("MRP");
    txtQuantity = document.createTextNode("Quantity");

    thName.appendChild(txtName);
    thCategory.appendChild(txtCategory);
    thMRP.appendChild(txtMRP);
    thQuantity.appendChild(txtQuantity);

    trFirst.appendChild(thCategory);
    trFirst.appendChild(thName);
    trFirst.appendChild(thMRP);
    trFirst.appendChild(thQuantity)
    document.getElementById("searchResult").appendChild(trFirst);

    //Showing search table
    obj.forEach(item => {
        if (item.Name.includes(inputValue) && inputValue != "") {
            trSecond = document.createElement("tr");
            tdName = document.createElement("td");
            tdCategory = document.createElement("td");
            tdMRP = document.createElement("td");
            tdQuantity = document.createElement("td");

            txtNameData = document.createTextNode(item.Name);
            txtCategoryData = document.createTextNode(item.Catagory);
            txtMRPData = document.createTextNode(item.MRP);
            txtQuantityData = document.createElement("Input");
            txtQuantityData.setAttribute("type", "number");
            txtQuantityData.setAttribute("value", "0");
            txtQuantityData.setAttribute("id", item.Name);

            txtQuantityData.addEventListener('change', () => {
                // update Quantity here
                item.Quantity = document.getElementById(item.Name).value;
                console.log("quantity value" + item.Quantity);
            });

            console.log(item.Catagory, item.Name, item.MRP, item.Quantity)

            tdName.appendChild(txtNameData);
            tdCategory.appendChild(txtCategoryData);
            tdMRP.appendChild(txtMRPData);
            tdQuantity.appendChild(txtQuantityData);

            trSecond.appendChild(tdCategory);
            trSecond.appendChild(tdName);
            trSecond.appendChild(tdMRP);
            trSecond.appendChild(tdQuantity);
            document.getElementById("searchResult").appendChild(trSecond);
        } else {
            console.log("Not found");
        }
    });


}

function cart() {

    console.log("inside cart");

    //creating table heading after pressing add to cart
    trFirstCart = document.createElement("tr");
    thNameCart = document.createElement("th");
    thMRPCart = document.createElement("th");
    thQuantityCart = document.createElement("th");

    txtNameCart = document.createTextNode("Name");
    txtMRPCart = document.createTextNode("MRP");
    txtQuantityCart = document.createTextNode("Quantity");

    thNameCart.appendChild(txtName);
    thMRPCart.appendChild(txtMRP);
    thQuantityCart.appendChild(txtQuantity);

    trFirstCart.appendChild(thNameCart);
    trFirstCart.appendChild(thMRPCart);
    trFirstCart.appendChild(thQuantityCart)
    document.getElementById("tableCart").appendChild(trFirstCart);

    //Showing Cart table of selected items
    obj.forEach(item => {
        if (item.Quantity > 0) {
            console.log("success")

            cartTr = document.createElement("tr");
            cartTd1 = document.createElement("td");
            cartTd2 = document.createElement("td");
            cartTd3 = document.createElement("td");

            txtTd1 = document.createTextNode(item.Name);
            txtTd2 = document.createTextNode(item.MRP);
            txtTd3 = document.createTextNode(item.Quantity);

            cartTd1.appendChild(txtTd1);
            cartTd2.appendChild(txtTd2);
            cartTd3.appendChild(txtTd3);

            cartTr.appendChild(cartTd1);
            cartTr.appendChild(cartTd2);
            cartTr.appendChild(cartTd3);
            document.getElementById("tableCart").appendChild(cartTr);



        } else {
            console.log("Not found");
        }

    });
}

function checkOut() {
    var total = 0;
    //creating table heading 
    billTr = document.createElement("tr");
    billNameTh = document.createElement("th");
    billMRPTh = document.createElement("th");
    billQuantityTh = document.createElement("th");
    billToatlTh = document.createElement("th");

    txtBillName = document.createTextNode("Name");
    txtBillMRP = document.createTextNode("MRP");
    txtBillQuantity = document.createTextNode("Quantity");
    txtBillTotal = document.createTextNode("Total");

    billNameTh.appendChild(txtBillName);
    billMRPTh.appendChild(txtBillMRP);
    billQuantityTh.appendChild(txtBillQuantity);
    billToatlTh.appendChild(txtBillTotal);

    billTr.appendChild(billNameTh);
    billTr.appendChild(billMRPTh);
    billTr.appendChild(billQuantityTh);
    billTr.appendChild(billToatlTh);

    document.getElementById("totalBill").appendChild(billTr);


    //Showing Cart table of selected items
    obj.forEach(item => {
        if (item.Quantity > 0) {


            billTr2 = document.createElement("tr");
            billTd1 = document.createElement("td");
            billTd2 = document.createElement("td");
            billTd3 = document.createElement("td");
            billTd4 = document.createElement("td");

            txtBillTd1 = document.createTextNode(item.Name);
            txtBillTd2 = document.createTextNode(item.MRP);
            txtBillTd3 = document.createTextNode(item.Quantity);
            txtBillTd4 = document.createTextNode(item.Quantity * item.MRP);

            billTd1.appendChild(txtBillTd1);
            billTd2.appendChild(txtBillTd2);
            billTd3.appendChild(txtBillTd3);
            billTd4.appendChild(txtBillTd4);

            billTr2.appendChild(billTd1);
            billTr2.appendChild(billTd2);
            billTr2.appendChild(billTd3);
            billTr2.appendChild(billTd4);
            document.getElementById("totalBill").appendChild(billTr2);

            total += (item.Quantity*item.MRP);//total bill is calculated here


        } else {
            console.log("Not found");
        }


    });
        document.getElementById("billText").innerHTML= total;


}

function resetCart() {

    //window.location.href="shopping_cart.html"
    document.getElementById("searchResult").innerHTML = "";
    alert("Data will reset.Do you agree?");
}