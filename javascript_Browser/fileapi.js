'use strict'

window.load=function(){
    var fileInput = document.getElementById('test-image-file');
    var info = document.getElementById('test-file-info');
    var preview = document.getElementById('test-image-preview');

    alert('dada')
    fileInput.addEventListener('change',function(){
        console.log('change...');
        preview.style.backgroundImage='';
        if (!fileInput.value){
            info.innerHTML = '没有选择文件';
            return ;
        }
        var file = fileInput.files[0];
        info.innerHTML = '文件:'+ file.name + '<br>'+'大小:'+file.size+'<br>'+'修改:'+file.lastModifiedDate;
        if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif'){
            alert("不是有效的图片文件!");
            return;
        }

        var reader = new FileReader();
        reader.onload=function(e){
            console.log('reader.onload');
            var data = e.target.result;
            preview.style.backgroundImage='url('+ data +')';
        };
        reader.readAsDataURL(file);
    });
};