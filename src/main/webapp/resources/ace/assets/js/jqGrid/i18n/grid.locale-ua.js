;(function($){
/**
 * jqGrid Ukrainian Translation v1.0 02.07.2009
 * Sergey Dyagovchenko
 * http://d.sumy.ua
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Перегл�?д {0} - {1} з {2}",
	  emptyrecords: "�?емає запи�?ів дл�? перегл�?ду",
		loadtext: "Завантаженн�?...",
		pgtext : "????. {0} ? {1}"
	},
	search : {
    caption: "?????...",
    Find: "??????",
    Reset: "Скиданн�?",
    odata: [{ oper:'eq', text:"рівно"},{ oper:'ne', text:"не рівно"},{ oper:'lt', text:"менше"},{ oper:'le', text:"менше або рівне"},{ oper:'gt', text:"більше"},{ oper:'ge', text:"більше або рівне"},{ oper:'bw', text:"починаєть�?�? з"},{ oper:'bn', text:"не починаєть�?�? з"},{ oper:'in', text:"знаходить�?�? в"},{ oper:'ni', text:"не знаходить�?�? в"},{ oper:'ew', text:"закінчуєть�?�? на"},{ oper:'en', text:"не закінчуєть�?�? на"},{ oper:'cn', text:"мі�?тить"},{ oper:'nc', text:"не мі�?тить"}],
    groupOps: [	{ op: "AND", text: "в�?е" },	{ op: "OR",  text: "будь-�?кий" }	]
	},
	edit : {
    addCaption: "Додати запи�?",
    editCaption: "Змінити запи�?",
    bSubmit: "????????",
    bCancel: "???????",
		bClose: "???????",
		saveData: "До данних були вне�?ені зміни! Зберегти зміни?",
		bYes : "???",
		bNo : "�?і",
		bExit : "???????",
	    msg: {
        required:"Поле є обов'�?зковим",
        number:"Будь ла�?ка, введіть правильне чи�?ло",
        minValue:"значенн�? повинне бути більше або дорівнює",
        maxValue:"значенн�? повинно бути менше або дорівнює",
        email: "некоректна адре�?а електронної пошти",
        integer: "Будь ла�?ка, введенн�? дій�?не ціле значенн�?",
        date: "Будь ла�?ка, введенн�? дій�?не значенн�? дати",
        url: "не дій�?ний URL. �?еобхідна при�?тавка ('http://' or 'https://')",
		nodefined : " is not defined!",
		novalue : " return value is required!",
		customarray : "Custom function should return array!",
		customfcheck : "Custom function should be present in case of custom checking!"
		}
	},
	view : {
	    caption: "Перегл�?нути запи�?",
	    bClose: "???????"
	},
	del : {
	    caption: "????????",
	    msg: "Видалити обраний запи�?(и)?",
	    bSubmit: "????????",
	    bCancel: "???????"
	},
	nav : {
  		edittext: " ",
	    edittitle: "Змінити вибраний запи�?",
  		addtext:" ",
	    addtitle: "Додати новий запи�?",
	    deltext: " ",
	    deltitle: "Видалити вибраний запи�?",
	    searchtext: " ",
	    searchtitle: "Знайти запи�?и",
	    refreshtext: "",
	    refreshtitle: "??????? ???????",
	    alertcap: "Попередженн�?",
	    alerttext: "Будь ла�?ка, виберіть запи�?",
  		viewtext: "",
  		viewtitle: "Перегл�?нути обраний запи�?"
	},
	col : {
	    caption: "Показати/Приховати �?товпці",
	    bSubmit: "????????",
	    bCancel: "???????"
	},
	errors : {
		errcap : "???????",
		nourl : "URL ?? ?????",
		norecords: "�?емає запи�?ів дл�? обробки",
    model : "Чи�?ло полів не відповідає чи�?лу �?товпців таблиці!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"�?д", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб",
				"�?еділ�?", "Понеділок", "Вівторок", "Середа", "Четвер", "П'�?тниц�?", "Субота"
			],
			monthNames: [
				"Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Ли�?", "Гру",
				"Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вере�?ень", "Жовтень", "Ли�?топад", "Грудень"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
			srcformat: 'Y-m-d',
			newformat: 'd.m.Y',
			parseRe : /[Tt\\\/:_;.,\t\s-]/,
			masks : {
	            ISO8601Long:"Y-m-d H:i:s",
	            ISO8601Short:"Y-m-d",
	            ShortDate: "n.j.Y",
	            LongDate: "l, F d, Y",
	            FullDateTime: "l, F d, Y G:i:s",
	            MonthDay: "F d",
	            ShortTime: "G:i",
	            LongTime: "G:i:s",
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
