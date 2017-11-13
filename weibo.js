// 批量取消关注，打开新浪微博关注页面。
// 打开chrome控制台，执行下方js

$('[action-type="batselect"]').click();

var nodelist = $('.member_ul').childNodes;
for (var i = 0; i< nodelist.length; i++) {
  if (nodelist[i].nodeName != 'LI') {
    continue;
  }
  nodelist[i].click();
}

$('[node-type="cancelFollowBtn"]').click();

//自动点击确认
$('[node-type="ok"]').click(); 
