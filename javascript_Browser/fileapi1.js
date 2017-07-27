'use strict'

window.onload=function(){
    var fileInput = document.getElementById('test-image-file');
    var info = document.getElementById('test-file-info');
    var preview = document.getElementById('test-image-preview');

// 监听change事件:
    fileInput.addEventListener('change',function(){
        console.log('change...');
		 // 清除背景图片:
        preview.style.backgroundImage='';
		 // 检查文件是否选择:
        if (!fileInput.value){
            info.innerHTML = '没有选择文件';
            return ;
        }
		 // 获取File引用:
        var file = fileInput.files[0];
		 // 获取File信息:
        info.innerHTML = '文件:' + file.name + '<br>'+'大小:'+file.size+'<br>'+'修改:'+file.lastModifiedDate;
        if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif'){
            alert('不是有效的图片文件!');
            return;
        }
		// 读取文件:
        var reader = new FileReader();
        reader.onload=function(e){
            console.log('reader.onload');
            var data = e.target.result;
            preview.style.backgroundImage='url('+ data +')';
        };
		 // 以DataURL的形式读取文件:
        reader.readAsDataURL(file);
    });
};