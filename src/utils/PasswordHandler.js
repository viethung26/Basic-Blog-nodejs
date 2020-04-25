import bcrypt from 'bcrypt'
const SALT_ROUND = 10
export const genHash = async (pwd) => {
    try {
        return await bcrypt.hash(pwd, SALT_ROUND)
    } catch(err) {
        throw err
    }
}

export const comparePassword = async (pwd, hash) => {
    try {
        return bcrypt.compareSync(pwd, hash)
    } catch (err) {
        throw err
    }
}
// export const compare = async (pwd, hash)