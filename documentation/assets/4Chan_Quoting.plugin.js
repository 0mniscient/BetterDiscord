//META{"name":"FourChanQuoting"}*//

function FourChanQuoting() {}

FourChanQuoting.processChat = function() {
	setTimeout(function() {
		$(".comment .body .markup:not(.meh-scanned), .comment .markup>span:not(.meh-scanned)").each(function() {
			var tagRegex = new RegExp(`&gt;(.+)`, 'igm');
			var html = $(this).html();
			$(this).html(html.replace(tagRegex, `<b style='color: #789922;'>&gt;$1</b>`));
		}).addClass("meh-scanned");
	},250);
};

FourChanQuoting.prototype.load = function() {};

FourChanQuoting.prototype.unload = function() {};

FourChanQuoting.prototype.start = FourChanQuoting.processChat;

FourChanQuoting.prototype.stop = function () {};

FourChanQuoting.prototype.onMessage = FourChanQuoting.processChat;

FourChanQuoting.prototype.onSwitch = FourChanQuoting.processChat;

FourChanQuoting.prototype.getName = function () {
    return "4Chan_Quoting";
};

FourChanQuoting.prototype.getDescription = function () {
    return "Send a message with > at the start to make the text green like 4Chan!";
};

FourChanQuoting.prototype.getVersion = function () {
    return "1.0";
};

FourChanQuoting.prototype.getAuthor = function () {
    return "MRVDOG";
};
