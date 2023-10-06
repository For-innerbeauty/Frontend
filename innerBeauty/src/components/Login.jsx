import css from './Login.module.css'
import logoUrl from '../assets/FOR.svg'

function Login() {
    return (
        <div className={css.screen}>
            <div className={css.div}>
                <div className={css.text-wrapper-2}>FOR</div>
                <div className="overlap">
                <div className="text-wrapper-3">카카오로 계속하기</div>
                </div>
                <div className="overlap-group">
                <div className="text-wrapper-4">Google로 계속하기</div>
                </div>
                <div className="div-wrapper">
                <div className="text-wrapper-5">facebook으로 계속하기</div>
                </div>
                <div className="overlap-group-2">
                <div className="text-wrapper-6">Instagram으로 계속하기</div>
                </div>
                <p className="p">
                <span className="span">문의가 있을 경우 </span>
                <span className="text-wrapper-7">고객센터</span>
                <span className="span">로 연락주세요.</span>
                </p>
                <div className="text-wrapper-8">이메일로 회원가입하기</div>
                <div className="text-wrapper-9">로그인하기</div>
            </div>
        </div>
    );
}

export default Login;


        // <div className={ classes.wrap }>
        //     <div className={ classes.logo_wrap }>
        //         <img src={logoUrl}></img>
        //     </div>
        //     <div className={ classes.btns } id={ classes.email }>로그인하기</div>
        //     <div className={ classes.btns } id={ classes.kakao }>카카오로 계속하기</div>
        //     <div className={ classes.btns } id={ classes.google }>Google로 계속하기</div>
        //     <div className={ classes.btns }>Instagram으로 계속하기</div>
        // </div>