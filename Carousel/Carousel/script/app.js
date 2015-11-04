$(document).ready(function () {
    var arrFurniture = ["img\\furniture\\furniture1.jpg", "img\\furniture\\furniture2.jpg", "img\\furniture\\furniture3.jpg", "img\\furniture\\furniture4.jpg", "img\\furniture\\furniture5.jpg"];
    var arrCars = ["img\\cars\\cars1.jpg", "img\\cars\\cars2.jpg", "img\\cars\\cars3.jpg", "img\\cars\\cars4.jpg", "img\\cars\\cars5.jpg"];    
    var arrGames = ["img\\games\\game1.jpg", "img\\games\\game2.jpg", "img\\games\\game3.jpg", "img\\games\\game4.jpg", "img\\games\\game5.jpg" ];
    var smallButtonPointer = ['#goTo2'];
    voidLoop();
    

    function voidLoop() { 
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
            $('#leftSide').attr('src', arrFurniture[left]);
            $('#middle').attr('src', arrFurniture[middle]);
            $('#rightSide').attr('src', arrFurniture[right]);
            $('smallButtonPointer[0]').attr('id', 'currentMiddleImage');
        }, 5000);
    }
});