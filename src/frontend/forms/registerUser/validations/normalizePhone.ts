
// Retirar todos os caracteres especiais do número de telefone
export function normalizePhone(phone: string): string {
    return phone.replace(/\D/g, '');
}