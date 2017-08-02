var tag = 'wjbt-20';
$('a[href *= "amazon.com"]').each( function() {
	var url = $(this).attr('href');
	console.log();
	var regex = RegExp("https://www.amazon.com/([\\w-]+/)?(dp|gp/product)/(\\w+/)?(\\w{10})");
	m = url.match(regex);
	if (m) { 
		var newURL = 'https://www.amazon.com/dp/' + m[4] + '/&tag=' + tag;
	    $(this).attr('href',newURL);
	}
});
