const detailsButton = document.getElementById('detail-submit-btn').addEventListener('click', function () {
    const buyerDetails = document.getElementById('buyer-details-input');
    document.getElementById('buyer-info').innerText = buyerDetails.value;
    buyerDetails.value = '';
})

const addProductBtn = document.getElementById('add-details-btn').addEventListener('click', function () {
    const infoTable = document.getElementById('info-table');
    const itemName = document.getElementById('item-name-input');
    const itemPrice = document.getElementById('item-price-input');
    const itemQuantity = document.getElementById('item-quantity-input');

    if (
        itemName.value == '' || itemPrice.value == '' || itemQuantity.value == '' || itemPrice.value < 0 || itemQuantity.value < 0
    ) {
        console.log('Sorry');
        return;
    }

    const totalPrice = parseFloat(itemPrice.value) * parseFloat(itemQuantity.value);

    const tr = element('tr');
    const th = element('th');
    const td1 = element('td');
    const td2 = element('td');
    const td3 = element('td');

    function element(p) {
        return document.createElement(p);
    }

    td3.classList.add('item-total');
    th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = itemQuantity.value;
    td3.innerText = totalPrice;

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    infoTable.appendChild(tr);
    totalCalculation();

    itemName.value = '';
    itemPrice.value = '';
    itemQuantity.value = '';
    
    function totalCalculation() {
        const subTotal = calculateSubTotal();

        const subTotalDisplay = document.getElementById('sub-total');
        subTotalDisplay.innerText = subTotal;

        const tax = subTotal * 0.2;

        document.getElementById('tax').innerText = tax.toFixed(2);
        document.getElementById('grand-total').innerText = tax + subTotal;
        document.getElementById('grand-total-2').innerText = tax + subTotal;
    }

    function calculateSubTotal() {
        let subTotal = 0;

        const cost = document.getElementsByClassName('item-total');

        for (let i = 0; i < cost.length; i++) {
            const element = cost[i];
            const price = parseInt(element.innerText);

            subTotal = subTotal + price;
        }
        return subTotal;
    }
})
