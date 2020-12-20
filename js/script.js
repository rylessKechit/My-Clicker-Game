var golds = 0
var multiplier = 1
var goldAdd = 1

var pokemon = [
    { id: 1, name: "Bulbizarre", cost: 10, gps: 0.1, owned: 0 },
    { id: 2, name: "Salameche", cost: 100, gps: 1, owned: 0 },
    { id: 3, name: "Carapuce", cost: 500, gps: 5, owned: 0 }
]

var bulbizarreId = pokemon[0]['id']
var salamecheId = pokemon[1]['id']
var carapuceId = pokemon[2]['id']

var bulbizarreOwned = pokemon[0]['owned']
var salamecheOwned = pokemon[1]['owned']
var carapuceOwned = pokemon[2]['owned']

var bulbizarrePrice = pokemon[0]['cost']
var salamechePrice = pokemon[1]['cost']
var carapucePrice = pokemon[2]['cost']

var nextBulbizarrePrice = 0
var nextSalamechePrice = 0
var nextCarapucePrice = 0

var bulbizarreGps = pokemon[0]['gps']
var salamecheGps = pokemon[1]['gps']
var carapuceGps = pokemon[2]['gps']

var bulbizarreMultiplier = 1
var salamecheMultiplier = 1
var carapuceMultiplier = 1

var GPS = 0

var pokemonCount = 0

function update()
{
    golds.toFixed(2)

    nextBulbizarrePrice = bulbizarrePrice * 1.10
    nextSalamechePrice = salamechePrice * 1.10
    nextCarapucePrice = carapucePrice * 1.10

    GPS = ((bulbizarreOwned * bulbizarreGps) * bulbizarreMultiplier) + ((salamecheOwned * salamecheGps) * salamecheMultiplier) + ((carapuceOwned * carapuceGps) * carapuceMultiplier)

    document.getElementById('text').value = golds
    
    document.getElementById('amountBulbizarre').innerHTML = "You own " + bulbizarreOwned + " Bulbizarre"
    document.getElementById('priceBulbizarre').innerHTML = nextBulbizarrePrice + " Golds"
    document.getElementById('amountSalameche').innerHTML = "You own " + salamecheOwned + " Salameche"
    document.getElementById('priceSalameche').innerHTML = nextSalamechePrice + " Golds"
    document.getElementById('amountCarapuce').innerHTML = "You own " + carapuceOwned + " Carapuce"
    document.getElementById('priceCarapuce').innerHTML = nextCarapucePrice + " Golds"
    document.getElementById('gps').innerHTML = "GPS " + GPS

    document.getElementById('amountPokemon').innerHTML = "You own " + pokemonCount + " Pokemon"
    checkGolds()
}

function timer()
{
    golds += GPS * multiplier
    update()
}

setInterval(timer, 1000)

function addGold()
{
    if (pokemonCount < 50)
    {
        goldAdd = 1
    }
    else if (pokemonCount > 50 && pokemonCount < 100)
    {
        goldAdd = 2
    }
    else if (pokemonCount > 100)
    {
        goldAdd = 3
    }

    golds += goldAdd
    update()
}

function save()
{
    localStorage.setItem("golds", golds)
    localStorage.setItem("bulbizarre", bulbizarreOwned)
    localStorage.setItem("salameche", salamecheOwned)
    localStorage.setItem("carapuce", carapuceOwned)
    localStorage.setItem("pokemonCount", pokemonCount)
}

function load()
{
    golds = localStorage.getItem("golds")
    golds = parseInt(golds)
    bulbizarreOwned = localStorage.getItem("bulbizarre")
    bulbizarreOwned = parseInt(bulbizarreOwned)
    salamecheOwned = localStorage.getItem("salameche")
    salamecheOwned = parseInt(salamecheOwned)
    carapuceOwned = localStorage.getItem("carapuce")
    carapuceOwned = parseInt(carapuceOwned)
    pokemonCount = localStorage.getItem("pokemonCount")
    pokemonCount = parseInt(pokemonCount)
    update()
}

function buyPokemon(id)
{
    var check_price = 0

    if (id == 1)
    {
        check_price = bulbizarrePrice

        if (golds >= check_price)
        {
            golds -= check_price
            bulbizarreOwned += 1
            pokemonCount += 1
        }
    }
    else if (id == 2)
    {
        check_price = salamechePrice

        if (golds >= check_price)
        {
            golds -= check_price
            salamecheOwned += 1
            pokemonCount += 1
        }
    }
    else if (id == 3)
    {
        check_price = carapucePrice

        if (golds >= check_price)
        {
            golds -= check_price
            carapuceOwned += 1
            pokemonCount += 1
        }
    }
    update()
    checkPokemonAmount(id)
}

function checkPokemonAmount(id)
{
    if (id == 1)
    {
        if (bulbizarreOwned < 25)
        {
            bulbizarreMultiplier = 1
        }
        else if (bulbizarreOwned > 25 && bulbizarreOwned < 50)
        {
            bulbizarreMultiplier = 2
        }
        else if (bulbizarreOwned > 100 && bulbizarreOwned < 200)
        {
            bulbizarreMultiplier = 3
        }
    }
    
    if (id == 2)
    {
        if (salamecheOwned < 25)
        {
            salamecheMultiplier = 1
        }
        else if (salamecheOwned > 25 && salamecheOwned < 50)
        {
            salamecheMultiplier = 2
        }
        else if (salamecheOwned > 100 && salamecheOwned < 200)
        {
            salamecheMultiplier = 3
        }
    }

    if (id == 3)
    {
        if (carapuceOwned < 25)
        {
            carapuceMultiplier = 1
        }
        else if (carapuceOwned > 25 && carapuceOwned < 50)
        {
            carapuceMultiplier = 2
        }
        else if (carapuceOwned > 100 && carapuceOwned < 200)
        {
            carapuceMultiplier = 3
        }
    } 
    update()
}

function checkGolds()
{
    if (golds < 100)
    {
        document.getElementById('clickButton').src = "../images/poke.png"
    }
    else if (golds > 100 && golds < 1000)
    {
        document.getElementById('clickButton').src = "../images/super.png"
    }
}