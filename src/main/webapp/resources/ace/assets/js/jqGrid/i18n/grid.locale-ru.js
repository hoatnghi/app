;(function($){
/**
 * jqGrid Russian Translation v1.0 02.07.2009 (based on translation by Alexey Kanaev v1.1 21.01.2009, http://softcore.com.ru)
 * Sergey Dyagovchenko
 * http://d.sumy.ua
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "Про�?мотр {0} - {1} из {2}",
	  emptyrecords: "�?ет запи�?ей дл�? про�?мотра",
		loadtext: "????????...",
		pgtext : "???. {0} ?? {1}"
	},
	search : {
    caption: "Пои�?к...",
    Find: "�?айти",
    Reset: "Сбро�?",
    odata: [{ oper:'eq', text:"равно"},{ oper:'ne', text:"не равно"},{ oper:'lt', text:"меньше"},{ oper:'le', text:"меньше или равно"},{ oper:'gt', text:"больше"},{ oper:'ge', text:"больше или равно"},{ oper:'bw', text:"начинает�?�? �?"},{ oper:'bn', text:"не начинает�?�? �?"},{ oper:'in', text:"находит�?�? в"},{ oper:'ni', text:"не находит�?�? в"},{ oper:'ew', text:"заканчивает�?�? на"},{ oper:'en', text:"не заканчивает�?�? на"},{ oper:'cn', text:"�?одержит"},{ oper:'nc', text:"не �?одержит"}],
    groupOps: [	{ op: "AND", text: "в�?е" },	{ op: "OR",  text: "любой" }	]
	},
	edit : {
    addCaption: "Добавить запи�?ь",
    editCaption: "Редактировать запи�?ь",
    bSubmit: "?????????",
    bCancel: "??????",
		bClose: "???????",
		saveData: "Данные были измененны! Сохранить изменени�??",
		bYes : "??",
		bNo : "�?ет",
		bExit : "??????",
	    msg: {
        required:"Поле �?вл�?ет�?�? об�?зательным",
        number:"Пожалуй�?та, введите правильное чи�?ло",
        minValue:"???????? ?????? ???? ?????? ???? ?????",
        maxValue:"???????? ?????? ???? ?????? ???? ?????",
        email: "???????????? ???????? e-mail",
        integer: "Пожалуй�?та, введите целое чи�?ло",
        date: "Пожалуй�?та, введите правильную дату",
        url: "неверна�? �?�?ылка. �?еобходимо вве�?ти префик�? ('http://' или 'https://')",
		nodefined : " ?? ??????????!",
		novalue : " возвращаемое значение об�?зательно!",
		customarray : "Пользователь�?ка�? функци�? должна возвращать ма�?�?ив!",
		customfcheck : "Пользователь�?ка�? функци�? должна при�?ут�?твовать в �?лучаи пользователь�?кой проверки!"
		}
	},
	view : {
	    caption: "Про�?мотр запи�?и",
	    bClose: "???????"
	},
	del : {
	    caption: "???????",
	    msg: "Удалить выбранную запи�?ь(и)?",
	    bSubmit: "???????",
	    bCancel: "??????"
	},
	nav : {
  		edittext: " ",
	    edittitle: "Редактировать выбранную запи�?ь",
  		addtext:" ",
	    addtitle: "Добавить новую запи�?ь",
	    deltext: " ",
	    deltitle: "Удалить выбранную запи�?ь",
	    searchtext: " ",
	    searchtitle: "�?айти запи�?и",
	    refreshtext: "",
	    refreshtitle: "???????? ???????",
	    alertcap: "????????",
	    alerttext: "Пожалуй�?та, выберите запи�?ь",
  		viewtext: "",
  		viewtitle: "Про�?мотреть выбранную запи�?ь"
	},
	col : {
	    caption: "Показать/�?крыть �?толбцы",
	    bSubmit: "?????????",
	    bCancel: "??????"	
	},
	errors : {
		errcap : "??????",
		nourl : "URL не у�?тановлен",
		norecords: "�?ет запи�?ей дл�? обработки",
    model : "Чи�?ло полей не �?оответ�?твует чи�?лу �?толбцов таблицы!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0,00'},
		currency : {decimalSeparator:",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0,00'},
		date : {
			dayNames:   [
				"В�?", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб",
				"Во�?кре�?ение", "Понедельник", "Вторник", "Среда", "Четверг", "П�?тница", "Суббота"
			],
			monthNames: [
				"Янв", "Фев", "Мар", "�?пр", "Май", "Июн", "Июл", "�?вг", "Сен", "Окт", "�?о�?", "Дек",
				"Январь", "Февраль", "Март", "�?прель", "Май", "Июнь", "Июль", "�?вгу�?т", "Сент�?брь", "Окт�?брь", "�?о�?брь", "Декабрь"
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
