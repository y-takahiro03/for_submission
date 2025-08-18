
(() => {

  let intervalId;

  // 画面に特定の要素があったときに動くようにする
  const AttributeSettings = () => {

    try {
        const inputElement = document.getElementById("product_code");       // 商品番号 inputタグのidが合致するか確認
        if (inputElement) {
          clearInterval(intervalId);
            // 取得した要素に値がない場合は何が返る？　→　"" 空文字が返ってくる 
            const inputValue = inputElement.value;

            if (!inputValue) {
              // inputElement.placeholder = "";
              inputElement.value = "[連番]";
            } else {
              console.log(`商品番号${inputValue}が入力されています`);
            }
          // 設定するtabIndexをまとめたオブジェクト
          const elements = [
            // { class: "custom-combobox-input", sort: 2, tabIndex: 1 },//アイテム document.getElementsByClassNameで取得した3番目の要素に対して属性を付与する
            { id: "token-input-cnd_multiple_select_product_detail27", tabIndex: 3 }, // ブランド
            { id: "product_detail308", tabIndex: 4 }, // ブランド手入力
            // { class: "custom-combobox-input", sort: 4, tabIndex: 4 },//シーズン document.getElementsByClassNameで取得した5番目の要素に対して属性を付与する
            { id: "product_detail32", tabIndex: 6 }, // デザイン
            // { class: "custom-combobox-input", sort: 5, tabIndex: -1 },//表記サイズ document.getElementsByClassNameで取得した6番目の要素に対して属性を付与する
            { id: "product_detail309", tabIndex: 7 }, // 表記サイズ手入力
            { id: "product_detail41", tabIndex: -1 }, // 型番
            { id: "maker_product_code_request_button", tabIndex: -1 }, // カタログボタン
            { id: "product_detail43", tabIndex: -1 }, // シリアル
            { name: "product_detail34", tabIndex: 8, isName: true }, // 対象のラジオボタン
            { id: "product_detail240", tabIndex: -1 }, // 備考1
            // { class: "custom-combobox-input", sort: 6, tabIndex: -1 },//カラー検索 document.getElementsByClassNameで取得した7番目の要素に対して属性を付与する
            { id: "product_detail52", tabIndex: 9 }, // カラー1
            { id: "product_detail306", tabIndex: -1 }, // ゆうパケット
            { id: "product_detail5", tabIndex: -1 }, // 仕入価格
            { id: "price02", tabIndex: 10 }, // 販売価格
            { id: "product_detail304", tabIndex: -1 }, // 即決価格
            { id: "product_detail24", tabIndex: -1 }, // 登録日
            { name: "status", tabIndex: -1, isName: true }, // 公開・非公開
            // { class: "custom-combobox-input", sort: 3, tabIndex: 10 },//商品状態 document.getElementsByClassNameで取得した4番目の要素に対して属性を付与する
            { id: "product_detail250", tabIndex: -1 }, // ヤフオク|商品名 
            { id: "product_detail305", tabIndex: -1 }, // メルカリ|商品名
            { id: "product_detail58", tabIndex: 14 }, // ヤフオク商品説明文
            { id: "product_detail61", tabIndex: 15 }, // メルカリ商品説明文
          ];

          // 要素ごとにtabIndexを設定
          elements.forEach(({ id, name, tabIndex, isName }) => {
            let targetElement;

            if (isName) {
              targetElement = document.getElementsByName(name);
              if (targetElement.length > 0) {
                targetElement.forEach(element => {
                  element.tabIndex = tabIndex;
                  // console.log(`${element}のtabindexを${tabIndex}にしました。`);
                });
              } else {
                // console.log(`指定したname(${name})の要素がみつかりません`);
              }
            } else {
              targetElement = document.getElementById(id);
              if (targetElement) {
                targetElement.tabIndex = tabIndex;
                // console.log(`${targetElement}のtabindexを${tabIndex}にしました。`);
              } else {
                // console.log(`指定したid(${id})がみつかりません`);
              }
            }
          });

          // 表の No image に対して
          const aElement = document.querySelector('.main_product_image a');
          if (aElement) {
            aElement.tabIndex = -1;
          } else {
            // console.log("No imageの要素が取得できません。");
          }

          // WSのオリジナルCSSが適応されている要素を取得する
          const customElements = document.getElementsByClassName("custom-combobox-input")
          for (let i = 0; i <= customElements.length - 1; i++) {
            switch (i) {

              case 1: {
                if (customElements[i].tabIndex != -1) {
                  customElements[i].tabIndex = 1;  // 在庫場所・棚
                  // console.log("在庫場所・棚にtabIndex1を設定しました。");
                }

                const selectElement = document.querySelector('select[name="stock_place_location"]');
                if (selectElement) {
                  // input custom-combobox-input の2番目の要素にあてる
                  const getOption = selectElement.options[1];
                  if (getOption.textContent == "【本社】仮棚") {
                    getOption.selected = true; // デフォルトで2つ目の要素を取得している 
                    // 2つ目の要素の文字列が 【本社】仮棚 に合致するときだけ optionタグをデフォルトにする
                    customElements[i].value = getOption.textContent;  // 取得したテキストをinput要素に設定
                  } else {
                    // console.log("オプション要素の並びに変更が加わった可能性があります!");
                  }
                  // console.log(`セレクト要素が取得できました`);
                } else {
                  // console.log("セレクトの要素が取得できません");
                }

                break;
              }

              case 2: {
                customElements[i].tabIndex = 1; // アイテム
                // console.log("アイテムにtabIndex1を設定しました。");
                break;
              }
              case 4: {
                customElements[i].tabIndex = 5; // シーズン
                // console.log("シーズンにtabIndex4を設定しました。");
                break;
              }
              case 5: {
                customElements[i].tabIndex = -1; // 表記サイズ
                // console.log("表記サイズにtabIndex-1を設定しました。");
                break;
              }
              case 6: {
                customElements[i].tabIndex = -1; // カラー検索
                // console.log("カラー検索にtabIndex-1を設定しました。");
                break;
              }
              case 3: {
                customElements[i].tabIndex = 11; //商品状態
                // console.log("商品状態にtabIndex10を設定しました。");
                break;
              }
            }
          }
          // デフォルト商品名を適用ボタンにtabindexを設定する
          const defaultButton_Elements = document.querySelectorAll('input[value*="デフォルト商品名を適用"]');
          if (defaultButton_Elements) {
            defaultButton_Elements[0].tabIndex = 12;
            defaultButton_Elements[1].tabIndex = 13;
          } else {
            // console.log("デフォルト商品名を適用ボタンの取得に失敗しました");
          }
        }
    } catch (e) {
      console.log("エラーが発生しました" + e);
      clearInterval(intervalId);
    }
  }
  intervalId = setInterval(AttributeSettings, 300);


})();



window.onload = function () {
  try {
    // 要素を取得
    const customElements = document.getElementsByClassName("custom-combobox-input");
    const checkElement = customElements.length > 2 ? customElements[2] : null;
    const nextElements = document.getElementsByClassName("token-input-input-token-facebook");
    const nextElement = nextElements.length > 0 ? nextElements[0] : null;
    const testElement = document.getElementById("product_detail308");

    // 要素が存在するか確認し、処理を実行
    if (checkElement && !checkElement.value) {
      checkElement.focus();
      console.log("アイテムにフォーカスします。");
    } else if (nextElement && !nextElement.value) {
      nextElement.focus();
      console.log("ブランド項目にフォーカスします。");
    } else {
      console.log("アイテム、ブランド項目に値があるので、動作しない");
    }
  } catch (error) {
    console.error("エラーが発生しました:", error);
  }
};