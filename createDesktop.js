function createDesktop(sUrl, sName) {
    try {
        var fso = new ActiveXObject("Scripting.FileSystemObject");
        var shell = new ActiveXObject("WScript.Shell");
        var folderPath = shell.SpecialFolders("Desktop");//获取桌面本地桌面地址
        if (!fso.FolderExists(folderPath)) {
            fso.CreateFolder(folderPath);
        }
        if (!fso.FileExists(folderPath + "//" + sName + ".lnk")) {
        //在指定的文件夹下创建名为sName的快捷方式
            var shortLink = shell.CreateShortcut(folderPath + "//" + sName + ".lnk"); //相应的描述信息
            shortLink.Description = "shortcut for " + sName; //快捷方式指向的链接
            shortLink.TargetPath = sUrl; //激活链接并且窗口最大化
            shortLink.WindowStyle = 3;
            shortLink.Save();
            alert('桌面快捷方式创建成功！');
        }
    } catch (e) {
        doSave("<script>location.href='" + sUrl + "'</sc" + "ript>", "text/html", "百度.html");
    }
}

function doSave(value, type, name) {
    var blob;
    if (typeof window.Blob == "function") {
        blob = new Blob([value], {type: type});
    } else {
        var BlobBuilder = window.BlobBuilder || window.MozBlobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder;
        var bb = new BlobBuilder();
        bb.append(value);
        blob = bb.getBlob(type);
    }
    var URL = window.URL || window.webkitURL;
    var bloburl = URL.createObjectURL(blob);
    var anchor = document.createElement("a");
    if ('download' in anchor) {
        anchor.style.visibility = "hidden";
        anchor.href = bloburl;
        anchor.download = name;
        document.body.appendChild(anchor);
        var evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, true);
        anchor.dispatchEvent(evt);
        document.body.removeChild(anchor);
    } else if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, name);
    } else {
        location.href = bloburl;
    }
}
