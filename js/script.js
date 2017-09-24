
<body id="id">
	<a href="javascript:aopen()">Go</a>
	<a href="javascript:aclose()">Stop</a>
	<a href="javascript:aprint()">Print</a>
	<a href="javascript:moveto()">Move to</a>
	<a href="javascript:moveby()">Move by</a>
	<a href="javascript:moveWindows()">Move Window</a>
	<a href="javascript:clock()">clock</a>
	<a href="javascript:clock2()">clock2</a>
	<a href="javascript:clock2()">clock2</a>
			<span style="color:green"> Your name</span>
		<span style="color:rgb("+x+","+y+","+z+")">text</span>
		<div id="myId"onclick="mFunk(this)"><b>test</b></div>
		<div class="myClass" onclick="fFunc()"></div>
		<div onclick="mFunk(this)"><b>test</b></div>
		<div onclick="mFunk(this)"><b>test</b></div>
		<div onclick="mFunk(this)"><b>test</b></div>
		<span onclick="mFunk(this)"><b>test</b></span>

	</body>
function rec (x){
	if (x==0) return 1;
	return x*rec(x-1);
}
var r =rec(5);
document.write("factorial 5" ="+r+");



// замыкания 
function closure (z){
	document.write(z);
	return fucntion (a,b){
		return a+""+b;
	}
}

var x = closure('closure');
document.write(x(2,5));

var i=5
		for (var i=0;i<5;i++)
		{
			var J=10;
			document.write(i);
		}
		document.write (J);
		if (i==5){
			document.write (5);
		}

		function closure (z){
			var context = z
			//document.write(z);
			return function (a,b){
				return context+=a+""+b+"-";
			}
		}
		document.write("<br/>")

		if (false) {
			var a = closure("A")
			document.write(a(1,1))
			document.write("<br/>")
			document.write(a(2,2))
			document.write("<br/>")
		}

		var b = closure("B")
		document.write(b(3,3))
		document.write("<br/>")

		document.write(a)

сделать 10 задач на рекурсию и функции - абрамян



var mas=[];
var length=+prompt("Введите длину массива",0);


for(var i=0;i<length;i++){
temp=+prompt("Введите число",0);
mas.push(temp);

}
var x=0;
for(var i=0;i<mas.length;i++){
var x=x+mas[i];
}
x=x/length;
alert(x);

/*нарісовать несколько спанов разним цветом іспользуя функцію рендом мас*/
var x, y;
for (var i=1;i<=5;i++){
 x=document.getElementsByID[i].innerHTML
parseInt((min-max)*Math.random)
alert()
}

function changeColor(newColor) {
    for (var i=1;i<=5;i++){
    
    
    var x=math.floor(math.random*255);
    var y=math.floor(math.random*255);
    var z=math.floor(math.random*255);
	
	document.write (<span style="color:rgb("+x+","+y+","+z+")">text</span>);
	}
  }


for (var i in document){
	w[i];
}

var d = new Date(prompt("Введите год",2017))

document.write(d);
x=d.getDate();
document.write("/br"+x);

var d= new Date(2055);
var d=new Date();
document.write(d.getTime());/*показивает время от 0101.1970 года в стампе*/
document.write(d.getYear()); /*мпоказивает год от 1900 года*/
document.write(d.getFullYear()); /*мпоказивает нормальний год*/
document.write(d.getMonth()); /*месяц будут от нуля - значіт нам надо плюс 1*/
document.write(d.getDate()); /*день будут от нуля - єто воскресенье*/
document.write(d.getHours());
document.write(d.getMinutes());
document.write(d.getSeconds());
document.write(d.getMilliseconds());
document.write(d.toLocaleString()); /*виводіт время в строке*/
document.write(d.toGMTString());
document.write(d.toUTCString());

d.setYear(2020);
s.setMonth (3);



function sort(a,b){
	
	if(a>=b){
		return(alert("Max"+":"+a+";"+"Min"+":"+b));
	}
	return(alert("Max"+":"+b+";"+"Min"+":"+a));
}
sort(1,3)

function pow(number,n)
{
	var result=number;
	for(var i=1;i<n;i++)
	{
		result*=number;
	}
	return result;

}
var number=prompt("Введите число",0);
var n=prompt("Введите степень",1);
x=pow(number,n);
alert(x);


var obj={name:"Test", 
		 age:30,
		 value:"val",
		 'var':555,
		 'my name':'John',
		 3: 44,
		 'm':function(){
		 	document.write(this.name+"*");
		 }
		};

