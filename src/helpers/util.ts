import bcrypt, { hash } from 'bcrypt'
const saltRounds = 10

export const hashPasswordHelper = async (plainPassword: string) => {
    try {
        return await bcrypt,hash(plainPassword, saltRounds)
    } catch (e) {
        console.log('================e', e);
    }
}