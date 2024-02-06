// interactivity for filter buttons

var allRecipes = $("a.r");
var snacks = $("a.idSnack");
var dessert = $("a.idDessert");
var main = $("a.idMain");

var allButtons = $('button');

var buttonAllRecipes = $('button#allRecipes');
buttonAllRecipes.click(function () {
    console.log("clicked")
    allRecipes.addClass('block')
    allRecipes.removeClass('hidden')
    allButtons.removeClass('buttonClicked')
    buttonAllRecipes.addClass('buttonClicked')
})

var buttonSnack = $('button#snacksAppetizers');
buttonSnack.click(function () {
    allRecipes.addClass('hidden')
    allRecipes.removeClass('block')
    snacks.removeClass('hidden')
    snacks.addClass('block')
    allButtons.removeClass('buttonClicked')
    buttonSnack.addClass('buttonClicked')
})

var buttonMain = $('button#mainDishes')
buttonMain.click(function () {
    allRecipes.addClass('hidden')
    allRecipes.removeClass('block')
    main.removeClass('hidden')
    main.addClass('block')
    allButtons.removeClass('buttonClicked')
    buttonMain.addClass('buttonClicked')
})

var buttonDessert = $('button#dessert')
buttonDessert.click(function () {
    allRecipes.addClass('hidden')
    allRecipes.removeClass('block')
    dessert.removeClass('hidden')
    dessert.addClass('block')
    allButtons.removeClass('buttonClicked')
    buttonDessert.addClass('buttonClicked')
})


// interactivity for drop down

orderClass = ['order0', 'order1', 'order2']

$('#sortRecipes').on('change', function () {
    var option = $(this).val();

    if (option == "newest to oldest") {
        idList = $.map(allRecipes, function (d) { return d.id; });
    } else if (option == "oldest to newest") {
        idList = $.map(allRecipes, function (d) { return d.id; }).reverse();
    } else {  // A-Z
        idList = $.map(allRecipes, function (d) { return d.id; }).sort();
    }

    i = 0;
    $.each(idList, function (index, value) {
        $('#' + value).removeClass('order0 order1 order2') // remove all existing order classes
        $('#' + value).addClass(orderClass[i])
        i++;
    });
});
