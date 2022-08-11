var nums = [];
var selected = []
var numberSelector = $(".num");
for(var i = 0; i < 10; i++){
    do{
        var r = Math.random()
        if(r <= 0.5){
            var random = Math.floor(r * 100)
        }else{
            var random = Math.floor(r * -100)
        }
    }while(nums.includes(random))
    nums[i] = random
    numberSelector.eq(i).text(nums[i])
    numberSelector.eq(i).click(function(){
        selected.push($(this).text());
        $(this).css({
            "color": "#950740",
            "backgroundColor": "#4E4E50",
            "border": "1px solid #950740"
        })
    })
}
var maxBtn = $(".maxBtn")
maxBtn.click(function(){
    if(selected.length != 0){
        $(".showMax").show()
        $(".showMax").text("Maximum Number: "+findMax(selected)+"")
    }
})
var sumBtn = $(".sumBtn")
sumBtn.click(function(){
    if(selected.length != 0){
        $(".showSum").show()
        $(".showSum").text("Sum of Numbers: "+findSum(selected)+"")
    }
})
var minBtn = $(".minBtn")
minBtn.click(function(){
    if(selected.length != 0){
        $(".showMin").show()
        $(".showMin").text("Minimum Number: "+findMin(selected)+"")
    }
})
var clearBtn = $(".clearBtn")
clearBtn.click(function(){
    selected = []
    numberSelector.css({
        "backgroundColor": "#950740",
        "color": "#4E4E50"
    })
    $(".showMax").hide()
    $(".showSum").hide()
    $(".showMin").hide()
})
var refresh = $(".newNumbers")
refresh.click(function(){
    window.location.reload();
})
function findMax(numbers){
    var max = numbers[0]
    for(var i = 1; i < numbers.length; i++){
        if(Number(max) < numbers[i]){
            max = numbers[i]
        }
    }
    return max
}
function findMin(numbers){
    var min = numbers[0]
    for(var i = 0; i < numbers.length; i++){
        if(Number(min) > numbers[i]){
            min = numbers[i]
        }
    }
    return min
}
function findSum(numbers){
    var sum = 0
    for(var i = 0; i < numbers.length; i++){
        sum += Number(numbers[i])
    }
    return sum
}