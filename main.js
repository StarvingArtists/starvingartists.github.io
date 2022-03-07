console.log("OMG");

let values = {
    frame: {
        "Frame background": 0,
        Decorative: 10,
        Bamboo: 15,
        Steampunk: 35,
        Ice: 65,
        Lava: 150,
    },
    effect: {
        Effects: 0,
        Gold: 10,
        Rainbow: 15,
        Diamond: 40,
        Lightning: 120,
        Cosmic: 400,
    }
}


function dropcode(dropdown) {
    // this is very dumb
    dropdown.on('change', function() { 
        document.getElementById("sum").innerHTML = `Total value: ${(values.effect[$('#effectDropdown option:selected').text()] + values.frame[$('#frameDropdown option:selected').text()])}`
    })
}

window.onload = function() {
    // duplicate code Lol. Don't care.
    dropcode($("#effectDropdown"))
    dropcode($("#frameDropdown"))
    Object.entries(values).forEach(([objkey, value], index) => {
        Object.entries(value).forEach(([key, value], index) => {
            if(value != 0) {
                $('#items').append(`<tr>
                <td>${key} (${objkey.charAt(0).toUpperCase() + objkey.slice(1)})</td>
                <td>???</td>
                <td>${value}</td>
                <td>+${value}</td>
              </tr>`)
            }
            $(`#${objkey}Dropdown`).append(`<option value="${value != 0 && key || "None"}">${key}</option>`)
            console.log(`${index}: ${key} = ${value}`);
        });
    })
}

// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();