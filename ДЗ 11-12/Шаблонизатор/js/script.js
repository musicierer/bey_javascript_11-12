$(function() {

var html = $('#test').html();
var data = [
{
	title: 'Бей Вадим Сергеевич',
	content: 'Военнослужащий Вооруженных Сил Украины. Мой контактный телефон: +380961990420'
},
]

var content = tmpl(html, data);

$('body').append(content);

});