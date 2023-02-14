const form = document.getElementById("form");
const button = document.getElementById("button");

form.addEventListener("input", update);
form.addEventListener("change", update);

/*入力フォームの要素*/
var frmoemail = document.getElementById("email");
/*結果出力用の要素*/
var result = document.getElementById("result");
/*メールアドレスのパターン 正規表現*/
var pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;

/*フォーム入力のイベントハンドラ*/
frmoemail.addEventListener("input", (e) => {
  /*メールアドレスのパターンにマッチするかチェック*/
  if (pattern.test(frmoemail.value)) {
    /*パターンにマッチした場合*/
    result.textContent = "";
  } else {
    /*パターンにマッチしない場合*/
    result.textContent = "※メールアドレスではありません";
  }
}
)

function update() {
  const isRequired = form.checkValidity();


  if (isRequired) {
    button.style.opacity = 1;
    button.style.cursor = "pointer";
    return;
  }
}
