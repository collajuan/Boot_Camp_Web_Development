
//  EventListener 

        // $("h1").click(function(){
        //      $("h1").css("color", "blue");
        // });

        $(document).keypress(function(event){
            $('h1').text(event.key);
        }); 

        //.on se pasa cualquier metodo en el primer parametro
        $("h1").on("mouseover", function(){
            $("h1").css("color", "blue");
        });

// Animaciones

        //hide() - toggle()
        //fadeOut() - fadeIn() - fadeToggle()
        //slideUp() - sideDown() - slideToggle()
        $("h1").animate({css number property});
        $("h1").slideUP().slideDown().animate({opacity: 0.5});


// Agregar elementos de HTML
        
        // before()
        // after()
        // Dentro del elemento (dentro de la etiquiete)
            //prepend() 
            $("h1").prepend("<button>Click Me</button>")
            //append()

// Eliminar elemento

        //$("Element").remove();

// Agregar una clase a una etiqueta

        // $('h1').addClass("big-tittle margin-50");
        // removeClass
        // hasClass


// Modificar etiqueta

        //$("h1").text("")
        //$("h1").html("<em>Hey</em>")

// Manipulating attributes

        //$("img").attr("src", "NUEVA src");
        //$("a").attr("href", "NUEVA href");

