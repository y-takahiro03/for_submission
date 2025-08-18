(() => {
    const searchBar = document.querySelector('input.form-control');
    // searchBar が存在しない場合は処理を終了する
    if (!searchBar) return;
    // const targetNumnbers = /^[０１２３４５６７８９]*$/ ;
    const targetNumnbers = /^[０-９ａ-ｚＡ-Ｚ]*$/;

    // エンターの入力を入れる
    searchBar.addEventListener("keyup", (e) => {
        // console.log(searchBar.value,searchBar.value.match(targetNumnbers),e);
        if (searchBar.value.match(targetNumnbers) && (e.key == "Enter" || e.code == "Enter")) {
            document.querySelector("#product_code_search_form").submit();
        }
    });

    // 商品コードを入力する画面以外では、フォーカスしないようにする
    const quickSearchElement = document.getElementById("tab-1");
    if (quickSearchElement) {
        searchBar.focus();
    }

    

})();
