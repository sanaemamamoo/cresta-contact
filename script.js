//ドロワー
jQuery('.header-nav').on('click', function(e) {//ハンバーガーがクリックされた時、どういった動きをするか
    e.preventDefault();//aタグとかボタンとかブラウザに依存する操作を無効化する、クリックイベントの時にはセットで覚えておく
   
    jQuery('.header-nav').toggleClass('is-active');//クリックした時にis-activeがついていたら外して、ついていなかったらつける動き
    jQuery('.drawer-content').toggleClass('is-active');
    jQuery('.drawer-background').toggleClass('is-active');
    
    return false;
   });
