$(document).ready(function(){
    $("#what1").click(function(){
      $("#p1").toggle();
      $("#img1").toggle();
    });
    $("#what2").click(function(){
        $("#p2").toggle();
        $("#img2").toggle();
      });
      $("#what3").click(function(){
        $("#p3").toggle();
        $("#img3").toggle();
      });
  });
$().hover(
  function(){
    $("#text1").show();
  },
  function(){
    $("#desktop").hide();
  }
)
$().hover(
  function(){
    $("#text2").show();
  },
  function(){
    $("#color").hide();
  }
)
$().hover(
  function(){
    $("#text3").show();
  },
  function(){
    $("#ontario").hide();
  }
)
$().hover(
  function(){
    $("#text4").show();
  },
  function(){
    $("#blank").hide();
  }
)
$().hover(
  function(){
    $("#text5").show();
  },
  function(){
    $("#wishes").hide();
  }
)
$().hover(
  function(){
    $("#text6").show();
  },
  function(){
    $("#icons").hide();
  }
)
$().hover(
  function(){
    $("#text7").show();
  },
  function(){
    $("#burned").hide();
  }
)
$().hover(
  function(){
    $("#text8").show();
  },
  function(){
    $("#giraffe").hide();
  }
)
$(document).ready(function(){
  var $form = $('#formAdd');
  $form.submit(function(){
      var id= $("#id").val();
      if (id.length < 12) {
          alert("INPUT ERROR");
          return false;
      }

      $.post($form.attr('action'), $(this).serialize(), function(response){
          alert("DATA SUCCESSFULLY ADDED");
      },'json');
      return false;
  });
});
function myFunction() {
  alert("Thank you for contacting Delani studios we shall get back to you shortly!");
}