let droppersEnabled = false

function update() {
    document.getElementById("score-value").innerHTML = "$" + format(plr.score);
    document.getElementById("sps-value").innerHTML = "$" + format((plr.sps + 1) * plr.multiplier);
}

function toggleDroppers() {
    var btn = document.getElementById("enable-droppers")
    var text = document.getElementById("droppers-enabled")
    if (btn.className == "inline colorred") {
        btn.className = "inline colorgreen"
        btn.innerHTML = "Disable droppers"
        text.className = "inline textgreen"
        text.innerHTML = "Enabled"
        droppersEnabled = true
    } else {
        btn.className = "inline colorred"
        btn.innerHTML = "Enable droppers"
        text.className = "inline textred"
        text.innerText = "Disabled"
        droppersEnabled = false
    }
}

function scoreTick() {
    if (plr.inventory == 0) {
        plr.inventory = new Object()
    }
    if (plr.multiplier < 1) {
        plr.multiplier = 1
    }
    if (droppersEnabled == true) {
        plr.score += ((plr.sps + 1) * plr.multiplier) / 60
    }
}

function buyUpgrader(item) {
    function buy() {
        if (plr.score >= upgraders.shop[item][2]) {
            plr.score -= upgraders.shop[item][2]
            plr.multiplier *= upgraders.shop[item][3]
            plr.sps += upgraders.shop[item][4]
            plr.inventory.upgraders[item] += 1
            updateInventory()
        }
    }
    if (upgraders.shop[item][5] == 0) {
        buy()
    } else if (upgraders.shop[item][5] != 0) {
        if (plr.inventory[item] == upgraders.shop[item][5]) {
            document.getElementById(`buyButton${upgraders.shop[item][6]}`).className = 'buyButton colorred'
            setTimeout(() => {
                document.getElementById(`buyButton${upgraders.shop[item][6]}`).className = 'buyButton colorgreen'
            }, 500);
        } else if (plr.inventory[item] <= upgraders.shop[item][5]) {
            buy()
        }
    }


}

window.onbeforeunload = save;

window.setInterval(scoreTick, 1000 / 60)

window.setInterval(function() {
    update()
}, 1000 / 60);