;(function($){
/**
 * jqGrid English Translation
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "?? {0} - {1} / {2}",
		emptyrecords: "표시할 행�?� 없습니다",
		loadtext: "???...",
		pgtext : "페�?�지 {0} / {1}"
	},
	search : {
		caption: "??...",
		Find: "??",
		Reset: "???",
		odata: [{ oper:'eq', text:"같다"},{ oper:'ne', text:"같지 않다"},{ oper:'lt', text:"작다"},{ oper:'le', text:"작거나 같다"},{ oper:'gt', text:"�?�다"},{ oper:'ge', text:"�?�거나 같다"},{ oper:'bw', text:"로 시작한다"},{ oper:'bn', text:"로 시작하지 않는다"},{ oper:'in', text:"내�? 있다"},{ oper:'ni', text:"내�? 있지 않다"},{ oper:'ew', text:"로 �??난다"},{ oper:'en', text:"로 �??나지 않는다"},{ oper:'cn', text:"내�? 존재한다"},{ oper:'nc', text:"내�? 존재하지 않는다"}],
		groupOps: [	{ op: "AND", text: "전부" },	{ op: "OR",  text: "임�?�" }	]
	},
	edit : {
		addCaption: "? ??",
		editCaption: "? ??",
		bSubmit: "??",
		bCancel: "??",
		bClose: "??",
		saveData: "�?료가 변경�?�었습니다! 저장하시겠습니까?",
		bYes : "?",
		bNo : "???",
		bExit : "??",
		msg: {
			required:"???????",
			number:"??? ??? ??? ???",
			minValue:"입력값�?� �?�거나 같아야 합니다",
			maxValue:"입력값�?� 작거나 같아야 합니다",
			email: "유효하지 않�?� �?�메�?�주소입니다",
			integer: "유효한 숫�?를 입력하세요",
			date: "??? ??? ?????",
			url: "�?� 유효하지 않�?� URL입니다. 문장앞�? 다�?�단어가 필요합니다('http://' or 'https://')",
			nodefined : " �?� 정�?��?�지 않았습니다!",
			novalue : " 반환값�?� 필요합니다!",
			customarray : "사용�?정�?� 함수는 배열�?� 반환해야 합니다!",
			customfcheck : "Custom function should be present in case of custom checking!"
			
		}
	},
	view : {
		caption: "? ??",
		bClose: "??"
	},
	del : {
		caption: "??",
		msg: "선�?�?� 행�?� 삭제하시겠습니까?",
		bSubmit: "??",
		bCancel: "??"
	},
	nav : {
		edittext: "",
		edittitle: "선�?�?� 행 편집",
		addtext:"",
		addtitle: "? ??",
		deltext: "",
		deltitle: "선�?�?� 행 삭제",
		searchtext: "",
		searchtitle: "? ??",
		refreshtext: "",
		refreshtitle: "??? ??",
		alertcap: "??",
		alerttext: "행�?� 선�?하세요",
		viewtext: "",
		viewtitle: "선�?�?� 행 조회"
	},
	col : {
		caption: "열�?� 선�?하세요",
		bSubmit: "확�?�",
		bCancel: "??"
	},
	errors : {
		errcap : "??",
		nourl : "설정�?� url�?� 없습니다",
		norecords: "처리할 행�?� 없습니다",
		model : "colNames�?� 길�?�가 colModel과 �?�치하지 않습니다!"
	},
	formatter : {
		integer : {thousandsSeparator: ",", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat",
				"�?�", "월", "화", "수", "목", "금", "토"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
				"1?", "2?", "3?", "4?", "5?", "6?", "7?", "8?", "9?", "10?", "11?", "12?"
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
