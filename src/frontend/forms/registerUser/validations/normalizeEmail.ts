
// Converte o email em minúsculo e retira o ponto final caso haja
export function normalizeEmail (email: string): string {

    return email.trim().toLowerCase().replace(/\.+$/, '');
}