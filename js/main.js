'use strict';

{
  const selectElement = document.getElementsByTagName('select');
  for (let i = 1; i <= $('select').length; i++) {
    selectElement[i - 1].addEventListener('change', (event) => {
      const selectId = 'select' + i;
      const okId = 'ok' + i;

      if (i <= 5) {
        var select = document.form1[selectId];
      } else if (i <= 10) {
        var select = document.form2[selectId];
      } else {
        var select = document.form3[selectId];
      }

      // 選択している項目のindexを取得
      var index = select.selectedIndex;

      // okボタンスタイル変更
      if (index == 0) {
        $('#ok' + i).removeClass("ok2");
      } else {
        $('#ok' + i).addClass("ok2");
      }

      /* 申込みボタンスタイル変更処理 */
      // 選択完了数を取得
      // for (let j = 1; j <= 5; j++) {
      //   if ($('#ok' + j).hasClass('ok2') == true) {
      //     count = count + 1;
      //   }
      // }

      // 全て選択状態であればボタン押下用スタイルに
      if (i <= 5) {
        btnChange(1);
      } else if (i <= 10) {
        btnChange(2);
      } else {
        btnChange(3);
      }
    });
  }

  function btnChange(formNum) {
    var count = 0;

    if (formNum == 1) {
      var num = 1;
      var btnNum = 1;
    } else if (formNum == 2) {
      var num = 6;
      var btnNum = 3;
    } else {
      var num = 11;
      var btnNum = 5;
    }

    for (let i = num; i <= num + 4; i++) {
      if ($('#ok' + i).hasClass('ok2') == true) {
        count = count + 1;
      }
    }

    // 全て選択状態であればボタン押下用スタイルに
    if (count == 5) {
      // スタイルの変更
      $('#btn' + btnNum).addClass("button3");
      $('#btn' + (btnNum + 1)).addClass("button4");

      // disabledの解除
      $('#input' + btnNum).prop('disabled', false);
      $('#input' + (btnNum + 1)).prop('disabled', false);
    } else {  // ひとつでも選択していなければ初期状態に
      $('#btn' + btnNum).removeClass("button3");
      $('#btn' + (btnNum + 1)).removeClass("button4");

      // disabledの付与
      $('#input' + btnNum).prop('disabled', true);
      $('#input' + (btnNum + 1)).prop('disabled', true);
    }
  }
}