document.write(obj.name);
document.write(obj['age']);
obj['width']=256;
document.write(obj['width']);

for (var i in obj)
{
	document.write(i);
	document.write(i+"="+obj[i]);
}
obj.m(12345);
var obj2=obj;
obj2['age']=100;
document.write(obj['age']);


if ('age' in obj){
	document.write(true);
}

delete obj['width'];
for (var i in obj)
{
	document.write(i);
	document.write(i+"="+obj[i]);
}

var obj1= new Object();
obj1.name1="Test1";
obj['age1']=333;
for (var i in obj1)
{
	document.write(i);
	document.write(i+"="+obj1[i]);
}
function myConstuct(name,age){
this.name=name;
this.age=age;
this.func=funk;
function funk(){
	document.write(this.name+""+this.age);
}
}

var o1= new myConstuct ('my name',25);
o1.func();

function Rectangle(x,y){
this.rwidth=x;
this.rheight=y;
}
Rectangle.prototype.square=function(){
	return this.rwidth*this.rheight;
}
Rectangle.prompt.perimetr=function(){
	return((this.rwidth+this.rheight)*2);
}
var s= new rectangle(20,45);
document.write(s.rwidth++"--"+s.rheight);
document.write(s.square());
document.write(s.perimetr());

//var x = 10;
		//var y= '10';
		//var c= x && y;
		//document.write (c);  === - сравнівает не только значеніе но и тип("10!=10"); == - питается прівесті к одному тіпу данихб здесь будет тру ('10'=10)
		//c=parseInt (x);
		//var d=parseInt(y);
		//if (x===y){
		//	document.write ('true')
		//}
		//else {
		//	document.write ('false')
		//}
		//var x = "hello";
		//var y = "world";
		//document.write (x+'/n'+y); //конкатенація строк - просто добавленіем, прі деленіі на ноль - будет інфініті, еслі строку питаться деліть ілі что-то еще - будет нот е намбер NaN, если перед чтслом поставить 0 - оно будет отображать число в 8 ричной системе 0255=177 а не 255
		//isNan () - вернет значение если нан, так как нан не равно нан
		//var s=(s1)?1:(s2)?3:36 - тернарный оператор
		/*var r=confirm("test");
		switch (r){
			case true:
			document.write("1");
			break;
			case false:
			document.write("2");
			break;
		prompt('param1','param2');
		}*/
		
		//try {
		//	document.write(x); //заносим код? который может выполниться? но если вдруг нет - будет выполняться то что есть в блоке кетч
		//}
		//catch (e){
		//	document.write(e.message);
		//}
		//finally {
		//	document.write("Это финали") // всегда отрабатывает? но если ошибка в блоке кетч финали отработает? но дальше скрипт работаь не будет
		//}
		//var x="Helo";
		//function myFun (){
		//	document.write("Hello"); написать задачу с выведением 
		//}
		//function printFunc(color,text){
		//	<script>
		//function myprint(){
		//document.write("<div style='color:green'>Your name</div>");
		//}

		//function factorial(number){
		//	result=1;
		//	var number;
		//	for (var i=1; i<=number; i++)
		//	{
		//		result*=i;
		//	}
		//	return result;
		//}
		//x=factorial (3);
		//document.write (x);
		
		//function makeBuffer() { 
		//	function buffer (a)
		//	{
		//		return a+=a
		//	}
		//	buffer.set {
		//		return a
		//	}
		 //}

//var buffer = makeBuffer();

// добавить значения к буферу
//buffer('Замыкания');
//buffer(' Использовать');
//buffer(' Нужно!');

// получить текущее значение
//alert( buffer() ); // Замыкания Использовать Нужно!

//var user {};
//user.name="Вася";
//user.surname="Петров";
//user.surname="Васечкин";
//surname.delete();
//var y=2.5;
//w(y.toString());
//w(typeof y.toString());
//w(Number.MIN_VALUE+" "+Number.MAX_VALUE);
//var str='string';
//var str1 = new String ('string2');
//var str3 = String ('string3');
//w(str.length);
//w(str.bold().fontcolor('blue').fontsize(24));
//var mas = [1,2,34,56,7];
//var mas = new Array ();
//w(mas.length);
//mas.sort(); - сортірует по АСКІ коду
//mas.sort(function(a,b){return a-b;}); здесь по возрастанію - неявно надо передать функцію 

