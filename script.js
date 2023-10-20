$(document).ready(function() {
    const modal = $('.md_bg');
    let idx;

    function mostrarData(idx, data) {
        $('.md_name').text(data[idx].name);
        $('.md_age').text(data[idx].age);
        $('.md_gen').text(data[idx].gen);
        $('.md_date').text(data[idx].date);
        $('.md_ocp').text(data[idx].ocupation);
        $('.md_img').attr('src', data[idx].img);
        $('.md_dscrtp').text(data[idx].description);
    }

    $(".btn_modal").on("click", function() {
        idx = $(this).attr("data-index");
        console.log("Número del atributo data-index: " + idx);
        
        // Llamar a la función mostrarData después de que los datos se han cargado correctamente
        $.ajax({
            url: 'https://raw.githubusercontent.com/juanRCoder/Proyecto-Show_Cards/main/data.json',
            method: 'GET',
            dataType: 'json',
        }).done((data) => {
            mostrarData(idx, data);
            console.log(data);
        }).fail((e) => {
            console.log(e);
        });
        
        // Mostrar el modal después de cargar los datos
        modal.show();
        modal.css({
            display: "grid",
            placeItems: "center",
            opacity: 0
        });
        modal.animate({
            opacity: 1
        }, 100);
    });

    $('.close_md').click(() => {
        modal.fadeOut(100);
    });
});
