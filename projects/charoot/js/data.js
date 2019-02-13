function getProjects() {
	return $.ajax({url: 'data/projects.json',  contentType: "application/json"});
}


function loadProjects(container, appId) {
	getProjects().then(function(projects) {
		var column1 = '';
		var column2 = '';
		var params = queryParams();
		if(typeof projects == 'string') {
			projects = JSON.parse(projects);
		}
		$.each(projects, function( index, value ) {
			if(index % 2 == 0) {
				column2 += '<img onclick="loadApp(\'' + value["file-name"] + '\')" src="' + value["image-url"] + '" style="width:100%">';
			}
			else {
				column1 += '<img onclick="loadApp(\'' + value["file-name"] + '\')" src="' + value["image-url"] + '" style="width:100%">';			}
		});
		$('.column-1').html(column1);
		$('.column-2').html(column2);
	});
}


function queryParams() {
	var queries = {};
	$.each(document.location.search.substr(1).split('&'),function(c,q){
		var i = q.split('=');
		if(i[1] != undefined && i[1] != null) {
			queries[i[0].toString()] = i[1].toString();
		}
	});
	return queries;
}


function loadApp(fileName) {
	$('.app').load("views/" + fileName + ".html");
}