function aopen(){
	/*for (var i in window){
		document.write(window[i]+"="+"window[i}"+"<br>")
	}*/
	nw=open("http://ukr.net", "name_window","width=300, height=300, top=30, left=500");
	nw.document.write("Hello world!")
	nw.document.write("<a href="javascript:aprint()">Print</a>")
	
	
	alert("a open");
}
function aclose(){
		nw.close();
	}
function aprint(){
	print();

}
function moveto(){
	nw.moveto(100,100);
	
}

function moveby(){
	nw.moveto(200,200);
	nw.focus();
	
}

window.document.write("test")
var nw;


function moveWindows(){
	var x=0, y=0

	for (var i=0;i<6;i++)
	{
		var nw=open("","name","width=200, height=200");
		nw.moveby(x,y)
		x+=100;
		y+=100;
		nw.focus();
		nw=open("", "name_window+i", "width=200, top="+100*i+",left="+100*i+", height=200")
	}
}
function clock(){
	setInterval('datatime()',1000);

}
function clock2(){
	setTimeout('datetime()',5000);

}
function datatime(){
	var d=new Date();
	document.write(d.toLocaleString());
}

for(var i in navigator){
	document.write(i+"="+navigator[i]+"<br>")
}

for(var i in history){
	document.write(i+"="+history[i]+"<br>")
}

for(var i in location){
	document.write(i+"="+location[i]+"<br>")
}


function w(str){
	document.write(str);
}
var d=document.all[4];
w(d.childNodes[1].nodeType);	//1- если тег и так далее 2  атрибут 3- текст 10 - докумет тайп ; для него все пробелы и ентеры это тоже узел - но все пробелы будет один узел
w(d.childNodes[1].nodeName);
w(d.childNodes[0].nodeValue);
w(d.firstChild.nodeName);
w(document.all[4].childNodes[1].parentNode.nodeName);
w(document.all[4].childNodes[1].nextSibling.nodeName);
w(document.all[4].childNodes[1].previousSibling.nodeName);

for (var i=0;i<document.all[4].childNodes.length;i++)
{
	w(document.all[4].childNodes[i].nodeName);
}

//w(d.childNodes[1].childNodes[1].nodeType);	
var t=document.getElementById('myId').innerHTML="wwwww";
w(t.innerHTML);	
w(t.innerText);


	

	function w(str){
		document.write(str);
	}
	var t =document.getElementById("myId");
	w(t.innerHTML);
	var d2= document.getElementById('div2').innerHTML=t.innerHTML;
	
	document.getElementById('div2').style.color="blue";
	t.style.background="green";
	t.style.fontSize="24px";
	/*var t3=document.getElementById('myId').style.color;
	w(t3);
	var s=document.getElementsByTagName("div");
	w(s.length);
	w(s[3].innerHTML);
	s[3].innerHTML="new text div";
	for (var i=0; i<s.length;i++){
		if (i%2=0){
			s[i].style.float="left";
			s[i].style.background="blue";
		}
		else{
			s[i].style.float="right";
			s[i].style.background="yellow";
		}
	}
	var s=document.getElementsByTagName("div")[5];
	w(s.innerHTML);
	var st=document.getElementsByClassName("cl")[2];
	st.style.fontSize="24px";
	w(st.getAttribute("class"));
	st.setAttribute('id','testId');
	if (st.HasAttribute('class')){
		w("has class");
	}*/

		function cFunk(){
			document.body.style.background="blue";
		}
		function cFunk2(){
			document.body.style.background="green";
		}
		function fFunk(){
			document.body.style.background="black";
		}
		function mFunk(el){
			var c= el.style.background="yellow";
			if(c=="yellow"){
				el.style.background="white";
			}
			else {
				el.style.background="yellow";
			}
		}
		function f1{
			myId.style.color="red";

		}
		myId.onclick=f1;
		function bFunk(){
			document.body.style.background="red";
		}

		function w(str){
			document.write(str);

		}
		var f=document.forms.length;
		var f11=document.forms[0];
		var f12=document.forms["form1"];
		var f13=document.forms.form1;
		var el1=f11.elements.length;
		w(f);
		w(el);
		var date=new Date();
		
		document.write (date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
		
		<!DOCTYPE html>
<html>
<body>
​
<p>A script on this page starts this clock:</p>
​
<p id="demo"></p>
​
<script>
var myVar = setInterval(myTimer, 1000);
var currentDate=new Date();
var current = 10;//currentDate.getSeconds();
function myTimer() {
    current--;
    if(current>0){
    var d = new Date(current*1000);
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();}
    else{
    alert("Ваше время истекло");
    clearInterval(myVar);
    document.getElementById("demo").innerHTML=
    }
}


