function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.match(mailformat))
{
  // $('.wrong-email').textContent = 'heyy';
  $('.right-email').css('display','contents');
  $('input').css('borderColor','green');

return true;
}
else
{
$('.wrong-email').css('display','contents');
$('input').css('borderColor','red');
return false;
}
}

$("button").click(function(){
  const hello = $("input").val();
  if (hello == "")
  {$('.not-valid').css('display','contents');
$('input').css('borderColor','red');}
  else if (ValidateEmail(hello))
  {console.log('done')}

})
