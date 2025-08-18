// ページをロードしたときにアイテムにフォーカスをあてる
try {
  window.onload = function () {
    // ページがロードされたときに実行したい処理
    const customElements = document.getElementsByClassName("custom-combobox-input");
    const CheckElement = customElements[1]; // アイテム
    const nextElement = customElements[4];  // サイズ
    if (CheckElement && nextElement) {
      if (CheckElement.value) {
        nextElement.focus();
      } else {
        CheckElement.focus();
      }
    }
  };
} catch {
  // console.log("フォーカス対象がみつかりません。");
}

// 入力項目を変更するタブ をクリックしたときのカーソルを位置を設定する
try {
  const targetUl = document.getElementById("tab");
  const liElements = targetUl.querySelectorAll("li");

  const targetDiv = document.querySelector('.box-content.gridster.ready'); // 入力する項目と同じ種類のもの
  const inputElements = targetDiv.querySelectorAll('input'); // div 内の全ての input 要素を取得
  const detailTarget = inputElements[0];

  const listingTarget = document.getElementById("product_detail214"); //出品詳細画面の入力エリア


  if (liElements) {
    liElements[1].addEventListener('click', () => {
      if (detailTarget) {
        detailTarget.focus();
      }
    });

    liElements[2].addEventListener('click', () => {
      if (listingTarget) {
        listingTarget.focus();
        listingTarget.inputmode = 'text';
      }
    })
  }
} catch {
}

// 商品情報項目画面にtabIndexで順番をあてる

try {
const elements = {
  size: document.getElementsByClassName('custom-combobox-input')[4],
  sizeManual: document.getElementById("product_detail309"),
  // subject: document.getElementsByName("product_detail34"),
  color: document.getElementsByClassName('custom-combobox-input')[5],
  colorManual: document.getElementById("product_detail52")
};

// 要素が存在する場合のみtabIndexを設定 短絡評価 左辺の評価がfalseなら右辺の評価をスキップする
elements.size && (elements.size.tabIndex = 1);
elements.sizeManual && (elements.sizeManual.tabIndex = 2);
// elements.subject && (elements.subject.tabIndex = 3);
elements.color && (elements.color.tabIndex = 4);
elements.colorManual && (elements.colorManual.tabIndex = 5);
} catch {

}

// 性別の対象のラジオボタンにtabIndexを指定する
try {
  const subjectElements = document.getElementsByName("product_detail34");
  if(subjectElements && subjectElements.length > 0) {
    subjectElements.forEach(element => {
      element.tabIndex = 3;
    });
  }
} catch {
  console.error("tabIndex設定中にエラーが発生しました。",error);
}
