(function(window,document,undefined){
  var json = document.getElementById('json');
  var bt = document.getElementById('json-beautifier');
  var message = document.getElementById('message')
  var note = document.createElement("p");
  bt.addEventListener("click",function(){
    var raw_json = json.value;
    raw_json = raw_json.replace(/\s+$/,'');
    raw_json = raw_json.replace(/^\s+/,'');
    raw_json = raw_json.replace(/^(\r\n|\r|\n)+,''/);
    raw_json = raw_json.replace(/(\r\n|\r|\n)+$,''/);
    try{
      var parsed = JSON.stringify(JSON.parse(raw_json),null,4);      
      json.value = parsed;
      message.className = 'message success';
      note.innerHTML = '转换成功';
    }catch(e){
      message.className = 'message warning';
      note.innerHTML = '转换失败';
    }
    message.style.display = 'block';
    message.appendChild(note) 
  })
})(window,document);
