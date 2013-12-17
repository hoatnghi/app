;(function($){
/**
 * jqGrid Hebrew Translation
 * Shuki Shukrun shukrun.shuki@gmail.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "???? {0} - {1} ???? {2}",
		emptyrecords: "�?ין רשומות להציג",
		loadtext: "????...",
		pgtext : "?? {0} ???? {1}"
	},
	search : {
		caption: "????...",
		Find: "???",
		Reset: "????",
		odata: [{ oper:'eq', text:"שווה"},{ oper:'ne', text:"ל�? שווה"},{ oper:'lt', text:"קטן"},{ oper:'le', text:"קטן �?ו שווה"},{ oper:'gt', text:"גדול"},{ oper:'ge', text:"גדול �?ו שווה"},{ oper:'bw', text:"מתחיל ב"},{ oper:'bn', text:"ל�? מתחיל ב"},{ oper:'in', text:"נמצ�? ב"},{ oper:'ni', text:"ל�? נמצ�? ב"},{ oper:'ew', text:"מסתיי�? ב"},{ oper:'en', text:"ל�? מסתיי�? ב"},{ oper:'cn', text:"מכיל"},{ oper:'nc', text:"ל�? מכיל"}],
		groupOps: [	{ op: "AND", text: "הכל" },	{ op: "OR",  text: "�?חד מ" }	]
	},
	edit : {
		addCaption: "???? ?????",
		editCaption: "???? ?????",
		bSubmit: "???",
		bCancel: "???",
		bClose: "????",
		saveData: "נתוני�? השתנו! לשמור?",
		bYes : "??",
		bNo : "ל�?",
		bExit : "???",
		msg: {
			required:"??? ????",
			number:"�?נ�?, הכנס מספר תקין",
			minValue:"ערך צריך להיות גדול �?ו שווה ל ",
			maxValue:"ערך צריך להיות קטן �?ו שווה ל ",
			email: "הי�? ל�? כתובת �?יימל תקינה",
			integer: "�?נ�?, הכנס מספר של�?",
			date: "�?נ�?, הכנס ת�?ריך תקין",
			url: "הכתובת �?ינה תקינה. דרושה תחילית ('http://' �?ו 'https://')",
			nodefined : " is not defined!",
			novalue : " return value is required!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
		}
	},
	view : {
		caption: "??? ?????",
		bClose: "????"
	},
	del : {
		caption: "???",
		msg: "ה�?�? למחוק �?ת הרשומה/ות המסומנות?",
		bSubmit: "???",
		bCancel: "???"
	},
	nav : {
		edittext: "",
		edittitle: "???? ???? ??????",
		addtext:"",
		addtitle: "???? ???? ????",
		deltext: "",
		deltitle: "??? ???? ??????",
		searchtext: "",
		searchtitle: "??? ??????",
		refreshtext: "",
		refreshtitle: "??? ???? ????",
		alertcap: "�?זהרה",
		alerttext: "�?נ�?, בחר שורה",
		viewtext: "",
		viewtitle: "??? ???? ??????"
	},
	col : {
		caption: "???/???? ??????",
		bSubmit: "???",
		bCancel: "???"
	},
	errors : {
		errcap : "שגי�?ה",
		nourl : "ל�? הוגדרה כתובת url",
		norecords: "�?ין רשומות לעבד",
		model : "�?ורך של colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"�?", "ב", "ג", "ד", "ה", "ו", "ש",
				"ר�?שון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"
			],
			monthNames: [
				"ינו", "פבר", "מרץ", "�?פר", "מ�?י", "יונ", "יול", "�?וג", "ספט", "�?וק", "נוב", "דצמ",
				"ינו�?ר", "פברו�?ר", "מרץ", "�?פריל", "מ�?י", "יוני", "יולי", "�?וגוסט", "ספטמבר", "�?וקטובר", "נובמבר", "דצמבר"
			],
			AmPm : ["לפני הצהרי�?","�?חר הצהרי�?","לפני הצהרי�?","�?חר הצהרי�?"],
			S: function (j) {return j < 11 || j > 13 ? ['', '', '', ''][Math.min((j - 1) % 10, 3)] : ''},
			srcformat: 'Y-m-d',
			newformat: 'd/m/Y',
			parseRe : /[Tt\\\/:_;.,\t\s-]/,
			masks : {
				ISO8601Long:"Y-m-d H:i:s",
				ISO8601Short:"Y-m-d",
				ShortDate: "n/j/Y",
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
