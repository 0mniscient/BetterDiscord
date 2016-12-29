//META{"name":"4Chan_Quoting"}*//

function meh() {}

meh.processChat = function() {
	setTimeout(function() {
		$(".comment .body .markup:not(.meh-scanned), .comment .markup>span:not(.meh-scanned)").each(function() {
			var tagRegex = new RegExp(`(?!\.)&gt;(.+)`, 'igm');
			var html = $(this).html();
			$(this).html(html.replace(tagRegex, `<b style='color: #789922;'>&gt;$1</b>`));
		}).addClass("meh-scanned");
	},250);
};

meh.prototype.load = function() {
};

meh.prototype.unload = function() {
};

meh.prototype.start = function() {
	meh.processChat();
};
	
meh.prototype.onMessage = function () {
	meh.processChat();
};
meh.prototype.onSwitch = function () {
	meh.processChat();
};

meh.prototype.stop = function () {
};

meh.prototype.getName = function () {
    return "4Chan_Quoting";
};

meh.prototype.getDescription = function () {
    return "Send a message with > at the start to make the text green like 4Chan!";
};

meh.prototype.getVersion = function () {
    return "1.0";
};

meh.prototype.getAuthor = function () {
    return "MRVDOG";
};

meh.prototype.getSettingsPanel = function () {
};