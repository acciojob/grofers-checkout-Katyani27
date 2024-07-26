const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Get all price elements
    const prices = document.querySelectorAll(".price");
    
    // Calculate the total price
    let totalPrice = 0;
    prices.forEach(price => {
        totalPrice += parseFloat(price.textContent);
    });
    
    // Create a new row for the total price
    const table = document.querySelector("table");
    const newRow = document.createElement("tr");
    const newCell = document.createElement("td");
    
    // Set the new cell to span both columns
    newCell.setAttribute("colspan", "2");
    newCell.textContent = `Total Price: Rs ${totalPrice}`;
    
    newRow.appendChild(newCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
