var date = new Date()
let display_date = "Date: " + date.toLocaleDateString('pt-BR',{weekday:'short', year:'numeric', month:'short', day:'numeric'})

$(document).ready(function(){
    

    console.log('Ready')

//  Busque a data atual e atualize-a no DOM
$(document).ready(function(){
    $("#display_date").html(display_date)
    })


    // Escreva um evento, quando o botão Enviar for clicado
    $("#predict_button").click(function(){

        //  Obtenha o valor do texto da área de texto usando o método 'val()'
        let text_value = {"text":$('#text').val()}

        //  Converta-o em um objeto JS.
        //  Forneça uma "chave" aqui e escreva o mesmo no arquivo app.py também para extrair dados
        let input_text = {'text' : text_value}
        console.log(input_text)

        //  requisição ajax
        $.ajax({

            //  tipo da requisição web
            type : 'POST',

            url : "/predict-emotion",

            //  dados a serem enviados no formato JSON
            data : JSON.stringify(),

            //  o tipo de resposta esperado é json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  se tudo funcionar, execute esta função
            success : function(result){
                predict_emotion = result.data.predict_emotion
                emo_url = result.data.predict_emotion_img_url

                $("#prediction").html(predict_emotion)
                $("#prediction").css("display","block");

                $("#emo_img_url").html('src', emo_url)
                $("#emo_img_url").css("display","block");

            },

            //  se houver algum erro, execute esta função
            error : function(result){

                console.log(result)
            }
        })


        
        
    })
        
})