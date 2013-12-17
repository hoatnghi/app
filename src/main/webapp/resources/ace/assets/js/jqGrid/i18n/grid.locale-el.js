;(function($){
/**
 * jqGrid Greek (el) Translation
 * Alex Cicovic
 * http://www.alexcicovic.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "View {0} - {1} of {2}",
	    emptyrecords: "No records to view",
		loadtext: "Φό�?τωση...",
		pgtext : "Page {0} of {1}"
	},
	search : {
	    caption: "?????????...",
	    Find: "Ε�?�?εση",
	    Reset: "Επαναφο�?ά",
	    odata: [{ oper:'eq', text:'equal'},{ oper:'ne', text:'not equal'},{ oper:'lt', text:'less'},{ oper:'le', text:'less or equal'},{ oper:'gt', text:'greater'},{ oper:'ge', text:'greater or equal'},{ oper:'bw', text:'begins with'},{ oper:'bn', text:'does not begin with'},{ oper:'in', text:'is in'},{ oper:'ni', text:'is not in'},{ oper:'ew', text:'ends with'},{ oper:'en', text:'does not end with'},{ oper:'cn', text:'contains'},{ oper:'nc', text:'does not contain'}],
	    groupOps: [	{ op: "AND", text: "all" },	{ op: "OR",  text: "any" }	]
	},
	edit : {
	    addCaption: "Εισαγωγή Εγγ�?αφής",
	    editCaption: "Επεξε�?γασία Εγγ�?αφής",
	    bSubmit: "Καταχώ�?ηση",
	    bCancel: "Άκυ�?ο",
		bClose: "????????",
		saveData: "Data has been changed! Save changes?",
		bYes : "Yes",
		bNo : "No",
		bExit : "Cancel",
	    msg: {
	        required:"Το πεδίο είναι απα�?αίτητο",
	        number:"Το πεδίο δέχεται μόνο α�?ιθμο�?ς",
	        minValue:"Η τιμή π�?έπει να είναι μεγαλ�?τε�?η ή ίση του ",
	        maxValue:"Η τιμή π�?έπει να είναι μικ�?ότε�?η ή ίση του ",
	        email: "Η διε�?θυνση e-mail δεν είναι έγκυ�?η",
	        integer: "Το πεδίο δέχεται μόνο ακέ�?αιους α�?ιθμο�?ς",
			url: "is not a valid URL. Prefix required ('http://' or 'https://')",
			nodefined : " is not defined!",
			novalue : " return value is required!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
		}
	},
	view : {
	    caption: "View Record",
	    bClose: "Close"
	},
	del : {
	    caption: "Διαγ�?αφή",
	    msg: "Διαγ�?αφή των επιλεγμένων εγγ�?αφών;",
	    bSubmit: "�?αι",
	    bCancel: "Άκυ�?ο"
	},
	nav : {
		edittext: " ",
	    edittitle: "Επεξε�?γασία επιλεγμένης εγγ�?αφής",
		addtext:" ",
	    addtitle: "Εισαγωγή νέας εγγ�?αφής",
	    deltext: " ",
	    deltitle: "Διαγ�?αφή επιλεγμένης εγγ�?αφής",
	    searchtext: " ",
	    searchtitle: "Ε�?�?εση Εγγ�?αφών",
	    refreshtext: "",
	    refreshtitle: "???????? ??????",
	    alertcap: "Π�?οσοχή",
	    alerttext: "Δεν έχετε επιλέξει εγγ�?αφή",
		viewtext: "",
		viewtitle: "View selected row"
	},
	col : {
	    caption: "Εμφάνιση / Απόκ�?υψη Στηλών",
	    bSubmit: "??",
	    bCancel: "Άκυ�?ο"
	},
	errors : {
		errcap : "??????",
		nourl : "Δεν έχει δοθεί διε�?θυνση χει�?ισμο�? για τη συγκεκ�?ιμένη ενέ�?γεια",
		norecords: "Δεν υπά�?χουν εγγ�?αφές π�?ος επεξε�?γασία",
		model : "Άνισος α�?ιθμός πεδίων colNames/colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Κυ�?", "Δευ", "Τ�?ι", "Τετ", "Πεμ", "Πα�?", "Σαβ",
				"Κυ�?ιακή", "Δευτέ�?α", "Τ�?ίτη", "Τετά�?τη", "Πέμπτη", "Πα�?ασκευή", "Σάββατο"
			],
			monthNames: [
				"Ιαν", "Φεβ", "Μα�?", "Απ�?", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "�?οε", "Δεκ",
				"Ιανουά�?ιος", "Φεβ�?ουά�?ιος", "Μά�?τιος", "Απ�?ίλιος", "Μάιος", "Ιο�?νιος", "Ιο�?λιος", "Α�?γουστος", "Σεπτέμβ�?ιος", "Οκτώβ�?ιος", "�?οέμβ�?ιος", "Δεκέμβ�?ιος"
			],
			AmPm : ["??","??","??","??"],
			S: function (j) {return j == 1 || j > 1 ? ['?'][Math.min((j - 1) % 10, 3)] : ''},
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
