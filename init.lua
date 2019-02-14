local _exports = {};
local Timeout;
do
	Timeout = {};
	Timeout.__index = {
		clear = function(self)
			self.running = false;
		end;
	};
	Timeout.new = function(...)
		return Timeout.constructor(setmetatable({}, Timeout), ...);
	end;
	Timeout.constructor = function(self, callback, milliseconds)
		self.running = true;
		local seconds = milliseconds / 1000;
		delay(seconds, function()
			if self.running then
				callback();
			end;
		end);
		return self;
	end;
end;
local setTimeout = function(callback, milliseconds)
	return Timeout.new(callback, milliseconds);
end;
local clearTimeout = function(timeout)
	timeout:clear();
end;
local Interval;
do
	Interval = {};
	Interval.__index = {
		clear = function(self)
			self.running = false;
		end;
	};
	Interval.new = function(...)
		return Interval.constructor(setmetatable({}, Interval), ...);
	end;
	Interval.constructor = function(self, callback, milliseconds)
		self.running = true;
		local seconds = milliseconds / 1000;
		spawn(function()
			while self.running do
				wait(seconds);
				if self.running then
					callback();
				end;
			end;
		end);
		return self;
	end;
end;
local setInterval = function(callback, milliseconds)
	return Interval.new(callback, milliseconds);
end;
local clearInterval = function(interval)
	interval:clear();
end;
_exports.Timeout = Timeout;
_exports.setTimeout = setTimeout;
_exports.clearTimeout = clearTimeout;
_exports.Interval = Interval;
_exports.setInterval = setInterval;
_exports.clearInterval = clearInterval;
return _exports;
