function getProjects() {
	return $.ajax({url: '../data/projects.json'});
}


function loadProjects(container) {
	getProjects().then(function(projects) {
		var html = '';
		var params = queryParams();
		$.each(projects, function( index, value ) {
			if(params['id'] != value['id']) {
				html += '<div class="col-xs-6 dashboard-item"><a href="' + value["redirect-link"]  + '"><img src="' + value["image-url"] + '"></a></div>';
			}
		});
		$(container).html(html)
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
