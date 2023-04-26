import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";
class AuthLogic {//클래스 선언
  //생성자 - 전변 초기화
  constructor() {
    this.auth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    //this.kakaoProvider = new KakaoProvider();
  }
  getUserAuth = () => {
    return this.auth;
  };
  getGoogleAuthProvider = () => {
    return this.googleProvider;
  };
}
export default AuthLogic;//외부 js에서 사용할 때

//사용자가 변경되는지 지속적으로 체크하여 변경될 때 마다 호출됨 - 구글 서버에서 제공하는 서비스
//콜백함수
export const onAuthChange = (auth) => {
  return new Promise((resolve) => {//비동기 서비스 구현
    //사용자가 바뀔때 마다 콜백함수를 받아서
    auth.onAuthStateChanged((user) => {//파라미터 주입
      resolve(user);//내보내지는 정보 - View 계층 - App.jsx
    });
  });
};

export const logout = (auth) => {
  return new Promise((resolve, reject) => {
    auth.signOut().catch((e) => reject(e + "로그아웃 오류입니다."));
    //우리회사가 제공하는 서비스를 누리기 위해서는 구글에서 제공하는 기본 정보 외에
    //추가로 필요한 정보 있다 - 테이블 설계 - 세션
    //로그인 성공시 세션 스토리지에 담아둔 정보를 모두 지운다
    window.sessionStorage.clear();
    //서비스를 더 이상 사용하지 않는 경우이므로 돌려줄 값은 없다
    resolve(); //그래서 파라미터는 비웠다
  });
};//end of logout

//이메일과 비번으로 회원가입 신청을 한 경우 로그인 처리하는 함수임
//auth - AuthLogic클래스 생성자 getAuth() - auth
//두번째와 세번째 - email, password
export const loginEmail = (auth,user) => {//user ->
  console.log(auth)
  console.log(user.email+user.password)
  return new Promise((resolve,reject)=>{
    signInWithEmailAndPassword(auth,user.email,user.password)
    .then((userCredential)=>{
      //Signed in
      const user = userCredential.user;
      console.log(user)
      resolve(userCredential)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + "," + errorMessage);
      reject(error);
    });
  })
}

//로그인 시도시 구글인증인지 아닌지 문자열로 넘겨받음
//구글인증인 경우 - Google
export const loginGoogle = (auth, googleProvider) => {
  console.log(auth)
  console.log(googleProvider)
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, googleProvider)//팝업 열림
      .then((result) => {
        //콜백이 진행됨
        const user = result.user; //구글에 등록되어 있는 profile 정보가 담겨있음
        console.log(user);
        resolve(user);//인증된 사용자 프로필 정보고 화면 쪽으로 내보낸다
      })
      .catch((e) => reject(e));
  });
  //제공자의 정보이면 팝업을 띄워서 로그인을 진행하도록 유도함
};

export const signupEmail = (auth, user) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        sendEmail(userCredential.user).then(() => {
          resolve(userCredential.user.uid);
        });
      })
      .catch((e) => reject(e));
  });
};
export const linkEmail = (auth, user) => {
  console.log(auth);
  console.log(auth.currentUser);
  console.log(user);
  return new Promise((resolve, reject) => {
    console.log(user.email + "," + user.password);
    const credential = EmailAuthProvider.credential(user.email, user.password);
    console.log(credential);
    console.log(auth.currentUser.uid);
    resolve(auth.currentUser.uid);
    /* 인증정보가 다른 사용자 계정에 이미 연결되어 있다면 아래 코드 에러 발생함
     linkWithCredential(auth.currentUser, credential)
       .then((usercred) => {
         console.log(usercred);
         const user = usercred.user;
         console.log("Account linking success", user.uid);
         resolve(user.uid);
       })
       .catch((e) => reject(e));
     */
  });
};

export const sendEmail = (user) => {
   return new Promise((resolve, reject) => {
     sendEmailVerification(user)
       .then(() => {
         resolve("해당 이메일에서 인증메세지를 확인 후 다시 로그인 해주세요.");
       })
       .catch((e) => reject(e + ": 인증메일 오류입니다."));
   });
 };

export const sendResetpwEmail = (auth,email) => {
  console.log(email)
  return new Promise((resolve,reject) =>{
    sendPasswordResetEmail(auth,email)
    .then(()=>{
      resolve('비밀번호 변경 이메일을 보냈습니다.')
    })
    .catch((e)=> reject(e))
  })
}