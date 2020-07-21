database = [
    {
       barcode: 'ITEM000000',
       name: 'Coca-Cola',
       price: 3
     },
     {
       barcode: 'ITEM000001',
       name: 'Sprite',
       price: 3
     },
     {
       barcode: 'ITEM000002',
       name: 'Apple',
       price: 5
     },
     {
       barcode: 'ITEM000003',
       name: 'Litchi',
       price: 15
     },
     {
       barcode: 'ITEM000004',
       name: 'Battery',
       price: 2
     },
     {
       barcode: 'ITEM000005',
       name: 'Instant Noodles',
       price: 4
     }
 ]

function printReceipt(barcodes) {
    
    cartItem = countBarcodesNums(barcodes);
    cartItemDetails = perfectBarcodeInfo(cartItem);
    cartItemDetailsWithTotalPrice = countItemTotalPrice(cartItemDetails);
    totalPrice = countTotalPrice(cartItemDetailsWithTotalPrice);
    receipt = GenerateReceipt(cartItemDetailsWithTotalPrice,totalPrice);
    console.log(receipt);
}

function countBarcodesNums(barcodes){
    let cartItem = [];
    let barcodesMap = new Map();
    for(let indexOfBarcodes = 0; indexOfBarcodes < barcodes.length; indexOfBarcodes ++){
        let barcode = barcodes[indexOfBarcodes];
        if(!barcodesMap.has(barcode)){
            barcodesMap.set(barcode,1);
            continue;
        }
        barcodesMap.set(barcode,barcodesMap.get(barcode) + 1);
    }

    barcodesMap.forEach(function (value, key, map){
        cartItem.push({
            barcode: key,
            quantity: value
        });
    });

    return cartItem;
}

function perfectBarcodeInfo(cartItem){
    let cartItemDetails = [];
    for (let indexOfCartItem = 0; indexOfCartItem < cartItem.length; indexOfCartItem++) {
        for (let indexOfDatabase = 0; indexOfDatabase < database.length; indexOfDatabase++) {
            if(cartItem[indexOfCartItem].barcode === database[indexOfDatabase].barcode){
                cartItemDetails.push({
                    itemCode: database[indexOfDatabase].barcode,
                    itemName: database[indexOfDatabase].name,
                    quantity: cartItem[indexOfCartItem].quantity,
                    unitPrice: database[indexOfDatabase].price
                })
            }   
        }
    }
    return cartItemDetails;
}

function countItemTotalPrice(cartItemDetails){
    for (let indexOfCartItemDetails = 0; indexOfCartItemDetails < cartItemDetails.length; indexOfCartItemDetails++) {
        cartItemDetails[indexOfCartItemDetails].totalPrice = cartItemDetails[indexOfCartItemDetails].quantity * cartItemDetails[indexOfCartItemDetails].unitPrice;
    }
    return cartItemDetails;
}

function countTotalPrice(cartItemDetailsWithTotalPrice){
    let totalPrice = 0;
    for (let indexOfCartItemDetails = 0; indexOfCartItemDetails < cartItemDetails.length; indexOfCartItemDetails++) {
        totalPrice += cartItemDetails[indexOfCartItemDetails].totalPrice;
    }

    return totalPrice;
}

function GenerateReceipt(cartItemDetailsWithTotalPrice,totalPrice){
    let receipt = ''
    receipt += '\n***<store earning no money>Receipt ***\n'
    for (let indexOfReceiptItems = 0; indexOfReceiptItems < cartItemDetailsWithTotalPrice.length; indexOfReceiptItems++) {
        receipt += `Name: ${cartItemDetailsWithTotalPrice[indexOfReceiptItems].itemName}, Quantity: ${cartItemDetailsWithTotalPrice[indexOfReceiptItems].quantity}, Unit price: ${cartItemDetailsWithTotalPrice[indexOfReceiptItems].unitPrice} (yuan), Subtotal: ${cartItemDetailsWithTotalPrice[indexOfReceiptItems].totalPrice} (yuan)\n`
    }
    receipt += `----------------------\nTotal: ${totalPrice} (yuan)\n**********************`
    return receipt
}

module.exports = {
    printReceipt
};