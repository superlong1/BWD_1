function hideMenu () {
	let icon = document.getElementById("iconShow");
	let navi = document.getElementById("navi");
	icon.setAttribute("style", "display:none;");
	navi.classList.remove("hide");
}

function showMenu () {
	let icon = document.getElementById("iconShow");
	let navi = document.getElementById("navi");
	icon.setAttribute("style" , "display:block;");
	navi.classList.add("hide");
}
/*For time*/
	let today = new Date();
	let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
	document.getElementById("timeShow").innerHTML = "Hôm nay, " + date;
	document.getElementById("timeShow1").innerHTML = date;
	document.getElementById("timeShow2").innerHTML = date;
  document.getElementById("dateShow").innerHTML = date;
/**********************************************************/

/*Chart*/

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart1);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Số ca', 'Ca mỗi ngày'],
  ['Ca mắc', 6713],
  ['Đang điều trị', 3766],
  ['Điều trị khỏi', 2896],
  ['Ca tử vong', 47],
]);

  var options = {'title':'Thống kê covid ngày '+date, 'width':350, 'height':300};

  var chart = new google.visualization.PieChart(document.getElementById('chart'));
  chart.draw(data, options);
}

function drawChart1() {
  var data = google.visualization.arrayToDataTable([
  ['Số ca', 'Ca mỗi ngày'],
  ['Ca mắc', 169616816],
  ['Đang điều trị', 14765045],
  ['Điều trị khỏi', 151327262],
  ['Ca tử vong', 3524509],
]);

  var options = {'title':'Thống kê covid ngày '+date, 'width':350, 'height':300};

  var chart = new google.visualization.PieChart(document.getElementById('chart1'));
  chart.draw(data, options);
}

/*display time*/

