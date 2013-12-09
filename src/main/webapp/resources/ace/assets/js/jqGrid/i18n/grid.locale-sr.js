?;(function($){
/**
 * jqGrid Serbian Translation
 * �?лек�?андар Миловац(Aleksandar Milovac) aleksandar.milovac@gmail.com
 * http://trirand.com/blog/
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "??????? {0} - {1} ?? {2}",
		emptyrecords: "�?е по�?тоји ниједан запи�?",
		loadtext: "?????????...",
		pgtext : "?????? {0} ?? {1}"
	},
	search : {
		caption: "???????...",
		Find: "?????",
		Reset: "Ре�?етуј",
		odata: [{ oper:'eq', text:"једнако"},{ oper:'ne', text:"није једнако"},{ oper:'lt', text:"мање"},{ oper:'le', text:"мање или једнако"},{ oper:'gt', text:"веће"},{ oper:'ge', text:"веће или једнако"},{ oper:'bw', text:"почиње �?а"},{ oper:'bn', text:"не почиње �?а"},{ oper:'in', text:"је у"},{ oper:'ni', text:"није у"},{ oper:'ew', text:"завршава �?а"},{ oper:'en', text:"не завршава �?а"},{ oper:'cn', text:"�?адржи"},{ oper:'nc', text:"не �?адржи"}],
		groupOps: [	{ op: "И", text: "�?ви" },	{ op: "ИЛИ",  text: "�?ваки" }	]
	},
	edit : {
		addCaption: "Додај запи�?",
		editCaption: "Измени запи�?",
		bSubmit: "??????",
		bCancel: "Оду�?тани",
		bClose: "???????",
		saveData: "??????? ?? ???????! ??????? ???????",
		bYes : "??",
		bNo : "�?е",
		bExit : "Оду�?тани",
		msg: {
			required:"???? ?? ????????",
			number:"Молим, уне�?ите и�?праван број",
			minValue:"вредно�?т мора бити већа од или једнака �?а ",
			maxValue:"вредно�?т мора бити мања од или једнака �?а",
			email: "није и�?правна имејл адре�?а",
			integer: "Молим, уне�?ите и�?правну целобројну вредно�?т ",
			date: "Молим, уне�?ите и�?праван датум",
			url: "није и�?праван УРЛ. Потребан је префик�? ('http://' or 'https://')",
			nodefined : " није дефини�?ан!",
			novalue : " захтевана је повратна вредно�?т!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
			
		}
	},
	view : {
		caption: "Погледај запи�?",
		bClose: "???????"
	},
	del : {
		caption: "???????",
		msg: "Избриши изабран(е) запи�?(е)?",
		bSubmit: "??????",
		bCancel: "??????"
	},
	nav : {
		edittext: "",
		edittitle: "?????? ???????? ???",
		addtext:"",
		addtitle: "????? ???? ???",
		deltext: "",
		deltitle: "??????? ??????? ???",
		searchtext: "",
		searchtitle: "�?ађи запи�?е",
		refreshtext: "",
		refreshtitle: "?????? ?????? ???????",
		alertcap: "?????????",
		alerttext: "?????, ????????? ???",
		viewtext: "",
		viewtitle: "???????? ???????? ???"
	},
	col : {
		caption: "??????? ??????",
		bSubmit: "??",
		bCancel: "??????"
	},
	errors : {
		errcap : "??????",
		nourl : "�?ије по�?тављен URL",
		norecords: "�?ема запи�?а за обраду",
		model : "?????? ?????? colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"�?ед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб",
				"�?едеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"
			],
			monthNames: [
				"Јан", "Феб", "Мар", "�?пр", "Мај", "Јун", "Јул", "�?вг", "Сеп", "Окт", "�?ов", "Дец",
				"Јануар", "Фебруар", "Март", "�?прил", "Мај", "Јун", "Јул", "�?вгу�?т", "Септембар", "Октобар", "�?овембар", "Децембар"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th'},
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
