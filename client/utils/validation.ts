interface ICheck {
    success: boolean;
    msg?: string;
}

export const checkEmail = (email: string): ICheck => {
    let success = true;
    let msg = '';

    if (email.length < 1) {
        success = false;
        msg = '이메일은 필수값입니다.'

        return { success, msg }
    }

    if (!email.includes('@')) {
        success = false;
        msg = '이메일을 정확하게 입력해주세요.'

        return { success, msg }
    }

    return { success }
} 

export const checkPassword = (pw: string): ICheck => {
    let success = true;
    let msg = '';

    if (pw.length < 1) {
        success = false;
        msg = '비밀번호는 필수값입니다.'

        return { success, msg }
    }

    if (pw.length < 8 || pw.length > 12) {
        success = false;
        msg = '비밀번호는 8자리 이상 12자리 이하여야 합니다.'

        return { success, msg }
    }

    return { success }
}