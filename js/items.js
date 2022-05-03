const upgraders = {
    shop: {
        basicUpgrader: ["Basic Upgrader", "Your first item that you will probably buy. It gives, but is not limited to $1 more per second. You can stack it infinitely.", 80, 1, 1, 0, 0],
        starterRefiner: ["Starter Refiner", "So you sailed away, for search of new technologies, and you stumbled upon a red beam of light. The beam seems to burn you a little, but doesn't melt iron and other metals. It multiplies the ore value by 1.5 but works only 3 times.", 270, 1.5, 0, 3, 1],
    },
}

for (let key in upgraders.shop) {
    //create the upgraders added
    const item = document.createElement('div')
    item.className = 'store-item'
    item.id = `upgrader${upgraders.shop[key][6]}`

    const itemPrice = document.createElement('div')
    itemPrice.className = 'store-price-tag'
    itemPrice.innerHTML = '$' + upgraders.shop[key][2]

    const itemInfo = document.createElement('div')
    itemInfo.className = 'store-item-info store-upgrader'
    itemInfo.innerHTML = upgraders.shop[key][0]

    const itemDescription = document.createElement('div')
    itemDescription.className = 'store-item-desc'
    itemDescription.id = 'description'
    itemDescription.innerHTML = upgraders.shop[key][1]

    const buyButton = document.createElement('button')
    buyButton.className = 'buyButton colorgreen'
    buyButton.id = `buyButton${upgraders.shop[key][6]}`
    buyButton.innerHTML = 'Buy'
    buyButton.addEventListener('click', function() { buyUpgrader(key) })

    const columnGap = document.createElement('div')
    columnGap.className = 'inline column-gap'

    document.getElementById('storeUpgraders').appendChild(item)
    item.appendChild(itemPrice)
    item.appendChild(itemInfo)
    itemInfo.appendChild(itemDescription)
    item.appendChild(buyButton)
    document.getElementById('storeUpgraders').appendChild(columnGap)
}

var $cursor = $('.store-item-desc');
$('body').on('mousemove', function(e) {
    var relX = e.clientX;
    var relY = e.clientY;
    $cursor.css({
        left: relX,
        top: relY
    });
});