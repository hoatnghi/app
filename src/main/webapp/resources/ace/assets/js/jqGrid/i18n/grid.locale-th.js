;(function($){
/**
 * jqGrid Thai Translation
 * Kittituch Manakul m.kittituch@Gmail.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
$.jgrid = $.jgrid || {};
$.extend($.jgrid,{
	defaults : {
		recordtext: "�?สดง {0} - {1} จา�? {2}",
		emptyrecords: "???????????",
		loadtext: "�?ำลังร้องขอข้อมูล...",
		pgtext : "หน้า {0} จา�? {1}"
	},
	search : {
		caption: "�?ำลังค้นหา...",
		Find: "?????",
		Reset: "คืนค่า�?ลับ",
		odata: [{ oper:'eq', text:"เท่า�?ับ"},{ oper:'ne', text:"ไม่เท่า�?ับ"},{ oper:'lt', text:"น้อย�?ว่า"},{ oper:'le', text:"ไม่มา�?�?ว่า"},{ oper:'gt', text:"มา�?�?�?ว่า"},{ oper:'ge', text:"ไม่น้อย�?ว่า"},{ oper:'bw', text:"ขึ้นต้นด้วย"},{ oper:'bn', text:"ไม่ขึ้นต้นด้วย"},{ oper:'in', text:"มีคำใดคำหนึ่งใน"},{ oper:'ni', text:"ไม่มีคำใดคำหนึ่งใน"},{ oper:'ew', text:"ลงท้ายด้วย"},{ oper:'en', text:"ไม่ลงท้ายด้วย"},{ oper:'cn', text:"มีคำว่า"},{ oper:'nc', text:"ไม่มีคำว่า"}],
		groupOps: [	{ op: "�?ละ", text: "ทั้งหมด" },	{ op: "หรือ",  text: "ใดๆ" }	]
	},
	edit : {
		addCaption: "???????????",
		editCaption: "�?�?้ไขข้อมูล",
		bSubmit: "บันทึ�?",
		bCancel: "ย�?เลิ�?",
		bClose: "???",
		saveData: "คุณต้อง�?ารบันทึ�?าร�?�?้ไข ใช่หรือไม่?",
		bYes : "บันทึ�?",
		bNo : "ละทิ้ง�?าร�?�?้ไข",
		bExit : "ย�?เลิ�?",
		msg: {
			required:"???????????????",
			number:"�?รุณา�?รอ�?หมายเลขให้ถู�?ต้อง",
			minValue:"ค่าของข้อมูลนี้ต้องไม่น้อย�?ว่า",
			maxValue:"ค่าของข้อมูลนี้ต้องไม่มา�?�?ว่า",
			email: "อีเมลล์นี้ไม่ถู�?ต้อง",
			integer: "�?รุณา�?รอ�?เป็นจำนวนเต็ม",
			date: "�?รุณา�?รอ�?วันที่ให้ถู�?ต้อง",
			url: "URL ไม่ถู�?ต้อง URL จำเป็นต้องขึ้นต้นด้วย 'http://' หรือ 'https://'",
			nodefined : "ไม่ได้ถู�?�?ำหนดค่า!",
			novalue : "ต้อง�?าร�?ารคืนค่า!",
			customarray : "ฟัง�?์ชันที่สร้างขึ้นต้องส่งค่า�?ลับเป็น�?บบ�?อเรย์",
			customfcheck : "ระบบต้อง�?ารฟัง�?์ชันที่สร้างขึ้นสำหรับ�?ารตรวจสอบ!"
			
		}
	},
	view : {
		caption: "เรีย�?ดูข้อมูล",
		bClose: "???"
	},
	del : {
		caption: "????????",
		msg: "คุณต้อง�?ารลบข้อมูลที่ถู�?เลือ�? ใช่หรือไม่?",
		bSubmit: "ต้อง�?ารลบ",
		bCancel: "ย�?เลิ�?"
	},
	nav : {
		edittext: "",
		edittitle: "�?�?้ไขข้อมูล",
		addtext:"",
		addtitle: "???????????",
		deltext: "",
		deltitle: "????????",
		searchtext: "",
		searchtitle: "???????????",
		refreshtext: "",
		refreshtitle: "??????",
		alertcap: "???????",
		alerttext: "�?รุณาเลือ�?ข้อมูล",
		viewtext: "",
		viewtitle: "??????????????????"
	},
	col : {
		caption: "�?รุณาเลือ�?คอลัมน์",
		bSubmit: "ต�?ลง",
		bCancel: "ย�?เลิ�?"
	},
	errors : {
		errcap : "เ�?ิดความผิดพลาด",
		nourl : "ไม่ได้�?ำหนด URL",
		norecords: "ไม่มีข้อมูลให้ดำเนิน�?าร",
		model : "จำนวนคอลัมน์ไม่เท่า�?ับจำนวนคอลัมน์โมเดล!"
	},
	formatter : {
		integer : {thousandsSeparator: " ", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"??", "?", "?", "?", "??", "?", "?",
				"อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศู�?ร์", "เสาร์"
			],
			monthNames: [
				"ม.ค.", "�?.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "�?.ค.", "ส.ค.", "�?.ย.", "ต.ค.", "พ.ย.", "ธ.ค.",
				"ม�?ราคม", "�?ุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "�?ร�?�?าคม", "สิงหาคม", "�?ันยายน", "ตุลาคม", "พฤศจิ�?ายน", "ธันวาคม"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return ''},
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
