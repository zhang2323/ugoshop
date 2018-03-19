//邮政编码的检测
function postalCode(value){
	var reg=/^[1-9]\d{5}$/;
	if(reg.test(value)){
		return true;
	}else{
		return false;
	}
}
//文件格式的检测
function file(value){
	var reg=/^.+\.(zip|rar|7z)$/;
	if(reg.test(value)){
		return true;
	}else{
		return false;
	}
}
//字符串首尾去空格
function  space(str){
	//\s是匹配任何空白字符
	var reg=/^\s*|\s*$/g;
	str.replace(reg,"");
	return str;
}
//邮箱的检测
function email(value){
	var reg=/^\w+@\w+\.(com|cn|net|net.cn|cc|edu)$/;
	if(reg.test(value)){
		return true;;
	}else{
		return false;
	}
}
//手机号检测
function cellPhone(value){
	var reg=/^1[3|4|5|7|8|9]\w{9}$/;
	if(reg.test(value)){
		return true;
	}else{
		return false;
	}
}
//密码的检测
function passWord(value){
	var reg=/^\w{5,19}$/;
	if(reg.test(value)){
		return true;
	}else{
		return false;
	}
}

//身份证的检测
function idCard(value){
	var reg=/^\d{17}[0-9|x|X]$/;
	if(reg.test(value)){
		return true;
	}else{
		return false;
	}
}
//用户名的检测
function username(value){
	//6-16位  首字母必须为字母
	var reg=/^[a-z|A-Z]\w{5,15}$/;
	if(reg.test(value)){
		return true;
	}else{
		return false;
	}
}