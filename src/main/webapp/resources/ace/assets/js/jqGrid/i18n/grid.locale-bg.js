;(function($){
/**
 * jqGrid Bulgarian Translation 
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "{0} - {1} ?? {2}",
		emptyrecords: "�?�?ма запи�?(и)",
		loadtext: "????????...",
		pgtext : "???. {0} ?? {1}"
	},
	search : {
		caption: "Тър�?ене...",
		Find: "�?амери",
		Reset: "Изчи�?ти",
		odata: [{ oper:'eq', text:"равно"},{ oper:'ne', text:"различно"},{ oper:'lt', text:"по-малко"},{ oper:'le', text:"по-малко или="},{ oper:'gt', text:"по-гол�?мо"},{ oper:'ge', text:"по-гол�?мо или ="},{ oper:'bw', text:"започва �?"},{ oper:'bn', text:"не започва �?"},{ oper:'in', text:"�?е намира в"},{ oper:'ni', text:"не �?е намира в"},{ oper:'ew', text:"завършва �?"},{ oper:'en', text:"не завършава �?"},{ oper:'cn', text:"�?ъдържа"},{ oper:'nc', text:"не �?ъдържа"}],
	    groupOps: [	{ op: "AND", text: "&nbsp;? " },	{ op: "OR",  text: "???" }	]
	},
	edit : {
		addCaption: "�?ов Запи�?",
		editCaption: "Редакци�? Запи�?",
		bSubmit: "??????",
		bCancel: "?????",
		bClose: "???????",
		saveData: "Данните �?а променени! Да �?ъхран�? ли промените?",
		bYes : "??",
		bNo : "�?е",
		bExit : "?????",
		msg: {
			required:"?????? ? ????????????",
			number:"Въведете валидно чи�?ло!",
			minValue:"�?тойно�?тта тр�?бва да е по-гол�?ма или равна от",
			maxValue:"�?тойно�?тта тр�?бва да е по-малка или равна от",
			email: "не е валиден ел. адре�?",
			integer: "Въведете валидно ц�?ло чи�?ло",
			date: "???????? ??????? ????",
			url: "e невалиден URL. Изи�?кава �?е префик�?('http://' или 'https://')",
			nodefined : " ? ????????????!",
			novalue : " изи�?ква връщане на �?тойно�?т!",
			customarray : "Потреб. Функци�? тр�?бва да върне ма�?ив!",
			customfcheck : "Потребител�?ка функци�? е задължителна при този тип елемент!"
		}
	},
	view : {
		caption: "Преглед запи�?",
		bClose: "???????"
	},
	del : {
		caption: "?????????",
		msg: "Да изтри�? ли избрани�?т запи�??",
		bSubmit: "??????",
		bCancel: "?????"
	},
	nav : {
		edittext: " ",
		edittitle: "Редакци�? избран запи�?",
		addtext:" ",
		addtitle: "Добав�?не нов запи�?",
		deltext: " ",
		deltitle: "Изтриване избран запи�?",
		searchtext: " ",
		searchtitle: "Тър�?ене запи�?(и)",
		refreshtext: "",
		refreshtitle: "?????? ???????",
		alertcap: "??????????????",
		alerttext: "Мол�?, изберете запи�?",
		viewtext: "",
		viewtitle: "Преглед избран запи�?"
	},
	col : {
		caption: "?????? ??????",
		bSubmit: "??",
		bCancel: "?????"	
	},
	errors : {
		errcap : "??????",
		nourl : "�?�?ма по�?очен url адре�?",
		norecords: "�?�?ма запи�? за обработка",
		model : "Модела не �?ъответ�?тва на имената!"	
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:" ??.", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"�?ед", "Пон", "Вт", "Ср", "Чет", "Пет", "Съб",
				"�?едел�?", "Понеделник", "Вторник", "Ср�?да", "Четвъртък", "Петък", "Събота"
			],
			monthNames: [
				"Яну", "Фев", "Мар", "�?пр", "Май", "Юни", "Юли", "�?вг", "Сеп", "Окт", "�?ов", "Дек",
				"Януари", "Февруари", "Март", "�?прил", "Май", "Юни", "Юли", "�?вгу�?т", "Септември", "Октомври", "�?оември", "Декември"
			],
			AmPm : ["","","",""],
			S: function (j) {
				if(j==7 || j==8 || j== 27 || j== 28) {
					return '??';
				}
				return ['??', '??', '??'][Math.min((j - 1) % 10, 2)];
			},
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
