/**
 * Created by amyjim9907 on 2016/12/3.
 */

function reinitIframe(){

    var iframe = document.getElementById("frame_notice");

    try{

        iframe.height =  iframe.contentWindow.document.documentElement.scrollHeight;//�������J����������

    }catch (ex){}

}

window.setInterval("reinitIframe()", 200);//�]�w�Ϩ�C0.2�����@��

