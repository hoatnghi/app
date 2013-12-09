;(function($){
/**
 * jqGrid Chinese (Taiwan) Translation for v4.2
 * linquize
 * https://github.com/linquize/jqGrid
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "{0} - {1} 共 {2} �?",
		emptyrecords: "????",
		loadtext: "???...",
		pgtext : " {0} 共 {1} �?"
	},
	search : {
		caption: "�?�尋...",
		Find: "�?�尋",
		Reset: "�?設",
		odata: [{ oper:'eq', text:"等於 "},{ oper:'ne', text:"�?等於 "},{ oper:'lt', text:"�?於 "},{ oper:'le', text:"�?於等於 "},{ oper:'gt', text:"大於 "},{ oper:'ge', text:"大於等於 "},{ oper:'bw', text:"開始於 "},{ oper:'bn', text:"�?開始於 "},{ oper:'in', text:"在其中 "},{ oper:'ni', text:"�?在其中 "},{ oper:'ew', text:"�?�?�於 "},{ oper:'en', text:"�?�?�?�於 "},{ oper:'cn', text:"包�?� "},{ oper:'nc', text:"�?包�?� "}],
		groupOps: [	{ op: "AND", text: "??" },	{ op: "OR",  text: "??" }	]
	},
	edit : {
		addCaption: "????",
		editCaption: "????",
		bSubmit: "�??交",
		bCancel: "�?�消",
		bClose: "??",
		saveData: "資料已改變，是�?�儲存？",
		bYes : "?",
		bNo : "�?�",
		bExit : "�?�消",
		msg: {
			required:"此欄必�?",
			number:"????????",
			minValue:"??????? ",
			maxValue:"值必須�?於等於 ",
			email: "�?是有效的e-mail地�?�",
			integer: "???????",
			date: "???????",
			url: "網�?�無效。�?綴必須為 ('http://' 或 'https://')",
			nodefined : " 未定義�?",
			novalue : " 需�?傳回值�?",
			customarray : "自訂函數應傳回陣列�?",
			customfcheck : "自訂檢查應有自訂函數�?"
			
		}
	},
	view : {
		caption: "????",
		bClose: "??"
	},
	del : {
		caption: "??",
		msg: "刪除已�?�記錄？",
		bSubmit: "??",
		bCancel: "�?�消"
	},
	nav : {
		edittext: "",
		edittitle: "編輯已�?�列",
		addtext:"",
		addtitle: "???",
		deltext: "",
		deltitle: "刪除已�?�列",
		searchtext: "",
		searchtitle: "�?�尋記錄",
		refreshtext: "",
		refreshtitle: "�?新整�?�表格",
		alertcap: "??",
		alerttext: "請�?�擇列",
		viewtext: "",
		viewtitle: "檢視已�?�列"
	},
	col : {
		caption: "�?�擇欄",
		bSubmit: "??",
		bCancel: "�?�消"
	},
	errors : {
		errcap : "??",
		nourl : "???URL",
		norecords: "無需�?處�?�的記錄",
		model : "colNames 和 colModel 長度�?�?��?"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"?", "?", "?", "?", "?", "?", "?",
		         "???", "???", "???", "???", "???", "???", "???"
			],
			monthNames: [
				"一", "二", "三", "四", "五", "六", "七", "八", "�?", "�??", "�??一", "�??二",
				"一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "�?月", "�??月", "�??一月", "�??二月"
			],
			AmPm : ["上�?�","下�?�","上�?�","下�?�"],
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
