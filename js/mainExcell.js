 'use-strict';
 

 // 出力するオブジェクト(Array)
 let array1 =[];

// SheetをWorkbookに追加する
function sheet_to_workbook(sheet/*:Worksheet*/, opts)/*:Workbook*/ {
 let n = opts && opts.sheet ? opts.sheet : "Sheet1";
 let sheets = {}; sheets[n] = sheet;
 return { SheetNames: [n], Sheets: sheets };
}

// ArrayをWorkbookに変換する
function aoa_to_workbook(data/*:Array<Array<any> >*/, opts)/*:Workbook*/ {
 return sheet_to_workbook(XLSX.utils.aoa_to_sheet(data, opts), opts);
}

// stringをArrayBufferに変換する
function s2ab(s) {
 let buf = new ArrayBuffer(s.length);
 let view = new Uint8Array(buf);
 for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
   return buf;
 }

function func1() {
// 書き込み時のオプションは以下を参照
let write_opts = {
 type: 'binary'
};

// ArrayをWorkbookに変換する
let wb = aoa_to_workbook(array1);
let wb_out = XLSX.write(wb, write_opts);

// WorkbookからBlobオブジェクトを生成
let blob = new Blob([s2ab(wb_out)], { type: 'application/octet-stream' });

// FileSaverのsaveAs関数で、xlsxファイルとしてダウンロード
saveAs(blob, '希望シフト.xlsx');
}