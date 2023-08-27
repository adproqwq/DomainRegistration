function check(){
    var domain = document.getElementById("domain");
    if(domain == "www" || domain == "cet" || domain == "game" || domain == "blog") alert("此字段已被注册！");
    else{
        var protocol = confirm("在此注册的域名仅可用于Github Pages。如有发现用于非Github Pages立即收回！\r\rGithub Pages托管的内容必须符合中国大陆的法律，如有违反，域名主有权收回该域名\r\r同意该协议按“确定”，不同意按“取消”。不同意协议将不允许继续注册");
        if(protocol == true) alect("请使用邮箱发送邮件到adpro_qwq@qq.com进行申请，结果会在7-14日内回复至你的邮箱。邮件格式在输入框下方。");
    };
};