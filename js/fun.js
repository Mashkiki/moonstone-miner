function format(n) {
    var suffixes = ["", "K", "M", "B"]
    var i = 0
    while ((n = n / 1000) >= 1) { i++ }

    if (n * 1000 >= 100) {
        return (n * 1000).toFixed() + suffixes[i];
    } else if (n * 1000 >= 10) {
        return (n * 1000).toFixed(1) + suffixes[i];
    } else if (n * 1000 >= 0) {
        return (n * 1000).toFixed(2) + suffixes[i];
    }
}

function save() {
    var save = btoa(JSON.stringify(plr))
    localStorage.setItem("test-save", save)
}

function loadSave() {
    if (localStorage.getItem("test-save") != null) {
        plr = JSON.parse(atob(localStorage.getItem("test-save")))
    } else {
        plr = plr
    }
}

function load() {
    searchForUnusables()
    plr.score += 1
    plr.score -= 1
    console.log(plr.score)
    updateInventory()
}

function searchForUnusables() {
    var save2 = plr
    loadSave()

    for (let key in save2) {
        if (plr[key] == undefined || plr[key] == null || plr[key] == NaN) {
            plr[key] = 0
        }

        console.log(key)
    }

    save2 = undefined
    plr.score += 1
    plr.score -= 1
    console.log(plr)
    console.log(save2)

    for (let key in upgraders.shop) {
        if (plr.inventory.upgraders[key] == undefined || plr.inventory.upgraders[key] == null || plr.inventory.upgraders[key] == NaN) {
            plr.inventory.upgraders[key] = 0
        }
    }
}

function updateInventory() {
    document.getElementById('inventory').innerHTML = ''
    for (let key in plr.inventory.upgraders) {
        if (plr.inventory.upgraders[key] != 0) {
            var item = document.createElement('div')
            item.className = 'inventory-item store-upgrader'
            item.innerHTML = upgraders.shop[key][0] + " x" + plr.inventory.upgraders[key]

            document.getElementById('inventory').appendChild(item)
        }
    }
}