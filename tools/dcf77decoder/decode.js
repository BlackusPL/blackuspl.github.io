"use strict";

function bcd(data, a, b)
{
	let result;
	let i;
	
	result = 0;
	
	for (i=a; i<=b; i++)
	{
		result += data[i] * (2 ** (i - a));
	}
	
	return result;
}

function parity(data, a, b)
{
	let result;
	let i;
	
	result = 0;
	
	for (i=a; i<=b; i++)
	{
		result ^= data[i];
	}
	
	console.log(result);
	
	return result;
}

function pad(x, n)
{
	let result;
	
	result = "" + x;
	
	while (result.length < n)
	{
		result = "0" + result;
	}
	
	return result;
}

function parse(data_string)
{
	let i;
	let result;
	
	result = [];
	for (i=0; i<data_string.length; i++)
	{
		if (data_string[i] != "0" && data_string[i] != "1")
		{
			continue;
		}
		
		result.push(parseInt(data_string[i]));
	}
	
	return result;
}

function dcf77_decode(data)
{
	let i;
	let result;
	
	result = "";
	
	if (data.length < 60)
	{
		result += "incomplete\n";
	}
	else if (data.length > 60)
	{
		result += "extra bits (ignored)\n";
	}
	
	if (data[0] != 0)
	{
		result += "e1 - start bit is not 0\n";
	}
	
	if (data[20] != 1)
	{
		result += "e2 - minute start bit is not 1\n";
	}
	
	if (parity(data, 21, 28) != 0)
	{
		result += "p1 - minute parity bit is incorrect\n";
	}
	
	if (parity(data, 29, 35) != 0)
	{
		result += "p2 - hours parity bit is incorrect\n";
	}
	
	if (parity(data, 36, 58) != 0)
	{
		result += "p3 - date parity bit is incorrect\n";
	}
	
	if (data[59] != 0)
	{
		result += "e3 - minute mark is not 0\n";
	}
	

	result += "20" + pad(bcd(data, 50, 53) + bcd(data, 54, 57) * 10, 2) + "-" +
		pad(bcd(data, 45, 48) + bcd(data, 49, 49) * 10, 2) + "-" +
		pad(bcd(data, 36, 39) + bcd(data, 40, 41) * 10, 2) + " " +
		pad(bcd(data, 29, 32) + bcd(data, 33, 34) * 10, 2) + ":" +
		pad(bcd(data, 21, 24) + bcd(data, 25, 27) * 10, 2) + ":" +
		"00 " +
		(
			(data[17] && !data[18]) ? "CEST" : (
				(!data[17] && data[18]) ? "CET" : "???"
			)
		);
	
	return result;
}

function dcf77_format(data)
{
	function cut(a, b)
	{
		return data.slice(a, b + 1).join("");
	}
	
	return cut(0, 0) + "-" +
		cut(1, 14) + "-" +
		cut(15, 19) + "-" +
		cut(20, 20) + "-" +
		cut(21, 27) + "-" +
		cut(28, 28) + "-" +
		cut(29, 34) + "-" +
		cut(35, 35) + "-" +
		cut(36, 57) + "-" +
		cut(58, 58) + "-" +
		cut(59, 59);
}

function changed()
{
	let s, parsed;
	
	parsed = parse(document.getElementById("input").value);
	
	s = dcf77_decode(parsed);
	
	document.getElementById("input_parsed").innerHTML = dcf77_format(parsed);
	document.getElementById("result").innerHTML = s;
}

function init()
{
	let a;
	
	a = document.getElementById("input");
	a.addEventListener("change", changed);
	a.addEventListener("keypress", changed);
	a.addEventListener("keyup", changed);
	changed();
}

window.addEventListener("load", init);