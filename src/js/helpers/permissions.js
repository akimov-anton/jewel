export function isAdmin(user) {
    return user && user.get('role') == 'admin';
}