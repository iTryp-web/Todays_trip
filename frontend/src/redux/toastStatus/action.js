//action에서 사용되는 타입 선언
export const SET_MSG = "TOAST_STATUS/SET_MSG"
export const SET_FALSE = "TOAST_STATUS/SET_FALSE"

//Action을 dispatch를 통해서 store에 전달할때 호출되는 함수
//이것이 리듀서에 전달되면 switch문에서 
export const setToastMsg=(msg)=>{
   return{
      type:SET_MSG,
      msg:msg,
      bool:true,
   }
}

export const setToastFalse = () =>{
   return {
      type:SET_FALSE,
      msg:'',
      bool:false,
   }
}