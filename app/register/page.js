import claases from './page.module.css';

export default function Register() {
    return (
        <div className={claases.main}>
            <form className={claases.form} method="POST" action="/api/auth/signup">
                <label className={claases.label}>이름</label>
                <input className={claases.input} name="name" type="text" placeholder="이름" />
                <label className={claases.label}>이메일</label>
                <input className={claases.input} name="email" type="text" placeholder="이메일" />
                <label className={claases.label}>비밀번호</label>
                <input
                    className={claases.input}
                    name="password"
                    type="password"
                    minLength={6}
                    maxLength={12}
                    placeholder="비번"
                />
                <button className={claases.btn} type="submit">
                    회원가입
                </button>
            </form>
        </div>
    );
}
