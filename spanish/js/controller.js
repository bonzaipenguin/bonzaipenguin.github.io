define(['signals'], function(Signal) {

var controller = {
	started : new Signal(),
	focused : new Signal(),
	updated : new Signal()
};

return controller;
});