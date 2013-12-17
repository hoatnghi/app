;(function($){
/**
 * jqGrid Chinese Translation for v4.2
 * henryyan 2011.11.30
 * http://www.wsria.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
 * update 2011.11.30
 *		add double u3000 SPACE for search:odata to fix SEARCH box display err when narrow width from only use of eq/ne/cn/in/lt/gt operator under IE6/7
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "{0} - {1}\u3000共 {2} �?�",	// 共字�?是全角空格
		emptyrecords: "无数�?�显示",
		loadtext: "读�?�中...",
		pgtext : " {0} ? {1} ?"
	},
	search : {
		caption: "�?�索...",
		Find: "??",
		Reset: "�?置",
		odata : [{oper:'eq', text:'等于\u3000\u3000'},{oper:'ne', text: '�?等\u3000\u3000'}, { oper:'lt', text:'�?于\u3000\u3000'},{ oper:'le', text: '�?于等于'},{ oper:'gt', text:'大于\u3000\u3000'},{ oper:'ge', text:'大于等于'},
			{oper:'bw', text:'开始于'},{ oper:'bn', text:'�?开始于'},{ oper:'in', text:'属于\u3000\u3000'},{ oper:'ni', text:'�?属于'},{ oper:'ew', text:'结�?�于'},{ oper:'en', text:'�?结�?�于'},{ oper:'cn', text:'包�?�\u3000\u3000'},{ oper:'nc', text:'�?包�?�'},{ oper:'nu', text:'空值于\u3000\u3000'},{ oper:'nn', text:'�?�空值'}],
		groupOps: [	{ op: "AND", text: "??" },	{ op: "OR",  text: "??" }	]
	},
	edit : {
		addCaption: "????",
		editCaption: "????",
		bSubmit: "�??交",
		bCancel: "�?�消",
		bClose: "??",
		saveData: "数�?�已改�?�，是�?��?存？",
		bYes : "?",
		bNo : "�?�",
		bExit : "�?�消",
		msg: {
			required:"?????",
			number:"???????",
			minValue:"???????? ",
			maxValue:"输值必须�?于等于 ",
			email: "这�?是有效的e-mail地�?�",
			integer: "???????",
			date: "???????",
			url: "无效网�?�。�?缀必须为 ('http://' 或 'https://')",
			nodefined : " 未定义�?",
			novalue : " 需�?返回值�?",
			customarray : "自定义函数需�?返回数组�?",
			customfcheck : "Custom function should be present in case of custom checking!"
			
		}
	},
	view : {
		caption: "????",
		bClose: "??"
	},
	del : {
		caption: "??",
		msg: "???????",
		bSubmit: "??",
		bCancel: "�?�消"
	},
	nav : {
		edittext: "",
		edittitle: "??????",
		addtext:"",
		addtitle: "?????",
		deltext: "",
		deltitle: "??????",
		searchtext: "",
		searchtitle: "??",
		refreshtext: "",
		refreshtitle: "????",
		alertcap: "注�?",
		alerttext: "?????",
		viewtext: "",
		viewtitle: "??????"
	},
	col : {
		caption: "???",
		bSubmit: "??",
		bCancel: "�?�消"
	},
	errors : {
		errcap : "??",
		nourl : "????url",
		norecords: "没有�?处�?�的记录",
		model : "colNames 和 colModel 长度�?等�?"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat",
		         "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
				"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
			srcformat: 'Y-m-d',
			newformat: 'm-d-Y',
			parseRe : /[Tt\\\/:_;.,\t\s-]/,
			masks : {
				ISO8601Long:"Y-m-d H:i:s",
				ISO8601Short:"Y-m-d",
				ShortDate: "Y/j/n",
				LongDate: "l, F d, Y",
				FullDateTime: "l, F d, Y g:i:s A",
				MonthDay: "F d",
				ShortTime: "g:i A",
				LongTime: "g:i:s A",
				SortableDateTime: "Y-m-d\\TH:i:s",
				UniversalSortableDateTime: "Y-m-d H:i:sO",
				YearMonth: "F, Y"
			},
			reformatAfterEdit : false
		},
		baseLinkUrl: '',
		showAction: '',
		target: '',
		checkbox : {disabled:true},
		idName : 'id'
	}
});
})(jQuery);
