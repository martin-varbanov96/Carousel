$(document).ready(function () {   
    var arrFurniture = ["img\\furniture\\furniture1.jpg", "img\\furniture\\furniture2.jpg", "img\\furniture\\furniture3.jpg", "img\\furniture\\furniture4.jpg", "img\\furniture\\furniture5.jpg"];
    var arrCars = ["img\\cars\\cars1.jpg", "img\\cars\\cars2.jpg", "img\\cars\\cars3.jpg", "img\\cars\\cars4.jpg", "img\\cars\\cars5.jpg"];    
    var arrGames = ["img\\games\\game1.jpg", "img\\games\\game2.jpg", "img\\games\\game3.jpg", "img\\games\\game4.jpg", "img\\games\\game5.jpg" ];
    var navigationIndex = 0;    
    var arrOutput = [];
            
    arrFurniture = shuffle(arrFurniture);
    arrCars = shuffle(arrCars);
    arrGames = shuffle(arrGames);   
    
    $('#buttFurniture').click(onFilterCLick);    
    $('#buttCars').click(onFilterCLick);
    $('#buttGames').click(onFilterCLick);
    
    $('#buttFurniture').click(function () {
        if ($.inArray(arrFurniture[0], arrOutput) == -1) {
            arrOutput = arrOutput.concat(arrFurniture);
            arrOutput = shuffle(arrOutput);        
        }
        voidLoop(arrOutput);
    });
    $('#buttCars').click(function () {
        if ($.inArray(arrCars[0], arrOutput) == -1) {
            arrOutput = arrOutput.concat(arrCars);            
            arrOutput = shuffle(arrOutput);
        }
        voidLoop(arrOutput);
    });
    $('#buttGames').click(function () {
        if ($.inArray(arrGames[0], arrOutput) == -1) {
            arrOutput = arrOutput.concat(arrGames);
            arrOutput = shuffle(arrOutput);
        }
        voidLoop(arrOutput);
    });
    
    //returns the same array with differentindexes
    //o - input array
    function shuffle(o) {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x)        ;
        return o;
    }
    
    //changes the appearance of the selected filter
    function onFilterCLick() {
        $(this).css("background-color", "#656565");
        $(this).css("color", "white");

    }
    
    //enters an infinite loop, going through all of the pictures
    function voidLoop(arr) {                
        var left = 0;
        var middle = 1;
        var right = 2;        

        setInterval(function () {            
            $('#middle').click(popBigPicture);

            var arrSize = arrOutput.length - 1;
            console.log(arrSize);    
            if (left == arrSize) {
                left = 0;
                middle = 1;
                right = 2;
            }
            else if (middle == arrSize) {
                left = 4;
                middle = 0;
                right = 1;
            }
            else if (right == arrSize) {
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
            navigationIndex = arr.length / middle;
            $('.bottomButt').click(navigatePicture);
            changeColor(navigationIndex);           
        }, 3000);
        
        //Pops the middle picture with a different appearance
        function popBigPicture() {
            $('#bigPicture').attr('src', arrOutput[middle]);
            $('#bigPicture').css('visibility', "visible");
            $('#exitBig').css('visibility', "visible");

            $('#exitBig').click(function () {                
                $('#bigPicture').css('visibility', "hidden");
                $('#exitBig').css('visibility', "hidden");
            });
        }
        
        //TODO- switch pictures with navigation buttons
        function navigatePicture() {
//            var index = arr.length * navigationIndex;            
            $(this).attr("class", "currentMiddleImage");
            switch (this.id) {
                case "goTo0":
                    //code
                    break;
                case "goTo1":
                    //code
                    break;
                case "goTo2":
                    left = 0;
                    middle = 1;
                    right = 2;
                    break;
            }
        }
    }
    //changes the the color of the current navigation button 
    function changeColor(index) {
        console.log("index " +index);
        
        $('#goTo0').attr('class', 'bottomButt');
        $('#goTo1').attr('class', 'bottomButt');
        $('#goTo2').attr('class', 'bottomButt');
        $('#goTo3').attr('class', 'bottomButt');
        $('#goTo4').attr('class', 'bottomButt');

        if ((index == Infinity) ||
            (((index >= 7.5) && (index <= 15)))
            ) {
            $('#goTo0').attr('class', 'currentMiddleImage');
        }
        else if ((index >= 3) && (index <= 5)) {
            $('#goTo1').attr('class', 'currentMiddleImage');
        }
        else if ((index <= 2.5) && (index >= 1.875)) {
            $('#goTo2').attr('class', 'currentMiddleImage');
        }
        else if ((index <= 1.7) && (index >= 1.3)) { 
            $('#goTo3').attr('class', 'currentMiddleImage');
        }
        if ((index >= 0) && (index <= 1.25)) { 
            $('#goTo4').attr('class', 'currentMiddleImage');
        
        }
    }
});