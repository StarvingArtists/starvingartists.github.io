//load values
fetch("https://raw.githubusercontent.com/StarvingArtists/starvingartists.github.io/main/values.json").then(response => response.json()).then(data => {
    for (i in data.frames) {
        item = data.frames[i]
        console.log(item.append)
        
        const itemContainer = document.getElementById("exampleItemContainer").cloneNode(true)
        document.getElementById(item.append).append(itemContainer)

        itemContainer.childNodes[1].src= item.src
        itemContainer.childNodes[3].textContent = item.displayName
        itemContainer.childNodes[5].childNodes[1].innerHTML = item.rarity
        itemContainer.childNodes[7].childNodes[3].innerHTML = item.value

        for (var i=1;i<=item.demand; i++) {
            const star = document.createElement("img")
            star.src = "https://raw.githubusercontent.com/alpharmi/starving-artists/main/assets/ratingfull.png"
            star.style = "width: 20px"
            itemContainer.childNodes[9].append(star)
        }

        for (var i=1;i<=5-item.demand; i++) {
            const star = document.createElement("img")
            star.src = "https://raw.githubusercontent.com/alpharmi/starving-artists/main/assets/rating.png"
            star.style = "width: 20px"
            itemContainer.childNodes[9].append(star)
        }
    }

    for (i in data.effects) {
        item = data.effects[i]
        console.log(item.append)
        
        const itemContainer = document.getElementById("exampleItemContainer").cloneNode(true)
        document.getElementById(item.append).append(itemContainer)

        console.log(itemContainer.childNodes)
        console.log(itemContainer.childNodes[9].childNodes)

        itemContainer.childNodes[1].src= item.src
        itemContainer.childNodes[3].textContent = item.displayName
        itemContainer.childNodes[5].childNodes[1].innerHTML = item.rarity
        itemContainer.childNodes[7].childNodes[3].innerHTML = item.value

        for (var i=1;i<=item.demand; i++) {
            const star = document.createElement("img")
            star.src = "https://raw.githubusercontent.com/alpharmi/starving-artists/main/assets/ratingfull.png"
            star.style = "width: 20px"
            itemContainer.childNodes[9].append(star)
        }

        for (var i=1;i<=5-item.demand; i++) {
            const star = document.createElement("img")
            star.src = "https://raw.githubusercontent.com/alpharmi/starving-artists/main/assets/rating.png"
            star.style = "width: 20px"
            itemContainer.childNodes[9].append(star)
        }
    }

    document.getElementById("exampleItemContainer").remove()
    document.getElementById("exampleItemContainer2").remove()
})
