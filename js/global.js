


function toggleMenu (event) {

    $(".menu-center").toggleClass("active")
    
    let active = $(".menu-center").hasClass("active")

    $("#icon").attr('aria-expanded', active);

    if(active){
        console.log("ativo")
        $("#icon").attr('aria-label', 'Fechar Menu');
        $("#icon-open").hide()
        $("#icon-close").show()
    }else{
        console.log("inativo")
        $("#icon").attr('aria-label', 'Abrir Menu');
        $("#icon-open").show()
        $("#icon-close").hide()
    }
}

// $("#icon").on("click", toggleMenu)

$("#icon").click(function(){toggleMenu()})