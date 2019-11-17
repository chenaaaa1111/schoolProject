import axios from 'axios';
var request={
    post:function(url,data,callBack){
        var baseUrl="http://git.i2f2f.com"
        axios({
            
                method: 'post',
                url:baseUrl+url,
                data:data
              })
              .then((response)=>{
                  console.log(response);
                  if(callBack){
                      callBack(response);
                  }
              })
              .catch((error)=>{
                  console.error(error);
                  alert('系统繁忙，请稍后再试')            
        })
    },
    requestLogin:function(){
        this.post('/roomapi/Login/Loginpwd',{
            mobile:'15269920820',
            LoginPWD:'123456'
        })
    }
}
request.requestLogin()
export default request;