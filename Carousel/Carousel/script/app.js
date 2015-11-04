$(document).ready(function () {
    var arrFurniture = ["img\\furniture\\furniture1.jpg", "img\\furniture\\furniture2.jpg", "img\\furniture\\furniture3.jpg", "img\\furniture\\furniture4.jpg", "img\\furniture\\furniture5.jpg"];
    var arrCars = ["img\\cars\\cars1.jpg", "img\\cars\\cars2.jpg", "img\\cars\\cars3.jpg", "img\\cars\\cars4.jpg", "img\\cars\\cars5.jpg"];    
    var arrGames = ["img\\games\\game1.jpg", "img\\games\\game2.jpg", "img\\games\\game3.jpg", "img\\games\\game4.jpg", "img\\games\\game5.jpg" ];
    var smallButtonPointer = ['#goTo2'];
    
    arrFurniture = shuffle(arrFurniture);
    arrCars = shuffle(arrCars);
    arrGames = shuffle(arrGames);
    var interval;

    $('#buttFurniture').click(function () {
        $(this).css("background-color", "#656565");        
        $('#buttCars').css("background-color", "#F1F1F1");
        $('#buttGames').css("background-color", "#F1F1F1");
        $(this).css("color", "white");
        $('#buttCars').css("color", "black");
        $('#buttGames').css("color", "black");

        clearInterval(interval);
        interval = voidLoop(arrFurniture);
    });
    
    $('#buttCars').click(function () {
        $(this).css("background-color", "#656565");
        $('#buttFurniture').css("background-color", "#F1F1F1");
        $('#buttGames').css("background-color", "#F1F1F1");
        $(this).css("color", "white");
        $('#buttFurniture').css("color", "black");
        $('#buttGames').css("color", "black");

        clearInterval(interval);
        interval = voidLoop(arrCars);
    });
    
    $('#buttGames').click(function () {        
        $(this).css("background-color", "#656565");
        $('#buttCars').css("background-color", "#F1F1F1");
        $('#buttFurniture').css("background-color", "#F1F1F1");
        $(this).css("color", "white");
        $('#buttCars').css("color", "black");
        $('#buttFurniture').css("color", "black");

        clearInterval(interval);
        interval = voidLoop(arrGames);
    });

    function shuffle(o) {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)        ;
        return o;
    }

    function voidLoop(arr) { 
        var left = 0;
        var middle = 1;
        var right = 2;
        
        setInterval(function () {
            if (left == 4) {
                left = 0;
                middle = 1;
                right = 2;
            }
            else if (middle == 4) {
                left = 4;
                middle = 0;
                right = 1;
            }
            else if (right == 4) {
                left = 3;
                middle = 4;
                right = 0;
            }
            else {
                left++;
                middle++;
                right++;
            }
            $('#leftSide').attr('src', arr[left]);
            $('#middle').attr('src', arr[middle]);
            $('#rightSide').attr('src', arr[right]);
            changeColor(middle);           
        }, 500);
    }
    function changeColor(index) {
        switch (index) {
            case 0:
                $('#goTo0').attr('class', 'currentMiddleImage');
                $('#goTo4').attr('class', 'bottomButt');       
                break;
            case 1:
                $('#goTo1').attr('class', 'currentMiddleImage');
                $('#goTo0').attr('class', 'bottomButt');
                break;
            case 2:
                $('#goTo2').attr('class', 'currentMiddleImage');
                $('#goTo1').attr('class', 'bottomButt');
                break;
            case 3:
                $('#goTo3').attr('class', 'currentMiddleImage');
                $('#goTo2').attr('class', 'bottomButt');
                break;
            case 4:
                $('#goTo4').attr('class', 'currentMiddleImage');
                $('#goTo3').attr('class', 'bottomButt');
                break;
        }
    }
});