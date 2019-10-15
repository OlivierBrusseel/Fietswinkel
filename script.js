$(document).ready(function () {
    $('input[name="type"]').click(function(){
        var input=$('input[name="type"]:checked ').val();
        console.log(input);
        if (input === "fdames"){
            $('#s50, #s57').fadeIn();
            $('#s43, #s61, #nosize').fadeOut();
            $('.c1').prop('value','beige');
            $('.c2').prop('value','groen');
            $('.c3').prop('value','rood');
            $('input[type="button"]').click(function(){
                var kleur=$(this).val();
                console.log(kleur);
                if(kleur==='beige'){
                    $('.img').css('background-image','url("./img/sfdamesbeige.png")');
                }else if(kleur==='groen'){
                    $('.img').css('background-image','url("./img/sfdamesgroen.jpeg")');
                }else if(kleur==='rood'){
                    $('.img').css('background-image','url("./img/sfdamesrood.png")');
                }
            });
        }else if (input === "fheren"){
            $('#s50, #s57, #s61').fadeIn();
            $('#s43, #nosize').fadeOut();
            $('.c1').prop('value','beige');
            $('.c2').prop('value','grijs');
            $('.c3').prop('value','zwart');
            $('input[type="button"]').click(function(){
                var kleur=$(this).val();
                console.log(kleur);
                if(kleur==='beige'){
                    $('.img').css('background-image','url("./img/sfherenbeige.jpg")');
                }else if(kleur==='grijs'){
                    $('.img').css('background-image','url("./img/sfherengrijs.png")');
                }else if(kleur==='zwart'){
                    $('.img').css('background-image','url("./img/sfherenzwart.png")');
                }
            });
        }else if (input === "efdames"){
            $('#s43, #s50, #s57').fadeIn();
            $('#s61, #nosize').fadeOut();            
            $('.c1').prop('value','grijs');
            $('.c2').prop('value','paars');
            $('.c3').prop('value','zwart');
            $('input[type="button"]').click(function(){
                var kleur=$(this).val();
                console.log(kleur);
                if(kleur==='grijs'){
                    $('.img').css('background-image','url("./img/efdamesgrijs.png")');
                }else if(kleur==='paars'){
                    $('.img').css('background-image','url("./img/efdamespaars.png")');
                }else if(kleur==='zwart'){
                    $('.img').css('background-image','url("./img/efdameszwart.jpg")');
                }
            });
        }else if (input === "efheren"){
            $('#s50, #s57, #s61').fadeIn();
            $('#s43, #nosize').fadeOut();
            $('.c1').prop('value','blauw');
            $('.c2').prop('value','grijs');
            $('.c3').prop('value','zwart');
            $('input[type="button"]').click(function(){
                var kleur=$(this).val();
                console.log(kleur);
                if(kleur==='blauw'){
                    $('.img').css('background-image','url("./img/efherenblauw.jpg")');
                }else if(kleur==='grijs'){
                    $('.img').css('background-image','url("./img/efherengrijs.png")');
                }else if(kleur==='zwart'){
                    $('.img').css('background-image','url("./img/efherenzwart.jpg")');
                }
            });
            
        }
        
        
        else if (input === "vf"){
            $('#nosize').fadeIn();
            $('#s43, #s50, #s57, #s61').fadeOut();
            $('.c1').prop('value','wit');
            $('.c2').prop('value','zwart');
            $('.c3').prop('value','rood');
            $('input[type="button"]').click(function(){
                var kleur=$(this).val();
                console.log(kleur);
                if(kleur==='wit'){
                    $('.img').css('background-image','url("./img/vfwit.jpg")');
                }else if(kleur==='zwart'){
                    $('.img').css('background-image','url("./img/vfzwart.jpg")');
                }else if(kleur==='rood'){
                    $('.img').css('background-image','url("./img/vfrood.jpg")');
                }
            });
        }else{
            $('#s43, #s50, #s57, #s61, #nosize').fadeOut();
        };

        
    });

});